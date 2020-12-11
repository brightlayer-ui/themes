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

echo -e "${BLUE}Building themes...${NC}"
yarn build

echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./demos/showcase/node_modules/@pxblue/react-native-themes"
mkdir -p "./demos/showcase/node_modules/@pxblue/react-native-themes"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";
cp -r ./dist ./demos/showcase/node_modules/@pxblue/react-native-themes
cp ./package.json ./demos/showcase/node_modules/@pxblue/react-native-themes/package.json
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BBLUE}Linking Themes: ${NC}"
if [ ! -f ./demos/showcase/node_modules/@pxblue/react-native-themes/package.json ]; then echo -e "${BRED}Themes Not Linked${NC}" && exit 1; fi
if [ ! -s ./demos/showcase/node_modules/@pxblue/react-native-themes/dist ];
    then
        if [ ! -f ./demos/showcase/node_modules/@pxblue/react-native-themes/dist/index.js ];
        then echo -e "${BRED}Themes Not Linked${NC}" && exit 1;
        fi;
fi
echo -e "${GRAY}Complete${NC}\r\n"