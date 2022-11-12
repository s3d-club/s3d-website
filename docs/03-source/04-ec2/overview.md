---
sidebar_position: 1
---

# AWS EC2 Module

## Overview
This module defines an EC2 instance.

Currently, we support the `work` template. The `work` template provides a basic
system that is useful for development and/or adminstrative tasks. We we will
define other templates when needed.

## Templates
| Name   | Description                                  |
| ------ | -------------------------------------------- |
| `work` | A developer focued build with Amazon Linux 2 |

[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
[lice]: ./LICENSE.md

## Requirements

The following requirements are needed by this module:

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) (>=1.3.4)

- <a name="requirement_aws"></a> [aws](#requirement\_aws) (>=4.39.0)

- <a name="requirement_external"></a> [external](#requirement\_external) (>=2.2.3)

- <a name="requirement_random"></a> [random](#requirement\_random) (>=3.4.3)

- <a name="requirement_time"></a> [time](#requirement\_time) (>=0.9.1)

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws) (4.39.0)

## Modules

The following Modules are called:

### <a name="module_name"></a> [name](#module\_name)

Source: github.com/s3d-club/terraform-external-name

Version: v0.1.17

### <a name="module_sg_egress"></a> [sg\_egress](#module\_sg\_egress)

Source: github.com/s3d-club/terraform-aws-sg_egress_open

Version: v0.1.18

### <a name="module_sg_ingress"></a> [sg\_ingress](#module\_sg\_ingress)

Source: github.com/s3d-club/terraform-aws-sg_ingress_ssh

Version: v0.1.17

## Resources

The following resources are used by this module:

- [aws_instance.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance) (resource)
- [aws_route53_record.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) (resource)
- [aws_ami.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) (data source)
- [aws_route53_zone.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route53_zone) (data source)

## Required Inputs

The following input variables are required:

### <a name="input_domain"></a> [domain](#input\_domain)

Description: The domain for route53 registration.

Type: `string`

### <a name="input_egress_cidrs"></a> [egress\_cidrs](#input\_egress\_cidrs)

Description: A list of addresses for open egress.

Type: `list(string)`

### <a name="input_key_name"></a> [key\_name](#input\_key\_name)

Description: An EC2 keyname.

Type: `string`

### <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix)

Description: An prefix for naming resources.

Type: `string`

### <a name="input_ssh_cidrs"></a> [ssh\_cidrs](#input\_ssh\_cidrs)

Description: A list of addresses for ssh ingress.

Type: `list(string)`

### <a name="input_subnet_id"></a> [subnet\_id](#input\_subnet\_id)

Description: A subnet\_id.

Type: `string`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: Aa map of tags for resources.

Type: `map(string)`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: A vpc id.

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_ami_id"></a> [ami\_id](#input\_ami\_id)

Description: An AMI ID.

Type: `string`

Default: `null`

### <a name="input_ami_suffix"></a> [ami\_suffix](#input\_ami\_suffix)

Description: An AMI suffix that is used to find an ami when ami\_id is null.

Type: `string`

Default: `"arm64-gp2"`

### <a name="input_egress_cidr6s"></a> [egress\_cidr6s](#input\_egress\_cidr6s)

Description: A list of addresses for open egress.

Type: `list(string)`

Default: `[]`

### <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type)

Description: An AWS EC2 instance type.

Type: `string`

Default: `"t4g.medium"`

### <a name="input_setup_ref"></a> [setup\_ref](#input\_setup\_ref)

Description: A version used when fetching the setup script.

Type: `string`

Default: `"v0.1.17"`

### <a name="input_ssh_cidr6s"></a> [ssh\_cidr6s](#input\_ssh\_cidr6s)

Description: A list of addresses for ssh ingress.

Type: `list(string)`

Default: `[]`

### <a name="input_template"></a> [template](#input\_template)

Description: A template to use for setting up the image.

Type: `string`

Default: `"work"`

### <a name="input_username"></a> [username](#input\_username)

Description: A username.

Type: `string`

Default: `"s3d"`

### <a name="input_volume_size"></a> [volume\_size](#input\_volume\_size)

Description: An size in GiB for the volume.

Type: `number`

Default: `50`

## Outputs

The following outputs are exported:

### <a name="output_dns_name"></a> [dns\_name](#output\_dns\_name)

Description: This is a friendly `CNAME` that refer to the `ec2_dns` value.

### <a name="output_ec2_dns"></a> [ec2\_dns](#output\_ec2\_dns)

Description: The actual public DNS for the instance.

### <a name="output_security_groups"></a> [security\_groups](#output\_security\_groups)

Description: The security groups.

### <a name="output_username"></a> [username](#output\_username)

Description: The user name where tools are configured.  The ec2-user is also for  
low-level access but should not be used for general work.
