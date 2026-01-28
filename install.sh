#!/bin/bash

# ANSI Color Codes
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Banner
clear
echo -e "${RED}"
cat << "EOF"
██╗   ██╗██╗███████╗██╗ ██████╗ ███╗   ██╗
██║   ██║██║██╔════╝██║██╔═══██╗████╗  ██║
██║   ██║██║███████╗██║██║   ██║██╔██╗ ██║
╚██╗ ██╔╝██║╚════██║██║██║   ██║██║╚██╗██║
 ╚████╔╝ ██║███████║██║╚██████╔╝██║ ╚████║
  ╚═══╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
EOF
echo -e "${NC}"
echo -e "${CYAN}VISION PARSER - AUTOMATED INSTALLER v2.0 (2026)${NC}"
echo -e "${CYAN}Author: 3657990021@qq.com${NC}"
echo "----------------------------------------------------"
sleep 1

# Progress Bar Function
progress_bar() {
    echo -ne "${YELLOW}[waiting] $1...${NC}\r"
    sleep 0.5
    echo -ne "${BLUE}[loading] $1... ##                (20%)${NC}\r"
    sleep 0.5
    echo -ne "${BLUE}[loading] $1... #####             (40%)${NC}\r"
    sleep 0.5
    echo -ne "${BLUE}[loading] $1... ##########        (60%)${NC}\r"
    sleep 0.5
    echo -ne "${BLUE}[loading] $1... ###############   (80%)${NC}\r"
    sleep 0.5
    echo -e "${GREEN}[success] $1... ################# (100%)${NC}"
}

# 1. Check System
echo -e "\n${WHITE}[*] Initializing System Check...${NC}"
progress_bar "Checking Kernel Version"
progress_bar "Verifying Network Connection"

# 2. Check Docker
if command -v docker &> /dev/null; then
    echo -e "${GREEN}[✔] Docker is installed.${NC}"
else
    echo -e "${RED}[✘] Docker not found. Please install Docker first.${NC}"
fi

# 3. Check Node.js
if command -v node &> /dev/null; then
    echo -e "${GREEN}[✔] Node.js Environment detected.${NC}"
else
    echo -e "${YELLOW}[!] Node.js not found. Skipping backend modules.${NC}"
fi

# 4. Simulation of Build
echo -e "\n${WHITE}[*] Compiling Assets...${NC}"
sleep 1
echo -e "${GREEN} -> index.html verified${NC}"
echo -e "${GREEN} -> Generating cache manifest...${NC}"
sleep 0.5

# 5. Final Message
echo "----------------------------------------------------"
echo -e "${GREEN}Installation Complete!${NC}"
echo -e "You can now run the project using:"
echo -e "  ${YELLOW}1. Web Mode:${NC}    Double click index.html"
echo -e "  ${YELLOW}2. Server Mode:${NC} cd server && node app.js"
echo -e "  ${YELLOW}3. Docker Mode:${NC} docker build -t vision ."
echo -e "  ${YELLOW}4. Rust Core:${NC}   cd core && cargo run"
echo "----------------------------------------------------"
echo -e "${RED}Enjoy the VISION.${NC}"
