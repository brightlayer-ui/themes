#!/usr/bin/env bash

branch=master # default
MASTER_VERSION=`node -p "require('./package.json').version"`
NPM_LATEST_VERSION=`npm show @pxblue/angular-themes version`
NPM_BETA_VERSION=`npm show @pxblue/angular-themes@beta version`
NPM_ALPHA_VERSION=`npm show @pxblue/angular-themes@alpha version`

# Parse the branch from the -b flag
while getopts b: flag
do
    case "${flag}" in
        b) branch=${OPTARG};;
    esac
done

if grep -q "alpha" <<< "$MASTER_VERSION";
then
    if ! [ $MASTER_VERSION == $NPM_ALPHA_VERSION ];
    then
        echo "Publishing new alpha";
        npm publish --tag alpha
    else
        echo "Alpha version is already published."
    fi
elif grep -q "beta" <<< "$MASTER_VERSION";
then
    if ! [ $MASTER_VERSION == $NPM_BETA_VERSION ];
    then
        echo "Publishing new beta";
        npm publish --tag beta
    else
        echo "Beta version is already published."
    fi
else
    # If this is not the master branch, do not do any 'latest' publications
    if ! [ $branch == "master" ];
    then
        echo "This is not the master branch - skipping publishing."
        exit 0;
    fi

    # If this is the master branch (or running locally), allow publishing a latest package
    if ! [ $MASTER_VERSION == $NPM_LATEST_VERSION ];
    then
        echo "Publishing new latest";
        npm publish
    else
        echo "Latest version is already published."
    fi
fi