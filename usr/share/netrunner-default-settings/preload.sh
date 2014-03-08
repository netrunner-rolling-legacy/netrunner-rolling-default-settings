#!/bin/bash
sleep 2;
rm -f ~/.mozilla/firefox/*/lock
ksystraycmd --hidden firefox &
