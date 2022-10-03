---
title: SSH Reverse Tunneling
authors:
  name: Mark Fansworth
  title: A Software Developer
  url: https://www.linkedin.com/in/markfarnsworth/
  image_url: https://media-exp1.licdn.com/dms/image/C4D03AQHyNRa5uRX66w/profile-displayphoto-shrink_800_800/0/1610824372979?e=1668643200&v=beta&t=SAlTxYvkFXlzAtS6_vpEo044gkUMJgCNarUoolBqvEc
tags: [GIT, SSH]
---
Today, I created a reverse SSH tunnel in order to access a private GIT server
on a private network from within my AWS VPC.

This is **very** useful and a totally secure way to move content from a GIT
server on one network to a VPC without establishing network peering or taking
other actions that would expose the private GIT server. Since it is something
that has confused me in the past I figure it is worth creating a blog post in
hopes of helping others and as notes for myself.

I needed the tunnel because, in this particular case, our group has an AWS
account that we think of as our _"sandbox"_. As a sandbox account we are often
testing ideas in this semi-secure account. While we are very careful about
security in our _"sandbox"_ we don't view the VPCs in sandbox with the same
levl of trust as our other networks. For some work I need to be on the VPN and
when I am there, I need to have access to Git.

SSH Tunneling and; in this case, reverse tunneling is a great tool for this
type of situation. With the tunnel, I can establish a SSH session and do my
work and while working on the remote system I can still easily commit and push
changes to our GIT repository while knowing that outside of my tunnel the
private Git repository is not exposed. The tunnel is only open while I have my
SSH session active.

While it can be intimidating at first, the syntax for SSH tunneling in forward
and remote dirctions is actually fairly simple.

Imagine that on my local network my team uses the following URL to perform our
Git operations.

- `[git@ixd.neo3foozn4tx.com]:team-foo/product-qx.git`

Without SSH tunneling, we establish our SSH session as follows.
```bash
ssh -i my-id.pem ec2-user@ec2-1-2-3-4.compute-1.amazonaws.com
```

Since the domain `neo3foozn4tx.com` in this fictional example is not on the
public internet and since our AWS VPC does not have any bridged networking we
can not connect `neo3foozn4tx.com` domain from the remote when we establish a
normal SSH session. If we attempt to connect we simply get a timeout after a
while.

To setup our tunnel and also allow us to use our normal name we first make a
change to the hosts file on the EC2 instance. We need to avoid a DNS lookup and
want to associate `127.0.0.1` with the name.

The following is our updated `/etc/hosts` file with our change.

```text
127.0.0.1 ixd.neo3foozn4tx.com
127.0.0.1 localhost localhost.localdomain
::1       localhost6 localhost6.localdomain6
```

After making the change to `/etc/hosts`, we logout and then login again but this
time when we establish our SSH session we set the `-R` parameter to configure
our reverse tunnel.
```bash
ssh -i my-id.pem \
-R 10022:ixd.neo3foozn4tx.com:22 \
-R 10443:ixd.neo3foozn4tx.com:443 \
ec2-user@ec2-1-2-3-4.compute-1.amazonaws.com
```

Once our session on the EC2 starts, we issue the following command to run a
background process forward traffic for the 443 port.  _(as always with bash we
need to be careful about whitespace; in the command make certain not to add a
space after the commas!)_
```bash
sudo socat TCP-LISTEN:443,fork TCP:localhost:10443 &
```

With the tunnel and the change to `/etc/hosts` can now use git operations while
we are in the SSH session. Our tunnel allows for the communication to
`ixd.neo3foozn4tx.com` which otherwise would be unavailable and our
`/etc/hosts` change allows us to refer to the location using the same logical
name even we are actually performing traffic on a localhost port so our tunnel
can transport the traffic.

We can now perform Git operations over HTTP exactly the same as when we are on
our local. When using Git with SSH protocol we use the 10022 port that our
tunnel has in place to reach the 22 port of the on-prem system.

It's really not that difficult!
