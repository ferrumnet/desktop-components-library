#!/bin/bash
## declare an array variable

dname=${PWD##*/}

declare -a arr=(
  "../unifyre-app-staking/frontend/node_modules/${dname}/"
)

echo $arr

## now loop through the above array
for path in "${arr[@]}"
do
  echo "copy to $path"
  cp -rf './src' $path
done

