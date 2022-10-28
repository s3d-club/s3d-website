---
sidebar_position: 1
---

# Site Module

## Overview
This module defines our concept of a **site**.

We use the term **site** to define a network location where services are
provided using web protocols.

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

- <a name="provider_aws"></a> [aws](#provider\_aws) (>=4.36.1)

- <a name="provider_time"></a> [time](#provider\_time) (>=0.9.0)

## Modules

The following Modules are called:

### <a name="module_acm"></a> [acm](#module\_acm)

Source: github.com/s3d-club/terraform-aws-acm

Version: v0.1.16

### <a name="module_name"></a> [name](#module\_name)

Source: github.com/s3d-club/terraform-external-name

Version: v0.1.14

### <a name="module_waf"></a> [waf](#module\_waf)

Source: github.com/s3d-club/terraform-aws-waf

Version: v0.1.11

## Resources

The following resources are used by this module:

- [aws_cloudfront_distribution.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_distribution) (resource)
- [aws_cloudfront_origin_access_control.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_origin_access_control) (resource)
- [aws_cloudfront_origin_access_identity.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_origin_access_identity) (resource)
- [aws_route53_record.www](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) (resource)
- [aws_s3_bucket.logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket.www](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) (resource)
- [aws_s3_bucket_acl.logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) (resource)
- [aws_s3_bucket_policy.www](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) (resource)
- [aws_s3_bucket_public_access_block.logs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_s3_bucket_public_access_block.www](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) (resource)
- [aws_s3_bucket_website_configuration.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_website_configuration) (resource)
- [aws_s3_object.favicon](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_object) (resource)
- [time_sleep.for_s3_async_creation](https://registry.terraform.io/providers/hashicorp/time/latest/docs/resources/sleep) (resource)
- [aws_route53_zone.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route53_zone) (data source)

## Required Inputs

The following input variables are required:

### <a name="input_domain"></a> [domain](#input\_domain)

Description: The `domain` name  
https://go.s3d.club/tf/site#domain

Type: `string`

### <a name="input_kms_key_arn"></a> [kms\_key\_arn](#input\_kms\_key\_arn)

Description: KMS key arn  
https://go.s3d.club/tf/site#kms_key_arn

Type: `string`

### <a name="input_tags"></a> [tags](#input\_tags)

Description: Tags for resources  
https://go.s3d.club/aws/site#tags

Type: `map(string)`

## Optional Inputs

The following input variables are optional (have default values):

### <a name="input_acm_arn"></a> [acm\_arn](#input\_acm\_arn)

Description: AWS Certificate Manager ARN  
https://go.s3d.club/tf/site#arn

Type: `string`

Default: `null`

### <a name="input_az_blacklist"></a> [az\_blacklist](#input\_az\_blacklist)

Description: The availability zone blacklist  
https://go.s3d.club/tf/site#az_blacklist

Type: `list(string)`

Default: `null`

### <a name="input_cloudfront_price_class"></a> [cloudfront\_price\_class](#input\_cloudfront\_price\_class)

Description: The Cloudfront PriceClass  
https://go.s3d.club/tf/site#cloudfront_price_class

Type: `string`

Default: `"PriceClass_100"`

### <a name="input_enable_ip6"></a> [enable\_ip6](#input\_enable\_ip6)

Description: an option to enable IP6 addressing.  
https://go.s3d.club/tf/site#enable_ip6

Type: `bool`

Default: `false`

### <a name="input_enable_waf"></a> [enable\_waf](#input\_enable\_waf)

Description: Enable the WAF (adds costs estimate TBD!)  
https://go.s3d.club/tf/site#enable_waf

Type: `bool`

Default: `false`

### <a name="input_favicon"></a> [favicon](#input\_favicon)

Description: Favicon path \_(or `null` to disable)\_  
https://go.s3d.club/tf/site#favicon

Type: `string`

Default: `"DEFAULT"`

### <a name="input_ip_blacklist"></a> [ip\_blacklist](#input\_ip\_blacklist)

Description: The IP Blacklist  
https://go.s3d.club/site#ip_blacklist

Type: `list(string)`

Default: `null`

### <a name="input_ip_whitelist"></a> [ip\_whitelist](#input\_ip\_whitelist)

Description: The IP Whitelist  
https://go.s3d.club/site#ip_whitelist

Type: `list(string)`

Default: `null`

### <a name="input_name"></a> [name](#input\_name)

Description: The subdomain for Cloudfront  
https://go.s3d.club/tf/site#name

Type: `string`

Default: `"www"`

### <a name="input_s3_prefix"></a> [s3\_prefix](#input\_s3\_prefix)

Description: S3 Prefix  
https://go.s3d.club/aws/site#s3_prefix

Type: `string`

Default: `null`

### <a name="input_subject_alternative_names"></a> [subject\_alternative\_names](#input\_subject\_alternative\_names)

Description: Subject alternative names  
https://go.s3d.club/aws/site#subject_alternative_names

Type: `list(string)`

Default: `[]`

### <a name="input_waf_arn"></a> [waf\_arn](#input\_waf\_arn)

Description: The WAF ARN  
https://go.s3d.club/aws/site#waf_arn

Type: `string`

Default: `null`

### <a name="input_waf_redirects"></a> [waf\_redirects](#input\_waf\_redirects)

Description: The WAF Redirects  
https://go.s3d.club/aws/site#waf_redirects

Type: `map(string)`

Default: `null`

## Outputs

The following outputs are exported:

### <a name="output_domain"></a> [domain](#output\_domain)

Description: The Site's Domain  
https://go.s3d.com/aws/site#domain

### <a name="output_urls"></a> [urls](#output\_urls)

Description:   URLs for the website  
https://go.s3d.com/aws/site#urls

### <a name="output_waf_arn"></a> [waf\_arn](#output\_waf\_arn)

Description:   The WAF ARN  
https://go.s3d.com/aws/site#waf_arn
