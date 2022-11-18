---
sidebar_position: 1
---

# WAF Module

## Overview
The Web Application Firewal (WAF) is an important tool for providing services
over the internet in a secure way.

This module manages WAF rules for `ip_blacklist`, `ip_whitelist`, and
`redirects`.

The `ip_blacklist` takes precidence. Any address matching that rule is blocked
regardless of how it would be considered in the context of the `ip_whitelist`.
For simple sites without strict security rules an initial depoyment with the
default value will be not blacklist any address.

The `ip_whitelist` allows non blacklisted addresses to be granted access to the
site. If the first entry of the list is the default of `0.0.0.0/0` then all
addresses are allowed.

The `redirects` map provides a way to send `301` redirects for a map of path
strings.

The name and tags for AWS resources are managed by this module such that the WAF
will have a unique name that includes the prefix input. Input tags are ammended
with information about this module's version and the set of tags are applied to
resources.


## Requirements

The following requirements are needed by this module:

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) (>=1.3.5)

- <a name="requirement_aws"></a> [aws](#requirement\_aws) (>=4.40.0)

- <a name="requirement_external"></a> [external](#requirement\_external) (>=2.2.3)

- <a name="requirement_random"></a> [random](#requirement\_random) (>=3.4.3)

- <a name="requirement_time"></a> [time](#requirement\_time) (>=0.9.1)

## Providers

The following providers are used by this module:

- <a name="provider_aws"></a> [aws](#provider\_aws) (4.40.0)

## Modules

The following Modules are called:

### <a name="module_name"></a> [name](#module\_name)

Source: github.com/s3d-club/terraform-external-name

Version: v0.1.19

## Resources

The following resources are used by this module:

- [aws_cloudwatch_log_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_group) (resource)
- [aws_wafv2_ip_set.blacklist](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/wafv2_ip_set) (resource)
- [aws_wafv2_ip_set.whitelist](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/wafv2_ip_set) (resource)
- [aws_wafv2_web_acl.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/wafv2_web_acl) (resource)
- [aws_wafv2_web_acl_logging_configuration.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/wafv2_web_acl_logging_configuration) (resource)

## Required Inputs

The following input variables are required:

### <a name="input_kms_key_arn"></a> [kms\_key\_arn](#input\_kms\_key\_arn)

Description: A KMS Key ARN.

Type: `string`

### <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix)

Description: A prefix for resource names.

Type: `string`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_ip_blacklist"></a> [ip\_blacklist](#input\_ip\_blacklist)

Description: A list of IP addresses that will be blocked.

Type: `list(string)`

Default: `[]`

### <a name="input_ip_whitelist"></a> [ip\_whitelist](#input\_ip\_whitelist)

Description: A list of IP addresses that will be allowed.

Type: `list(string)`

Default:

```json
[
  "0.0.0.0/0"
]
```

### <a name="input_redirects"></a> [redirects](#input\_redirects)

Description: A map of path with urls for 301 redirects.

Type: `map(string)`

Default: `{}`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: A map of tags for resources.

Type: `map(string)`

Default: `{}`

## Outputs

The following outputs are exported:

### <a name="output_arn"></a> [arn](#output\_arn)

Description: The ARN for the `aws_wafv2_web_acl`.
