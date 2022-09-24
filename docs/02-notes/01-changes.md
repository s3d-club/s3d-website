---
sidebar_position: 3
---
# Change
The S3D Club has strong views on the ideal structure for projects.

This document shares the club's views on the complex topic of documenting
change in projects this website and our other projects are always changing.
Change is a core skill in software development.

Our club likes that we have strong opinionated views because they helps guide
our decision making process.

While we have strong views we are also always seeking to improve our
approaches. Open to new ideas.  If you see something here that you think should
be changed, please [join our club][join] and get involved. We will change our
view when we find better ones.

In this document, we describe the `CHANGES.md` file. We have a related document
where we discuss our on our [S3D Workflow][wkfl].  This document here foucs on
the `CHANGES.md` file.

## `CHANGES.md`
We maintain a `CHANGES.md` file project. This file is the very first file added
and each change from that point forward starts with an edit to `CHANGES.md`.
Almost every commit to a project includes edits to the `CHANGES.md` file such
that it is always an up to date representation of the project state in the
context of it's current history.  When the `CHANGES.md` file from a point in
the code revision system's history the content of the file documents the state
of changes for that point.

We have strict formatting rules for `CHANGES.md`. Our CLI tool and scripts
parse and update this file. The safe syntax `CHANGES.md` is a *narrow* subset
of markdown.

### Block 1
The first two lines of `CHANGES.md` are always the following.
```markdown
# Changes
Recently completed and planned work is tracked here.
```

Readers who are not familar with the format will hopefully find the structure
of the document to be self evident. Teams __may__ choose to place a link to
this document in their `CHANGES.md` file but that is not required.

### Blocks `2..(n-1)`
With the exeption of the first section, a `CHANGES.md` file consists of blocks
in the following example format. A single blank line is placed between each
block.

Blocks for released versions use the format shown in the following example.

```markdown
# Changes
Recently completed and planned work is tracked here.

## [0.0.0](.) [1.4.4][early-days]
- A few chaotic early releases
 
## [1.4.5](.) [2.3.1][early-days]
- Added our early set of features
- Modified to improve structure 

## [2.3.2](.) [2.2.1][yinghat]
- Added the `Yinghat` feature

## [4.2.2](.) [4.5.7][yinghat]
- Added unstable patches for the `Yinghat` feature 
- Added the `Foobot` and solved most `Yinghat` problems
- Fixed `Foobot` related deadlocking
 
## [4.5.8](.) [6.4.3][plan-6] 
- Added `Fhoo` as a `Mutator`
- Fixed `Fhoo` race-condition
- Modified [HK39][hk39] adding a `bar.Accessor` ref

## [6.4.5][plan-6]
- Fixed [HK39][hk39] with `bar` as an `Accessor`
- Fixed `foodPrep` it no longer creates a panic
- Modified [JIRA-1532][jira-1532] with `bar` as an `Accessor`
- Modified `Fhoo` handle `XingTat` protocol

## [6.4.6-1034(plan-6)
- **TODO** Add `dboMan` for new `Oak` serivce
- **TODO** Mod `bar` fixed deadlock
- **TODO** Mod `haxfoon` to be a public `Haxfoon`
- Add `fuxing` as a private `Mutator` for CRUD
- Add `xingbot` as a private `Wingbat`
- Fix `Foo` race condition

## [plan](.)
- **TODO** Mod remove `Yinghat` feature

[early-days]: https://go.s3d.club/example/CHANGES.md#early-days
[hk39]: https://go.s3d.club/example/CHANGES.md#hk39
[jira-1532]: https://go.s3d.club/example/CHANGES.md#jira-1532
[plan-6]: https://go.s3d.club/example/CHANGES.md#plan-6
[yinghat]: https://go.s3d.club/example/CHANGES.md#yinghat
```

In release blocks, lines must start as follows:
- `- Added`
- `- Fixed`
- `- Modified`

All lines with the exception of the [short link table][short] are a maximum of
80 charactors. The [short link table] is optional but when included it must be
at the end of the document.

Block headers can have multiple releases but they must define a range. Headers
must be [markdown](https://www.markdownguide.org/) links as show. We encurage
the use of [short link][short] linking.

Pre-release version blocks differ in that items with a `**TODO**` prefix are
allowed. In pre-release blocks the shorter `- Add`, `- Fix`, `- Mod` are also
allowed.

Once the release is final, the section becomes the release description. Over
time, the release blocks can be editited and combined as needed. The goal is to
provide a document for the current release team. If someone need to look an old
version of the document they can use Git history features.

Pre-releases numbers are in the range of 1000 to 9999.

The language used in the bullet points are intentionally brief and intended
only for consumption by the development teams. We encurage the use of markdown
highlighting for words with special meaning.

### Plan Blocks
After release blocks we often have one or more `[plan](.)` blocks with planned
changes.

Block headers are written as links; these **may** refernce other sites or can
simply be self links as `[#.#.#](.)`.

## Relationship with `CHANGELOG.md`
Our `CHANGES.md` file  is different from the traditional `CHANGELOG.md` file in
the following ways.
- Our file is **planned**, **in-process**, and **recent** changes only. We do
  not track all versions
- Our format is more strict to support automated processing and less verbose
  because it is intentionally only a punch list

Project may have both a `CHANGES.md` and `CHANGELOG.md` files. The `CHANGES.md`
file supports individuals working on the product as they commit changes, and
merge branches. The audience for `CHANGES.md` is internal while `CHANGELOG.md`
if it exits is written for people outside the development team.

There is no need for a `CHANGELOG.md` document early in a project but we feel
the `CHANGES.md` file should be the very first commit.

[join]: /blog/2022/09/12/the-s3d-club#join-the-s3d-club
[short]: http://sgmljs.net/docs/markdown-shortlink-examples.html
[wkfl]: /docs/notes/git
