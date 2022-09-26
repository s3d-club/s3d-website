---
sidebar_position: 1
---
# EKS Module

## Overview
This module defines the EKS configuration we recommend.

Our configuration has the following:
- Logical name plus random segment to avoid AWS resource collisions
- Resource tagging
- IAM policy attachment for an existing role

Our module is a response to modules we used in the past that were overly
complex and bloated with _"features"_ that we see as anit-patterns.

The module is [available on the Terraform Registry][tfrg] and has a club page
[HERE](https://go.s3d.club/eks).

## Inputs
Inputs to exist for the following.

### Required Inputs
#### <a name="name_prefix"></a> Name Prefix `string: name_prefix`[^1] 
The name prefix for AWS resources.

#### Security Group ID `string: security_group_id`[^1] 
An entry for the `security_group_ids` list described [HERE][01]. It is a bad
idea to overcomplicate the configuration with multiple security groups on the
EKS and as such this is single item even though the downstream resource allows
a list.

#### <a name="subnet_ids"></a> Subnet IDs `string: subnet_ids`[^1] 
IDs for the subnets as described [HERE][02].

#### <a name="cluster_version"></a> Cluster Version `string: cluster_version`[^1] 
The EKS version as described [HERE][04] with the change that in our module it
is a required input.

### Optional Inputs
#### <a name="cidrs"></a> IP4 CIDRs `list(string): cidrs` 
The `vpc_config.public_access_cidrs` as described [HERE][03].

#### <a name="tags"></a> Tags for Resources `map(string): tags`
Resources managed by this module are tagged with the version of the module and
as well as any tags suppplied by this input.

### Outputs
#### <a name="cluster"></a> Cluster
The `aws_eks_cluster` attributes as described [HERE][05].

#### <a name="role"></a> Role
The `aws_iam_role` attributes described [HERE][06].

[^1]: Required Input
[01]: https://go.s3d.club/hc/aws-/eks_cluster#security_group_ids
[02]: https://go.s3d.club/hc/aws-/eks_cluster#subnet_ids
[03]: https://go.s3d.club/hc/aws-/eks_cluster#public_access_cidrs
[04]: https://go.s3d.club/hc/aws-/eks_cluster#version
[05]: https://go.s3d.club/hc/aws-/eks_cluster#attributes-reference
[06]: https://go.s3d.club/hc/aws-/iam_role#attributes-reference

[chge]: ./CHANGES.md
[code]: ./CODE-OF-CONDUCT.md
[cont]: ./CONTRIBUTING.md
[lice]: ./LICENSE.md
[tfrg]: https://registry.terraform.io/modules/s3d-club/eks/aws/latest?tab=readme