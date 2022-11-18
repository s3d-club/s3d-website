# Changes
This file describes the project history as it relates to tagged versions.

Plan:
- **TODO** remove upstream code and re-implement with a focus on simplicity

## [0.0.0](.) to [0.1.12](.)
- Created our early versions
- Forked upstream code

## [0.1.13](.) to [0.1.15](.)
- Removed dependency on `s3d-flow-json`
- Updated `.terraform.lock.hcl` and `terraform.tf`
- Updated `aws` version
- Updated `name` module

## [0.1.16](.)
- Improved descriptions of variables and outputs
- Removed `zone_id` variable _(now using data resource with `domain`)_

## [0.1.17](.) to [0.1.23](.)
- Changed to use `-x` as suffix for pre-release versions
- Fixed `aws_route53_zone` data lookup
- Updated modules and providers

## [0.1.24](.)
- Updated `aws` provider
