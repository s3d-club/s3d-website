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

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) (>=1.3.3)

- <a name="requirement_aws"></a> [aws](#requirement\_aws) (>=4.36.1)

- <a name="requirement_external"></a> [external](#requirement\_external) (>=2.2.2)

- <a name="requirement_random"></a> [random](#requirement\_random) (>=3.4.3)

- <a name="requirement_time"></a> [time](#requirement\_time) (>=0.9.0)

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws) (4.37.0)

## Modules

The following Modules are called:

### <a name="module_ec2_work"></a> [ec2\_work](#module\_ec2\_work)

Source: github.com/s3d-club/terraform-aws-ec2

Version: v0.1.26

### <a name="module_ecr"></a> [ecr](#module\_ecr)

Source: github.com/s3d-club/terraform-aws-ecr

Version: v0.1.15

### <a name="module_name"></a> [name](#module\_name)

Source: github.com/s3d-club/terraform-external-name

Version: v0.1.14

### <a name="module_sg_ingress_open"></a> [sg\_ingress\_open](#module\_sg\_ingress\_open)

Source: github.com/s3d-club/terraform-aws-sg_ingress_open

Version: v0.1.12

## Resources

The following resources are used by this module:

- [aws_dynamodb_table.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dynamodb_table) (resource)
- [aws_s3_bucket.log](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket_acl.log](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_acl.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_public_access_block.log](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_s3_bucket_public_access_block.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_s3_bucket_server_side_encryption_configuration.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_server_side_encryption_configuration) (resource)
- [aws_s3_bucket_versioning.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning) (resource)
- [aws_caller_identity.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) (data source)
- [aws_kms_key.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_key) (data source)
- [aws_subnet.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/subnet) (data source)
- [aws_subnets.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/subnets) (data source)

## Required Inputs

The following input variables are required:

### <a name="input_kms_key_id"></a> [kms\_key\_id](#input\_kms\_key\_id)

Description: the ID of a KMS key.  
https://go.s3d.club/tf/site-group#kms_key_arn

Type: `string`

### <a name="input_name"></a> [name](#input\_name)

Description: a logical name for the site group and prefix for the associated resource names.  
https://go.s3d.club/tf/site-group#name_prefix

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_az_blacklist"></a> [az\_blacklist](#input\_az\_blacklist)

Description: a list of avalibility zones that should not be used.  
https://go.s3d.club/tf/site-group#az_blacklist

Type: `list(string)`

Default: `[]`

### <a name="input_cidr6s"></a> [cidr6s](#input\_cidr6s)

Description: a list of CIDRs.  
https://go.s3d.club/tf/site-group#cidr6s

Type: `list(string)`

Default: `[]`

### <a name="input_cidrs"></a> [cidrs](#input\_cidrs)

Description: a list of CIDRs.  
https://go.s3d.club/tf/site-group#cidrs

Type: `list(string)`

Default: `null`

### <a name="input_domain"></a> [domain](#input\_domain)

Description: a domain that already has a route 53 hosted zone.  
https://go.s3d.club/tf/site-group#domain

Type: `string`

Default: `null`

### <a name="input_ec2_key_name"></a> [ec2\_key\_name](#input\_ec2\_key\_name)

Description: an ec2 key name.  
https://go.s3d.club/tf/site-group#ec2_key_name

Type: `string`

Default: `null`

### <a name="input_ec2_work_count"></a> [ec2\_work\_count](#input\_ec2\_work\_count)

Description: the count of ec2 worker instances.  
https://go.s3d.club/tf/site-group#ec2_work_count

Type: `number`

Default: `1`

### <a name="input_ecrs"></a> [ecrs](#input\_ecrs)

Description: a list of names for the ECR instances.  
https://go.s3d.club/tf/site-group#ecrs

Type: `list(string)`

Default: `[]`

### <a name="input_egress_cidr6s"></a> [egress\_cidr6s](#input\_egress\_cidr6s)

Description: a list of addresses for open egress.  
https://go.s3d.club/tf/site-group#egress_cidr6s

Type: `list(string)`

Default: `[]`

### <a name="input_egress_cidrs"></a> [egress\_cidrs](#input\_egress\_cidrs)

Description: a list of addresses for open egress.  
https://go.s3d.club/tf/site-group#egress_cidrs

Type: `list(string)`

Default: `null`

### <a name="input_enable_ec2"></a> [enable\_ec2](#input\_enable\_ec2)

Description: an option to enable the EC2 instance.  
https://go.s3d.club/tf/site-group#enable_ec2

Type: `bool`

Default: `false`

### <a name="input_enable_tf_bucket"></a> [enable\_tf\_bucket](#input\_enable\_tf\_bucket)

Description: an option that enables the creation of an S3 Bucket for storage of Terraform state.  
https://go.s3d.club/tf/site-group#enable_tf_lock_table

Type: `bool`

Default: `false`

### <a name="input_enable_tf_lock_table"></a> [enable\_tf\_lock\_table](#input\_enable\_tf\_lock\_table)

Description: an option that enables the creation of a DynamoDB table for Terraform locks.  
https://go.s3d.club/tf/site-group#enable_tf_lock_table

Type: `bool`

Default: `false`

### <a name="input_public_subnets"></a> [public\_subnets](#input\_public\_subnets)

Description: a list of subnets where instances that should be public may be placed. Or  
  the value `null` if a random subnet should be used.  
  https://go.s3d.club/tf/site-group#public_subnets

Type: `list(string)`

Default: `null`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: a map of tags for resources.  
https://go.s3d.club/tf/site-group#tags

Type: `map(string)`

Default: `{}`

### <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id)

Description: a VPC ID.  
https://go.s3d.club/tf/site-group#vpc_id

Type: `string`

Default: `null`

## Outputs

The following outputs are exported:

### <a name="output_domain"></a> [domain](#output\_domain)

Description: Domain  
https://go.s3d.com/aws-site-group#domain

### <a name="output_ec2"></a> [ec2](#output\_ec2)

Description: EC2 Instance  
https://go.s3d.com/aws-site-group#ec2

### <a name="output_ec2_key_name"></a> [ec2\_key\_name](#output\_ec2\_key\_name)

Description: EC2 Key Name  
https://go.s3d.com/aws-site-group#ec2_key_name

### <a name="output_ecr"></a> [ecr](#output\_ecr)

Description: ECR  
https://go.s3d.com/aws-site-group#ecr

### <a name="output_name_prefix"></a> [name\_prefix](#output\_name\_prefix)

Description: Name Prefix  
https://go.s3d.com/aws-site-group#name_prefix

### <a name="output_tags"></a> [tags](#output\_tags)

Description: Tags  
https://go.s3d.com/aws-site-group#tags
