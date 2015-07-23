#!/bin/bash
# 
# Put into ~/.config/plasma-workspace/env

if [ ! -L ~/.kde4/share/config/kdeglobals ] && [ -d ~/.kde4/share/config/kdeglobals ]
then
	rm -r ~/.kde4/share/config/kdeglobals
fi

ln -sf ~/.config/kdeglobals ~/.kde4/share/config/kdeglobals
