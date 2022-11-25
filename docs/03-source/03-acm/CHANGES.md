# Changes
This file describes the project history as it relates to tagged versions.

## [0.0.0](.) to [0.1.12](.)
- Created our early versions
- Forked upstream code

## [0.1.13](.) to [0.1.25](.)
- Changed to use `-x` as suffix for pre-release versions
- Fixed `aws_route53_zone` data lookup
- Improved descriptions of variables and outputs
- Removed `zone_id` variable _(now using data resource with `domain`)_
- Removed dependency on `s3d-flow-json`
- Updated docs
- Updated modules and providers

## [0.1.26](.) to [4.2000.7](.)
- Changed to use `terraform-aws-acm?ref=v4.2.0`
- Updated `README.md`

## [4.2000.8](.)
- Updated `aws` provider
