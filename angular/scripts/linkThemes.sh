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


echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./demo/node_modules/@pxblue/themes"
mkdir "./demo/node_modules/@pxblue/themes"
mkdir "./demo/node_modules/@pxblue/themes/angular"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying angular themes into node_modules...${NC}";
cp -r ./demo/package.json ./demo/node_modules/@pxblue/themes/angular/package.json
cp -r ./_blueTheme.scss ./demo/node_modules/@pxblue/themes/angular/_blueTheme.scss
cp -r ./_darkTheme.scss ./demo/node_modules/@pxblue/themes/angular/_darkTheme.scss
cp -r ./_fonts.scss ./demo/node_modules/@pxblue/themes/angular/_fonts.scss
cp -r ./_margins.scss ./demo/node_modules/@pxblue/themes/angular/_margins.scss
cp -r ./theme.scss ./demo/node_modules/@pxblue/themes/angular/theme.scss

echo -e "${GREEN}Done${NC}"

echo -e "${GRAY}Complete${NC}\r\n"
