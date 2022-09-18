---
sidebar_position: 1
---

# Changes 
The S3D Club has strong views about the ideal structure for projects. The club
is always seeking to improve our approaches and is open to your ideas. If you
see something here that you think should be changed please [join our
club](/join-our-club.html) and bring your ideas to us.

This document shares the club's views on the complex top of documenting changes
in projects. Change management is a critical skill in **software**. We put a
lot of effort into our change management process.

In this document, we describe how we use the `CHANGES.md` file. We have a
related document where we discuss our on our [S3D Workflow](https://go.s3d.club/workflow).

## Overview 
All of our projects maintain a `CHANGES.md` file in their project root. This
file is the very first file added and each change from that point forward
starts with an edit to `CHANGES.md`. Almost every commit to a project includes
edits to the `CHANGES.md` file such that it is always an up to date
representation of the project state in the context of it's current history.
When the `CHANGES.md` file from a point in the code revision system's history
the content of the file documents the state of changes for that point.

## Formating
We have strict formatting rules for `CHANGES.md`. Our tools parse and update
this file. The syntax of the our `CHANGES.md` file is a subset of markdown.

### Block 1
The first two line of `CHANGES.md` are always the following.

```markdown
# Changes
- This is a [CHANGES.md](https://www.s3d.club/changes/) file
```

The first lines informs the reader of the document format. Readers who are not
familar with the format may follow the link to arrive at this document.

### Blocks `2..(n-1)`
With the exeption of the first section a  `CHANGES.md` file consists of blocks
in the following example format. A blank line is placed between each block. No
other blank lines are part of this format.

Blocks for released versions have the following format.

```markdown
## [0.0.3](https://github-ish-site/project/tree/0.0.3)
- Changed `Foo` be a `Mutator`
- Changed `bar` to an `Accessor`
- Fixed `foodPrep` it no longer creates a panic
```

```markdown
## [0.0.4-6](https://github-ish-site/project/tree/next)
- **TODO** Added `dboMan` for new `Oak` serivce
- **TODO** Changed `bar` fixed deadlock
- **TODO** Changed `haxfoon` to be a public `Haxfoon`
- Added `fuxing` as a private `Mutator` for CRUD
- Added `xingbot` as a private `Wingbat`
- Changed `Foo` fixed race condition
```

Pre-release versions have the same format with the exceptions that items in the
list may have the `**TODO**` prefix. Only the most current pre release number
is in the block header. All pre-release are linked to the `next` branch of the
code tree. The pre-release number is incremented when merges to the `next`
branch.

The language used in the bullet points is intentionally brief and intended only
for consumption by the development teams. We encurage the use of markdown
highlighting for words with special meaning with the exception that other then
the `**TODO**` Prefix the first charactor of the item must be in he range of
`[A-Z]` _(upper case only)_.

### Next Block
The final block of a `CHANGES.md` file lists the `next` planned changes. The
final block is always a reference to the `next` branch and as such using a [GIT
workflow](/git-workflow) with a `next` branch is a requirement.

```markdown
## [next](https://github-ish-site/project/project/tree/next)
- **TODO** Changed `bar` to use an `guru` pattern
- **TODO** Removed `Foo`
- **TODO** Fixed `Fuxing` crud panic
```

All items in the `next` block must have the `**TODO**` prefix.

Blocks are removed once a team no longer support changes or dicussion related
to an associated version. For most projects we only have blocks for at most our
last two major and minor releases.

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

Early in a product's lifecycle there is no need for a `CHANGELOG.md` document.