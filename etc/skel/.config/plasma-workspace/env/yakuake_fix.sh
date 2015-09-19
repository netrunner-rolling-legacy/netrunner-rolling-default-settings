#!/bin/bash
# 
# Put into ~/.config/plasma-workspace/env

if [ ! -L ~/.kde4/share/apps/konsole ] && [ -d ~/.kde4/share/apps/konsole ]
then
	rm -r ~/.kde4/share/apps/konsole
fi

ln -sf ~/.local/share/konsole ~/.kde4/share/apps/konsole