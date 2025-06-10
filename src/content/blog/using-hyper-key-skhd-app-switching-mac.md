---
title: How to quickly switch between applications using SKHD on Mac OS
description: Switch between spaces and apps using SKHD hot keys and hyper key mapping
tags:
    - SKHD
    - Productivity
isDraft: false
publishedDate: 2025-06-04
---
Here's a quick tip for how you can quickly switch to an application (or open it if it's not open) in Mac OS. To do this, we'll use SKHD. 

**Note that these types of key mappings are just the very basics of what you can do with SKHD.** For more inspiration, feel free to do a search like this: https://github.com/search?q=skhdrc&type=code

## Installation
- If you don't have Homebrew, go ahead and [install it](https://brew.sh/).
- Once installed, run `brew install skhd`. If you want SKHD to always run as a service, you can then run `skhd --install-service` to make sure it starts up when your computer does.

## Create a script that will switch to, or open an application
You can create this file wherever you want, but I put it in `~/utils/activate-app.sh`. This is optional, as you can also pass in the `open` command in SKHD. I like the idea of having a script, in case I want to extend it in the future.

```sh
#!/usr/bin/env sh

/usr/bin/env osascript <<SCRIPT
-------------------------------------
tell application "$1"
  activate
  if (count windows) is 0 then
    do shell script "open -a '$1'"
  end if
end tell
-------------------------------------
SCRIPT
```
- Make sure the file is executable: `chmod +x ~/utils/activate-app.sh`

As a side note, I keep all my configuration files in a folder like `~/dotfiles/` (a Git repository) and then use [GNU Stow](https://www.gnu.org/software/stow/) for symlinking them.

## Setup the config file
- Make a new file in `~/.config/skhd/skhdrc`. This is where you'll add in any key mappings for SKHD.
- You can see an example config file in [the SKHD repo](https://github.com/koekeishiya/skhd).
- While working on your config file, you can run `skhd -V` for verbose output and validation.

In my case, I chose the least useful key, Caps Lock, as a hyper key (Shift + Ctrl + Opt + Cmd). You can do this in Karabiner, Raycast, [Hyperkey](https://hyperkey.app/), or in many other ways. 

As you may notice, the key combinations below will get quite awkward if you have to hit all these keys at once. That's why we're mapping the hyper key. Once Caps Lock is mapped, they're all very convenient. Also, you won't have to worry about other shortcuts already being mapped to the same combinations, and you can have nice two-key navigational shortcuts.

For my laptop, I use [Hyperkey](https://hyperkey.app/). For my Voyager keyboard, I map it via the Oryx interface and flash the keyboard.

In my `skhdrc` config file, I can now add entries such as:

```sh
shift + ctrl + alt + cmd - t : $HOME/utils/activate-app.sh iTerm
shift + ctrl + alt + cmd - a : $HOME/utils/activate-app.sh Arc
shift + ctrl + alt + cmd - v : open /Applications/Visual\ Studio\ Code.app
```

Or the shorter syntax:
```sh
hyper - t : $HOME/utils/activate-app.sh iTerm
hyper - a : $HOME/utils/activate-app.sh Arc
hyper - v : open /Applications/Visual\ Studio\ Code.app
```
