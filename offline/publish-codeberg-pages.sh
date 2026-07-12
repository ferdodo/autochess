#!/bin/bash

cd /tmp
git clone -b pages https://codeberg.org/ferdodo/autochess.git
cd autochess
git rm -r *
cp -r /offline-dist/* .
git add .

read -p "Enter email: " email
git config --global user.email "$email"

read -p "Enter full name: " fullname
git config --global user.name "$fullname"

git commit -m "Deploying offline to pages"
git push origin pages

echo "Successfully deployed offline to codeberg pages!"
