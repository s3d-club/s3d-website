---
sidebar_position: 1
---

# S3D AWS Account

## Overview
This is the Terraform code for the S3D AWS Account. The code exists here open
to public inspection so it can act as an example project.

The code here **SHOUD NEVER** contain anything that helps potential bad actors
obtain access to the site. If you are a reading our code in hopes of finding
out how to attack our site prepare to be disapointed. If you see something here
that we should be concerned about please alert us.

In addition, the site has nothing on it that is not already open source and we
monitor the compute resources so if you do manage to get into our AWS account
you will not have access to anything of value and the account will be shutdown.

What we hope the code here will provide is an example. We will use our example
project for reference when discussing techniques, issues, and problems in the
Terraform and AWS communities.

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

### <a name="module_go_site"></a> [go\_site](#module\_go\_site)

Source: github.com/s3d-club/terraform-aws-site

Version: v0.1.19

### <a name="module_mark_site"></a> [mark\_site](#module\_mark\_site)

Source: github.com/s3d-club/terraform-aws-site

Version: v0.1.19

### <a name="module_name"></a> [name](#module\_name)

Source: github.com/s3d-club/terraform-external-name

Version: v0.1.17

### <a name="module_site"></a> [site](#module\_site)

Source: github.com/s3d-club/terraform-aws-site

Version: v0.1.19

### <a name="module_site_group"></a> [site\_group](#module\_site\_group)

Source: github.com/s3d-club/terraform-aws-site-group

Version: v0.1.43

## Resources

The following resources are used by this module:

- [aws_vpc.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/vpc) (data source)

## Required Inputs

No required inputs.

## Optional Inputs

No optional inputs.

## Outputs

The following outputs are exported:

### <a name="output_go_site"></a> [go\_site](#output\_go\_site)

Description: n/a

### <a name="output_mark_site"></a> [mark\_site](#output\_mark\_site)

Description: n/a

### <a name="output_site"></a> [site](#output\_site)

Description: n/a

### <a name="output_site_group"></a> [site\_group](#output\_site\_group)

Description: n/a
