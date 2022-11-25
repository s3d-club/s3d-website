---
sidebar_position: 1
---

# AWS ACM Module

## Overview
This is a simplified _frontend_ for the [terraform-aws-acm][tacm] module. We use
a subset of the functionality from the very powerful [terraform-aws-acm][tacm]
module.

Our module provides a reduced set of options with only three inputs and one
output.


## Requirements

The following requirements are needed by this module:

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) (>=1.3.5)

- <a name="requirement_aws"></a> [aws](#requirement\_aws) (>=4.41.0)

- <a name="requirement_external"></a> [external](#requirement\_external) (>=2.2.3)

- <a name="requirement_random"></a> [random](#requirement\_random) (>=3.4.3)

- <a name="requirement_time"></a> [time](#requirement\_time) (>=0.9.1)

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws) (4.41.0)

## Modules

The following Modules are called:

### <a name="module_name"></a> [name](#module\_name)

Source: github.com/s3d-club/terraform-external-name

Version: v0.1.20

### <a name="module_upstream"></a> [upstream](#module\_upstream)

Source: git::https://github.com/terraform-aws-modules/terraform-aws-acm.git

Version: v4.2.0

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
