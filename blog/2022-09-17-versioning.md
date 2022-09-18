---
title: Software Versioning
authors:
  name: Mark Fansworth
  title: A Software Developer
  url: https://www.linkedin.com/in/markfarnsworth/
  image_url: https://media-exp1.licdn.com/dms/image/C4D03AQHyNRa5uRX66w/profile-displayphoto-shrink_800_800/0/1610824372979?e=1668643200&v=beta&t=SAlTxYvkFXlzAtS6_vpEo044gkUMJgCNarUoolBqvEc
tags: [GIT, Semantic-Versioning]
---

This is my second blog post for the [S3D](./) club. The website and several
related open source tools are under development.  The tutorial is starting to
take shape. I have built a number of Terraform modules to support the tutorial
and the site. The idea is to make it easier for teams to establish quality
sites of their own and as such I want to share tools that I feel work well.

The tools are not yet perfect but they are usable and with use we will develop
ideas that help us design and improve in new versions.

Software development is tracked as versions. Currently,
[GIT](https://git-scm.com/) is the most popular version tracking software is
tool.

GIT is a **PHENOMENAL** tool but like a hammer or circular saw it is **just** a
tool and prone to misuse in unskilled hands. The GIT tool is super flexible and
while this is awesome it can be overwelming if you have no idea what you are
doing. For me using GIT feels natural because for the past thirty years I have
used various earlier tools that while not nearly as nice had similar ideas. In
my professional work as an site reliability engineer and software development I
have worked on teams that have various approaches to their GIT workflows. Teams
eventually
[Git-R-Done](https://www.urbandictionary.com/define.php?term=Git-R-Done) but are
often struggling with the pain of self inflicted wounds associated with bad
workflows. Often, changing the workflows is a huge pain because they are tied o
[CI/CD](https://en.wikipedia.org/wiki/CI/CD) tooling. Teams are also usually
working very hard on the software they are building and often don't focus on
their processes issues. The result is often a mix of a ton of tools with the
result that we get haphazard version tracking and no clear system of record.

The good news is that our industry is improving. [Tom
Preston-Werner](https://tom.preston-werner.com/2022/05/23/major-version-numbers-are-not-sacred.html)
and others have helped us see that version numbers should mean something.

Version numbers are `<MAJOR>.<MINOR>.<PATCH>`. The various [S3D
Club](https://github.com/orgs/s3d-club/repositories) are under rapid
development and each early version is different from the previous one. Since we
are using our modules and tools to build this site we are making changes and
bumping their version numbers. Our first version of anything `1.0.0` but since
we **REALLY** follow [semantic
versioning](https://semver.org/#semantic-versioning-200) that `<MAJOR>` number
changes as soon as we are in compatible with a so-called **breaking** change.
As an open source first development ecosystem the [S3D
Club](https://github.com/orgs/s3d-club/repositories) don't have long internal
release cycles and as such we are fine with incrementing the `<MAJOR>` several
times per day if we happen to break compatibility. We use `<MINOR>` when we are
sure we are fully compatible with an existing `<MAJOR>`. We reserve `<PATCH>`
for when we know that what we are doing is a true bug fix. Work that is not
merged into a `main` branch is tracked with a pre-release version number.

The focus we have on properly versioning is integrated into our [opinionated
GIT Workflow](/docs/views/git). Good versioning is fundemntal to
building great software. Our early versions will be rough but functionality and
capacity will improve over time. Versioning will be part of this process and
the numbers will fall where they happen to land.

We use `semantic versioning` in all our repositories in our view everything is
an API. We think of API both as `Application Programming Interface` and as
`Application Person Interface`. The website is already at version `6.0.0` as I
draft this blog post. This blog post will be part of the `7.0.0` release of the
website because we don't plan to release just this blog post alone. The `7.0.0`
release of the site will include a number of changes to existing pages and as
such if a hypotetical person using the site depended on content that was there
we would not be compatible with their
[use-case](https://en.wikipedia.org/wiki/Use_case). For the website a `<MINOR>`
release change can occur when new content is added **without** change or
removal of existing content. The website will use `<PATCH>` for true bug fixes
but in the near term with big changes every day the `<MAJOR>` version will be
incremented at least once a week and sometimes multiple times per day when I
work on it on weekends.

We do not yet have a non public development site and while [running a local
developemnt](https://docusaurus.io/docs/installation#running-the-development-server)
works well sometimes we release just because we want to see how the site looks
and works on the [s3d.club](https://s3d.club) domain.

You can engage using [GitHub](https://github.com/s3d-club/s3d-website)
[issues](https://github.com/s3d-club/s3d-website/issues) and/or [contacting me
via Facebook](https://www.facebook.com/mark.farnsworth.v2/).