---
sidebar_position: 1
---

# Site Overview
In this tutorial, you will use AWS to establish a site of your own. Your site
will have a simple web page and a new EC2 instance with a well defined
development enviornment. These resources will be on a "hosted zone" where
account controls how internet traffic is directed. You will have a _world wide
web_ site at `https://www.<YOUR-DOMAIN.`.  Your developement environment will
be at `dev.<YOUR-DOMAIN>`.

Directory names are an important part of how the Internet works.

With a hosted zone defined in your AWS account you will be able to create sites
where you can provide various services. The most obvious example of directory
naming is the way websites are managed. For example, this page is hosted on the
`s3d.club` domain. Our top level domain suffix is `.club` because it is far
less expensive to purchase domains on the top level `.club` vs. using `.com`.
_(currently the owner of `s3d.com` is holding that domain and offering it for
sale at `$120,000.00`)_. As a club, there is no reason for us to get a `.com`
domain name.

For our needs, we are quite happy with the domain suffix of `.club` because we
were able to lease the domain for a **MUCH** lower price.  The club paid
`$160.00` and now has a ten year lease on `s3d.club`). In this tutorial you may
purchase your own domain or if you would like you can contact me and I can
provide you a free subdoman on `s3d.club`. We could for example provide a sub
domain named `john-doe.s3d.club` for your use or you can lease a domain from
Amazon for one year at a cost of around `$3.00` if you are willing to use
something like `james-bond-007.click` _(the top leve `.click` domain is
currently the least expensive option)_. Once you have control of a hosted zone,
you can define names under your zone at a much lower cost.

We host the website here on the `www.s3d.club` address using the tools we
describe in our tutorial.  We use `dev.s3d.club` as a zone where we manage
resouces that support development of tutorials, services, and tools. I also
have a personal sub-domain at `farnsworth.s3d.club`.

In the tutorial, you will gain experience with Bash scripting and also learn
about an important tool called **Terraform** where we define resources in a
high level language using open source modules that the S3D Club maintains.

Take your time as you work through the steps and think about what you are doing
on each step.

The task use open source Terraform modules. You will not write a lot of code in
this site buy you will build some Terraform configuration files and of course
you will be working in Bash with VIM.

If you are new to VIM I recommed you start each learning session by spending
some time with `vimtutor`.
