#!/bin/bash
# 
# Put into ~/.config/plasma-workspace/env

if [ ! -L ~/.kde4/share/apps/RecentDocuments ] && [ -d ~/.kde4/share/apps/RecentDocuments ]
then
	rm -r ~/.kde4/share/apps/RecentDocuments
fi

ln -sf ~/.local/share/RecentDocuments ~/.kde4/share/apps/RecentDocuments
