---
title: "How I Landed on Neovim: Moving Backwards to Move Faster"
description: "From relying on heavyweight IDEs to embracing low level terminal tools — why moving to Neovim?"
datetime: 2026-02-09
image: "https://cdn.isujith.dev/lazyvim.png"
tags:
  [
    "Neovim",
    "Vim",
    "Developer Tools",
    "Terminal",
    "Productivity",
    "DevOps",
    "Engineering",
  ]
---

## The mindset I had in college

Back in college, I genuinely believed terminal based editors were pointless.

Why would anyone use _Notepad level_ tools when we had **sophisticated IDEs**? Autocomplete, debuggers, GUI buttons, extensions? Everything was just _there_. To me, writing code in a terminal editor felt like unnecessary suffering.

When seniors or professors suggested using Vim, my reaction was simple: _Why make life harder?_

So I did what made sense at the time:

- **VS Code** for web development
- **IntelliJ** for everything else

It felt modern. Productive. Correct.

## The comfort trap of IDEs

For a long time, IDEs worked great. They abstracted away complexity and let me focus on shipping code. But slowly, I started noticing something uncomfortable.

I was productive. But, only **inside** the IDE.

Outside of it, I felt lost.

- Editing config files over SSH felt painful
- Debugging VMs meant copy pasting into editors
- Exiting from `vi` and `nano` was harder than ever
- Simple tasks required heavyweight tools

I had unknowingly tied my productivity to a GUI.

## The turning point

As I moved deeper into **DevOps, backend systems, and infrastructure**, my workflow changed:

- More time on remote machines
- More logs, configs, and one off scripts
- More tmux sessions than browser tabs

Suddenly, launching a full IDE felt slow and excessive.

That’s when it hit me:

> I should have moved in the opposite direction, **Towards low level terminal tools**, not away from them.

## Discovering Neovim

Neovim wasn’t my first choice, it was my _last_.

I opened it expecting pain. What I found instead was:

> At that time I had a decent typing speed of 90+WPM

- Instant startup
- Keyboard driven speed
- Complete control over how editing works

At first, it was frustrating. Muscle memory fought back. Simple edits took longer than they should have.

But something interesting happened.

## Learning the editor, not the tool

Neovim forced me to **learn text editing properly**:

- Motions instead of mouse movements
- Editing ideas, not characters
- Composability over shortcuts

I wasn’t memorizing commands, I was learning a language for manipulating text.

And unlike IDE features, this skill transferred _everywhere_:

- SSH sessions
- Minimal containers
- Recovery shells
- Any machine, any OS

## Rebuilding the IDE — consciously

The irony is that Neovim didn’t make me give up IDE features.

It made me **rebuild them intentionally**:

- LSP for language intelligence
- Treesitter for structure
- Git from the terminal (I was already with terminal atleast for Git)
- Debugging when I actually need it

Nothing runs unless I choose it. Nothing is hidden.

## What I got wrong earlier

In college, I thought terminal editors were primitive.

In reality, they are **foundational**.

IDEs sit on top of these ideas. Neovim exposes them.

I didn’t move to Neovim to be a purist or to look cool.
I moved because:

- It made me faster where it mattered
- It reduced dependency on tools
- It aligned with how systems actually run

## Final thoughts

Neovim isn’t for everyone.

But for me, it marked a shift:

> From relying on tools to **understanding the system beneath them**.

If I could go back, I wouldn’t tell my college self to abandon IDEs.

I’d tell him to **learn the low level tools first** and then decide.

Sometimes, moving backwards is the fastest way forward.
