---
sidebar_position: 1
---

# AWS ECR Terraform Module

## Overview
This is the ECR configuration we recommend.

### Our ECR has the following features
- Our common naming and tagging module
- `IMMUTABLE` image tags
- `force_delete` set so resources can easily be managed via Terrraform
- `kms_key` keys so `tfsec` does not flag the implementation
- `scan_on_push` enabled

[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
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

## Resources

The following resources are used by this module:

- [aws_ecr_repository.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecr_repository) (resource)

## Required Inputs

The following input variables are required:

### <a name="input_kms_key_arn"></a> [kms\_key\_arn](#input\_kms\_key\_arn)

Description: The ARN for a KMS key.

Type: `string`

### <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix)

Description: A prefix for the ECR name.

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_tags"></a> [tags](#input\_tags)

Description: Tags for resources.

Type: `map(string)`

Default: `{}`

## Outputs

The following outputs are exported:

### <a name="output_aws_ecr_repository"></a> [aws\_ecr\_repository](#output\_aws\_ecr\_repository)

Description: The AWS ECR repository.
