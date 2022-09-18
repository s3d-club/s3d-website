---
sidebar_position: 1
---
# S3D TF AWS ACM
S3D Club's fork of
[github.com/terraform-aws-modules](https://github.com/terraform-aws-modules/terraform-aws-acm).

Forking the module has ramifactions in terms of security. With this fork we
know that the sources from
[github.com/terraform-aws-modules](https://github.com/terraform-aws-modules/terraform-aws-acm)
can not be altered unless our GitHub account is hacked or GitHub it's self is
hacked.

Had we instead simply had module in GitHub that referenced the upstream
location our understanding of the operation of Terraform is that a request to
Terraform Registry would simply request from the `terraform-aws-modules` GitHub
organization. If that organisation were to have been compromized an attacker
could potentionally inject their code by rewriting a tag with the result that
we would execute untrusted code using our security credentials.

In the interest of safety we are forking the module to our account.

We are also providing our own front end module with a reduced set of options.
We are not trying to be a general purpose module and as such we provide a
reduced interface and then use the upstream module for our implementation.
