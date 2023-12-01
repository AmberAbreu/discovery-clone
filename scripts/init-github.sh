#!/bin/bash

#
# Creating discovery_hub git repo
#
git init
git add .
git commit -m "Initial commit"
# git remote add origin git@github.com:thinknimble/discovery_hub.git
gh repo create thinknimble/discovery_hub --private -y
git push origin main
printf "\033[0;32mRepo https://github.com/thinknimble/discovery_hub/\033[0m \n"
