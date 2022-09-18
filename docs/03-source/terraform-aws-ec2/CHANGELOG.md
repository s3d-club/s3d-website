# Changelog

## [6.0.3-1] - 2022-09-17
- Reformated `CHANGELOG.md`
- Updated `s3d-pull` script

## [6.0.2] - 2022-09-17
- Added `s3d-pull` script

## [6.0.1] - 2022-09-15
- Use `git::` source

## [6.0.0] - 2022-09-15
- Rename as s3d-club
- Now using a bright green `$ ` prompt for the EC2

## [5.0.0] - 2022-09-14
- AMI Suffix variable
- Now using t4g.medium
- Variable for `subnet_id`
- Set `associate_public_ip_address`
- Variable for tags
- Logging message for USER DATA COMPLETE
- Improved init
- Terraform latest is setup when we init
- Vim configured for autoread
- Scrollback now set at 1000 lines
- Only open screen 1 opens by default
- Set default size as `m5a.large`
- `hashicorp/external` provider
- `changelog_version` module

## [4.0.0] - 2022-09-11
- Set `.vimrc` tabstop=2
- Bug where we failed to create the `.s3d` directory.
- Added quick/n/dirty init scripting that runs on first login and installs the
  vim GoInstallBinaries.
- Fixed `vim-go..command substitution: line 136` error
- Fixed error with invalid `~/.vim/pack/plugins/start`
- Fixed `.vim/pack/plugins/start` did not exist  error.
- Configuration for `vim-go`
- Fixed bug with awscli install 
- Problem with spelling of author's name
- Problem with wget for .screenrc
- Added clone of `s3d-workspace`
- Another release
- Blank DNS issue (edge case)
- JQ bug with release parsing
- Invalid attribute
- Blank route53 record
- Added Firefox
- Added `S3D_NAME` env var
- Automatic parsing of changelog versions
- Now using `$ ` as prompt

## [3.0.0] - 2022-09-10
- Added TigerVNC

## [2.0.0] - 2022-09-10
- This changelog

## [1.0.0] - 2022-09-10
- Misc.

## [0.0.0] - 2022-09-05
- Created
