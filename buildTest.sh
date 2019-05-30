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

echo "Checking Theme (Angular)"
echo "Checking for required files..."
echo -ne "  package.json: "
if [ ! -f angular/package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f angular/Readme.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  theme: "
if [ ! -f angular/theme.scss ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

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

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "Theme packages successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0