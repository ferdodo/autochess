#!/bin/bash

cd /tmp
git clone -b pages https://codeberg.org/ferdodo/autochess.git
cd autochess
mv .git /tmp/.git.save
rm -rfv * .*
mv /tmp/.git.save .git
cp -r /offline-dist/* .
git add .
git status

read -p "Enter email: " email
git config --global user.email "$email"

read -p "Enter full name: " fullname
git config --global user.name "$fullname"

git commit -m "Deploying offline to pages"
git push origin pages

echo "Successfully deployed offline to codeberg pages!"
