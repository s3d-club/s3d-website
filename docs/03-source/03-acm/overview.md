---
sidebar_position: 1
---

# AWS ACM Module

## Overview
This is a fork of the [github.com/terraform-aws-modules][fork] module.

Forking the module has ramifactions in terms of security. With this fork we know
that the sources from [github.com/terraform-aws-modules][fork] can not be
altered unless our GitHub account is hacked or GitHub it's self is hacked.

Had we instead simply had module in GitHub that referenced the upstream location
our understanding of the operation of Terraform is that a request to Terraform
Registry would simply request from the `terraform-aws-modules` GitHub
organization. If that organisation were to have been compromized an attacker
could potentionally inject their code by rewriting a tag with the result that we
would execute untrusted code using our security credentials.

In the interest of safety, we are forking the module to our account with the
fork in place a user of the `s3d-club` executing code from our repository does
not automatically execute code from downstream repositories that we do not
manage.

Our own _frontend_ module provides a reduced set of options. We are not trying
to be a general purpose module and as such we provide a reduced interface and
then use the upstream module for our implementation.

[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
[fork]: https://github.com/terraform-aws-modules/terraform-aws-acm
[lice]: ./LICENSE.md

## Requirements

The following requirements are needed by this module:

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) (>=1.3.4)

- <a name="requirement_aws"></a> [aws](#requirement\_aws) (>=4.37.0)

- <a name="requirement_external"></a> [external](#requirement\_external) (>=2.2.2)

- <a name="requirement_random"></a> [random](#requirement\_random) (>=3.4.3)

- <a name="requirement_time"></a> [time](#requirement\_time) (>=0.9.0)

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws) (4.37.0)

## Modules

The following Modules are called:

### <a name="module_name"></a> [name](#module\_name)

Source: github.com/s3d-club/terraform-external-name

Version: v0.1.16

### <a name="module_upstream"></a> [upstream](#module\_upstream)

Source: ./upstream

Version:

## Resources

The following resources are used by this module:

- [aws_route53_zone.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route53_zone) (data source)

## Required Inputs

The following input variables are required:

### <a name="input_domain"></a> [domain](#input\_domain)

Description: The domain name for the certificate.

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_subject_alternative_names"></a> [subject\_alternative\_names](#input\_subject\_alternative\_names)

Description: The subject alternative name name for thse certificate.

Type: `list(string)`

Default: `[]`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: The tags for resources.

Type: `map(string)`

Default: `{}`

## Outputs

The following outputs are exported:

### <a name="output_arn"></a> [arn](#output\_arn)

Description: The `arn` for the ACM certificate.
