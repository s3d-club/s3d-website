---
sidebar_position: 3
---

# Use CloudShell

To get started we will use [AWS CloudShell](https://aws.amazon.com/cloudshell/)
where `git` and other tools are pre-installed.

Sign into the AWS Web Console and open a
[CloudShell](https://aws.amazon.com/cloudshell/) session. The CloudShell tool
provides us with a [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))
environment we can type in commands to interact with our AWS environment.

<details><summary>Dyslexic Note</summary><div>
In the world of software development words and their capitalization rules
are quite different from my days at school.
<p/>
The technology is called **CloudShell** and if you look
closely at the URL it is `cloudshell` in all lower case. As an industry we are
redefining the english language and often use capitalization as part of the way
we embed information into language and bring structure to our world.
<p/>
Everyone is different for somehow for me the grammer rules of programming
languages make more sense and are as a result easier to follow vs. english
writing. I strangely find myself more comfortable with code vs. other languages
for both reading and writing.
</div></details>

## Learn VIM

If you are considering a career in software development take the time to learn
about the [vim](https://www.vim.org/) editor. We will use this editor going
forward in this tutorial. If you have never used VIM you will be confused by
how the editor works but trust me this is an important skill and worth
learning. This tutorial uses cloud technology such as AWS, Linux, Bash, and VIM
becasue those are the tools that are important for people working in the
software development industry. You should expect to be frustrated along the way
because these tools are confusing.

If you are struggling, reach out to someone in the [S3D LinkedIn
Group](https://www.linkedin.com/groups/14117472/) help. Sometimes a bit of
discussion can help you to understand why we focus so much on **low level**
console oriented tools rather then using tools where we can drag and drop
things.

To start the **vimtutor**, enter the following in the Cloudshell prompt.

```bash title="CloudShell"
vimtutor
```

Take your time with `vimtutor` and run the command multiple times to gain
comfort before you proceed with this tutorial. Learning vim takes a bit of time
but it is an important step to becoming a professional software developer.  In
addition to going through the tutorial use Google and/or similar tools to
research VIM.

**DO NOT PROCEED UNTIL YOU ARE COMFORTABLE WITH THE BASICS OF VIM**.

## Clone our repository using GIT

Enter the following command exactly as it is shown to clone this repository.

```bash
git clone https://github.com/s3d-club/s3d-tutorial-start.git
```

Look at the command you entered. This might be the first time you have entered
a command on a Bash terminal but even if you have worked with Bash in the past,
take the time to reflect on what we have just done. Read the line slowly and
carfully through the line and consider what each part does.

The top level command we are executing is `git`. We are sending `clone` and the
URL of a project as parameters. The git command performs the work of obtaining
the project and creating a directory in your cloudshell.

In this task, you have started to learn Bash shell. The Bash shell is a very
powerful way to interact with a computer. As someone with dyslexia, the author
of this tutorial has strangely found that he enjoys and does well with command
line tools and computer languages. The syntax of computers can at times be very
painful and exacting but computing environments allow us to work through the
syntax and grow our understanding of the rules of languges. There are many
languages in computers and each of them have different rules but there are also
common themes. We won't do a great deal of Bash in this course but the task was
needed to establish our enviornment. A Bash command line environment may seem
primitive but it remains an important skill for working with computers.
Outside this course you are encuraged to use all sorts of tutorials which may
involve point-n-click graphical environments but I strongly encurage you to
commit yourself to learning Bash, Go, AWS, and other technologies from a
console and language based perspective rather then from a menu click and drag
and drop approach. I want you to become someone who creates powerful software
and as such learning the basics is critical.

Take some time to read about Bash and GIT with the following links.

- [Bash](https://www.gnu.org/software/bash/manual/bash.html#Introduction)
- [Git](https://git-scm.com/book/en/v2)

