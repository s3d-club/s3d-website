---
sidebar_position: 1
---

# EKS Module

## Overview
This module defines our EKS configuration.

Our module has the following attributes.
- Ressource naming and tagging managed by the [name][name] module
- IAM role and policy for `AmazonEKSClusterPolicy` and
  `AmazonEKSVPCResourceController`

This module focused on EKS functionality with a minimum of "extra" resources.

<!-- LINKS -->

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

## Resources

The following resources are used by this module:

- [aws_eks_cluster.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eks_cluster) (resource)
- [aws_iam_role.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) (resource)
- [aws_iam_role_policy_attachment.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) (resource)
- [aws_partition.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/partition) (data source)

## Required Inputs

The following input variables are required:

### <a name="input_cidrs"></a> [cidrs](#input\_cidrs)

Description: A list of addresses for `public_access_cidrs`.

Type: `list(string)`

### <a name="input_kms_key_arn"></a> [kms\_key\_arn](#input\_kms\_key\_arn)

Description: The KMS ARN.

Type: `string`

### <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix)

Description: A name prefix for resources.

Type: `string`

### <a name="input_security_group_id"></a> [security\_group\_id](#input\_security\_group\_id)

Description: The Security Group ID for the cluster.

Type: `string`

### <a name="input_subnet_ids"></a> [subnet\_ids](#input\_subnet\_ids)

Description: A list of subnet IDs for the cluster.

Type: `list(string)`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_cluster_version"></a> [cluster\_version](#input\_cluster\_version)

Description: The EKS cluster version.

Type: `string`

Default: `null`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: Tags for resources.

Type: `map(string)`

Default: `{}`

## Outputs

The following outputs are exported:

### <a name="output_cluster"></a> [cluster](#output\_cluster)

Description: The EKS cluster.

### <a name="output_role"></a> [role](#output\_role)

Description: The IAM Role.
