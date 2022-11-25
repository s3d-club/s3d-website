---
sidebar_position: 1
---

# AWS Open Egress

## Overview
This module is an opinionated wrapper around an [aws security group][awss]
resource.

We enforce the following:
- Our conventions for name, description, and tagging
- Reduced arguments and attributes


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

## Resources

The following resources are used by this module:

- [aws_security_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) (resource)

## Required Inputs

The following input variables are required:

### <a name="input_cidr6s"></a> [cidr6s](#input\_cidr6s)

Description: A list of IP6 cidrs.

Type: `list(string)`

### <a name="input_cidrs"></a> [cidrs](#input\_cidrs)

Description: A list of cidrs.

Type: `list(string)`

### <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix)

Description: A prefix value for the security group name.

Type: `string`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: The `tags` for resources.

Type: `map(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: A VPC ID.

Type: `string`

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_security_group_id"></a> [security\_group\_id](#output\_security\_group\_id)

Description: The Security Group ID.
