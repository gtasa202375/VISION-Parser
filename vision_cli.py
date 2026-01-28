#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
VISION PARSER CLI Tool
----------------------
A terminal-based interface for the VISION video parser.
Opens the parsed video directly in your default web browser.

Author: 3657990021@qq.com
Date: 2026
"""

import webbrowser
import sys
import argparse
import time

# Configuration
# 核心解析接口
API_URL = "https://im1907.top/?jx="

# ANSI Colors
RED = '\033[91m'
WHITE = '\033[97m'
RESET = '\033[0m'
BOLD = '\033[1m'

def print_banner():
    print(f"""{RED}
██╗   ██╗██╗███████╗██╗ ██████╗ ███╗   ██╗
██║   ██║██║██╔════╝██║██╔═══██╗████╗  ██║
██║   ██║██║███████╗██║██║   ██║██╔██╗ ██║
╚██╗ ██╔╝██║╚════██║██║██║   ██║██║╚██╗██║
 ╚████╔╝ ██║███████║██║╚██████╔╝██║ ╚████║
  ╚═══╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝{RESET}
{WHITE}VIP VIDEO PARSER CLI - 2026 EDITION{RESET}
    """)

def parse_video(url):
    if not url:
        print(f"{RED}[!] Error: URL cannot be empty.{RESET}")
        return

    full_url = API_URL + url
    print(f"\n{WHITE}[*] Processing URL...{RESET}")
    time.sleep(0.5)
    print(f"{WHITE}[*] Parsing target: {url}{RESET}")
    print(f"{RED}[+] Opening default browser...{RESET}")
    
    # Open in browser
    webbrowser.open(full_url)
    print(f"\n{WHITE}[Done] Enjoy your video!{RESET}")

def main():
    print_banner()

    parser = argparse.ArgumentParser(description="VISION CLI - Open parsed videos instantly.")
    parser.add_argument("-u", "--url", type=str, help="The video URL to parse")
    
    args = parser.parse_args()

    if args.url:
        target_url = args.url
    else:
        try:
            target_url = input(f"{BOLD}Paste Video URL > {RESET}").strip()
        except KeyboardInterrupt:
            print(f"\n\n{RED}[!] Operation cancelled.{RESET}")
            sys.exit(0)

    parse_video(target_url)

if __name__ == "__main__":
    main()
