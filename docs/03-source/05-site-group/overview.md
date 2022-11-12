---
sidebar_position: 1
---

# S3D Site Group Module

## Overview
Within an AWS account, a group of sites will share resources.

Often several sites will share the same EKS, EC2 Key Pair, Security Groups,
etc.

Each site group is the conceptual parent of one or more sites which may be
tracked in the same Terraform state as the parent or tracked in other Terraform
states.

The content of a site group should reflect the structure of team(s) supporting
the sites. The group is a security context and a place where resources that
would otherwise need to be duplicated can be managed.

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

### <a name="module_ec2_work"></a> [ec2\_work](#module\_ec2\_work)

Source: github.com/s3d-club/terraform-aws-ec2

Version: v0.1.31

### <a name="module_ecr"></a> [ecr](#module\_ecr)

Source: github.com/s3d-club/terraform-aws-ecr

Version: v0.1.19

### <a name="module_name"></a> [name](#module\_name)

Source: github.com/s3d-club/terraform-external-name

Version: v0.1.17

### <a name="module_sg_ingress_open"></a> [sg\_ingress\_open](#module\_sg\_ingress\_open)

Source: github.com/s3d-club/terraform-aws-sg_ingress_open

Version: v0.1.16

## Resources

The following resources are used by this module:

- [aws_dynamodb_table.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dynamodb_table) (resource)
- [aws_s3_bucket.log](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket_acl.log](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_acl.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_logging.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_logging) (resource)
- [aws_s3_bucket_public_access_block.log](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_s3_bucket_public_access_block.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_s3_bucket_server_side_encryption_configuration.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_server_side_encryption_configuration) (resource)
- [aws_s3_bucket_versioning.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning) (resource)
- [aws_kms_key.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_key) (data source)
- [aws_subnet.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/subnet) (data source)
- [aws_subnets.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/subnets) (data source)

## Required Inputs

The following input variables are required:

### <a name="input_kms_key_id"></a> [kms\_key\_id](#input\_kms\_key\_id)

Description: The ID of a KMS key.

Type: `string`

### <a name="input_name"></a> [name](#input\_name)

Description: A logical name for the site group and prefix for the associated resource names.

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_az_blacklist"></a> [az\_blacklist](#input\_az\_blacklist)

Description: A list of avalibility zones that should not be used.

Type: `list(string)`

Default: `[]`

### <a name="input_cidr6s"></a> [cidr6s](#input\_cidr6s)

Description: A list of CIDRs.

Type: `list(string)`

Default: `[]`

### <a name="input_cidrs"></a> [cidrs](#input\_cidrs)

Description: A list of CIDRs.

Type: `list(string)`

Default: `null`

### <a name="input_domain"></a> [domain](#input\_domain)

Description: A domain that already has a route 53 hosted zone.

Type: `string`

Default: `null`

### <a name="input_ec2_key_name"></a> [ec2\_key\_name](#input\_ec2\_key\_name)

Description: An ec2 key name.

Type: `string`

Default: `null`

### <a name="input_ecrs"></a> [ecrs](#input\_ecrs)

Description: A list of names for the ECR instances.

Type: `list(string)`

Default: `[]`

### <a name="input_egress_cidr6s"></a> [egress\_cidr6s](#input\_egress\_cidr6s)

Description: A list of addresses for open egress.

Type: `list(string)`

Default: `[]`

### <a name="input_egress_cidrs"></a> [egress\_cidrs](#input\_egress\_cidrs)

Description: A list of addresses for open egress.

Type: `list(string)`

Default: `null`

### <a name="input_enable_ec2"></a> [enable\_ec2](#input\_enable\_ec2)

Description: An option to enable the EC2 instance.

Type: `bool`

Default: `false`

### <a name="input_enable_tf_bucket"></a> [enable\_tf\_bucket](#input\_enable\_tf\_bucket)

Description: An option that enables the creation of an S3 Bucket for storage of Terraform state.

Type: `bool`

Default: `false`

### <a name="input_enable_tf_lock_table"></a> [enable\_tf\_lock\_table](#input\_enable\_tf\_lock\_table)

Description: An option that enables the creation of a DynamoDB table for Terraform locks.

Type: `bool`

Default: `false`

### <a name="input_public_subnets"></a> [public\_subnets](#input\_public\_subnets)

Description: A list of subnets where instances that should be public may be placed. Or  
the value `null` if a random subnet should be used.

Type: `list(string)`

Default: `null`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: A map of tags for resources.

Type: `map(string)`

Default: `{}`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: A VPC ID.

Type: `string`

Default: `null`

## Outputs

The following outputs are exported:

### <a name="output_domain"></a> [domain](#output\_domain)

Description: A domain.

### <a name="output_ec2"></a> [ec2](#output\_ec2)

Description: An EC2 Instance.

### <a name="output_ec2_key_name"></a> [ec2\_key\_name](#output\_ec2\_key\_name)

Description: A EC2 Key Name.

### <a name="output_ecr"></a> [ecr](#output\_ecr)

Description: The ECR module.

### <a name="output_tags"></a> [tags](#output\_tags)

Description: The tags.
