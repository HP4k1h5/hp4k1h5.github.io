#!/bin/bash

# build vue app and push to github pages

echo "building..."
yarn build

echo "copying..."
T=$(date +'%Y%M%d%H%M')
tmp_dir="/tmp/ghp_dist_"$T

echo "copying dist/ to "$tmp_dir" ..."
if [[ ! -d "./dist" ]];then
  echo "!! err: no dist directory present; exiting..."
  return
fi
cp -r ./dist $tmp_dir 

echo "switching branches..."
cd ..
git checkout master

echo "copying dist contents to live branch ..."
echo `cp -r $tmp_dir/* ./`
return
echo "and committing && pushing to master..."
git add -A && git commit -am "publishing "$T && git push

echo "returning to main"
git checkout main
