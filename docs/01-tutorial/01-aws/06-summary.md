---
sidebar_position: 6
---

# Summary

In this tutorial you created an AWS account and learned a bit about many
important tools that professional software developers use. You wrote your first
[Go](https://go.dev/) program and now have an EC2 instance that you can use for
your own future creative adventures with software development.

## Shutdown the EC2 Instance

The EC2 Instance we are using for this project is very inexpensive to run. At
the time I am writing this tutorial the price of the instance in the USA
datacenter is around 0.04 dollars per hour. If we run it 24 hours a day it will
cost around thirty dollars per month. We can reduce this cost by shutting down
the instance when we are not using it.

To shutdown the instance, simply issue the `shutdown` command from a bash
session within the image using sudo because this is a root level command that
will impact all users of the system.

Issue the command as follows:

```bash
sudo shutdown now
```

I wrote a script that will help you restart the.

View the `scripts/start-s3d` script using Vim before you execute it and make
sure you understand all the commands in that script.

Once you are comfortable with the startup script, run it by entering the
following in your Bash terminal.

```bash
cd s3d-tutorial-start
scripts/start-s3d
scripts/ssh-to-s3d 
```

Try to develop the habit of starting and stopping instance so they are only
running when you need them. Shutting down instances that you do not need will
reduce costs and the assocaited impact on global warming. Since the image used
for this tutorial is low cost it will not be a big problem if you occasionally
leave it running by mistake. As you progress in your career you may become
responsible for managing or designing software where the decisions about how
cloud processing is managed has a huge financial impact.

Each time you start the instance, the DNS name it uses will change and as such
when you restart it in CloudShell you will need to observe the output of the
`start-s3` script in order to learn the new name of your instance.

The EC2 instance provides you with a true Linux environment where you can learn
about the world of software development safely and without the _consumer_
features that make most personal computers unsubtible for software development
work until and unless they are heavily customized.

EC2 Instances also require customization but in the AWS enviornment you can
quickly and easily create and destroy the instances and write scripts or
terraform module to automate the customizations you make.

