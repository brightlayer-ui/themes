#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -e "${BLUE}Building components...${NC}"
yarn build


echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./demo/node_modules/@pxblue/themes"
mkdir "./demo/node_modules/@pxblue/themes"
mkdir "./demo/node_modules/@pxblue/themes/angular"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";
cp -r ./package.json ./demo/node_modules/@pxblue/themes/angular/package.json
cp -r ./dist ./demo/node_modules/@pxblue/themes/angular/dist
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BRED}Linking Components: ${NC}"
if [ ! -f ./demo/node_modules/@pxblue/themes/angular/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
if [ ! -s ./demo/node_modules/@pxblue/themes/angular/dist ];
    then
        if [ ! -f ./demo/node_modules/@pxblue/themes/angular/dist/index.js ];
        then echo -e "${BRED}Not Linked${NC}" && exit 1;
        fi;
fi
echo -e "${GRAY}Complete${NC}\r\n"
