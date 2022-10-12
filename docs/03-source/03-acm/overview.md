---
sidebar_position: 1
---

# AWS ACM Module
## Overview
This is a fork of the [github.com/terraform-aws-modules][fork] module.

Forking the module has ramifactions in terms of security. With this fork we
know that the sources from [github.com/terraform-aws-modules][fork] can not be
altered unless our GitHub account is hacked or GitHub it's self is hacked.

Had we instead simply had module in GitHub that referenced the upstream
location our understanding of the operation of Terraform is that a request to
Terraform Registry would simply request from the `terraform-aws-modules` GitHub
organization. If that organisation were to have been compromized an attacker
could potentionally inject their code by rewriting a tag with the result that
we would execute untrusted code using our security credentials.

In the interest of safety, we are forking the module to our account with the
fork in place a user of the `s3d-club` executing code from our repository does
not automatically execute code from downstream repositories that we do not
countrol.

We are also providing our own "frontend" module with a reduced set of options.
We are not trying to be a general purpose module and as such we provide a
reduced interface and then use the upstream module for our implementation.

In the near future this module will likely be totally replaced with a less
complex implementaiton of our own but for now and always we are extremely
thankful for all the great code provided by the `terraform-aws-modules` group.

[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
[fork]: https://github.com/terraform-aws-modules/terraform-aws-acm
[lice]: ./LICENSE.md
