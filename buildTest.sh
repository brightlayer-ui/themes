#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Checking Root Package..."
echo "Checking for required files..."
echo -ne "  package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f ./README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  license: "
if [ ! -f ./LICENSE ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index.js: "
if [ ! -f ./index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index.d.ts: "
if [ ! -f ./index.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Theme (Angular)"
echo "Checking for required files..."
echo -ne "  package.json: "
if [ ! -f angular/package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f angular/Readme.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  root theme: "
if [ ! -f angular/theme.scss ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  blue theme: "
if [ ! -f angular/_blueTheme.scss ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  dark theme: "
if [ ! -f angular/_darkTheme.scss ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  margins mixin: "
if [ ! -f angular/_margins.scss ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  font mixin: "
if [ ! -f angular/_fonts.scss ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi


echo "Checking Theme (React)"
echo "Checking for required files..."
echo -ne "  package.json: "
if [ ! -f react/package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f react/Readme.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  blue theme: "
if [ ! -f react/dist/blueTheme.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  blue dark theme: "
if [ ! -f react/dist/blueDarkTheme.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index: "
if [ ! -f react/dist/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index type declaration: "
if [ ! -f react/dist/index.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo "Checking Theme (React-Native)"
echo "Checking for required files..."
echo -ne "  package.json: "
if [ ! -f react-native/package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f react-native/Readme.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  blue theme: "
if [ ! -f react-native/dist/blueTheme.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  blue theme type declaration: "
if [ ! -f react-native/dist/blueTheme.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index: "
if [ ! -f react-native/dist/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index type declaration: "
if [ ! -f react-native/dist/index.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "Theme packages successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0
