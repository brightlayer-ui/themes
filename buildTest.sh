#!/bin/bash

# exit when any command fails
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Checking Theme (Angular)"
cd angular
yarn test
cd ..

echo "Checking Theme (React)"
cd react
yarn test
cd ..

echo "Checking Theme (React-Native)"
cd react-native
yarn test
cd ..

echo "Checking Theme (Storybook)"
cd storybook
yarn test
cd ..

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "Theme packages successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0
