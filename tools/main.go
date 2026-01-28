package main

import (
	"bufio"
	"fmt"
	"net/url"
	"os"
	"os/exec"
	"runtime"
	"strings"
	"time"
)

// 配置颜色代码
const (
	ColorRed   = "\033[31m"
	ColorGreen = "\033[32m"
	ColorWhite = "\033[97m"
	ColorReset = "\033[0m"
)

// 核心接口
const ApiUrl = "https://im1907.top/?jx="

func main() {
	printBanner()

	reader := bufio.NewReader(os.Stdin)
	fmt.Print(ColorWhite + "请输入视频地址 (URL) > " + ColorReset)
	
	inputUrl, _ := reader.ReadString('\n')
	inputUrl = strings.TrimSpace(inputUrl)

	if inputUrl == "" {
		fmt.Println(ColorRed + "错误: 地址不能为空！" + ColorReset)
		return
	}

	target := ApiUrl + inputUrl

	fmt.Println("\n" + ColorGreen + "[*] 正在解析..." + ColorReset)
	time.Sleep(500 * time.Millisecond)
	fmt.Println(ColorWhite + "[*] 目标地址: " + inputUrl + ColorReset)
	fmt.Println(ColorRed + "[+] 正在调用默认浏览器播放..." + ColorReset)

	openBrowser(target)
}

func printBanner() {
	banner := `
	██╗   ██╗██╗███████╗██╗ ██████╗ ███╗   ██╗
	██║   ██║██║██╔════╝██║██╔═══██╗████╗  ██║
	██║   ██║██║███████╗██║██║   ██║██╔██╗ ██║
	╚██╗ ██╔╝██║╚════██║██║██║   ██║██║╚██╗██║
	 ╚████╔╝ ██║███████║██║╚██████╔╝██║ ╚████║
	  ╚═══╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
	       VISION CLI (Go Edition) - 2026
	`
	fmt.Println(ColorRed + banner + ColorReset)
}

// 跨平台打开浏览器
func openBrowser(url string) error {
	var cmd string
	var args []string

	switch runtime.GOOS {
	case "windows":
		cmd = "cmd"
		args = []string{"/c", "start"}
	case "darwin":
		cmd = "open"
	default: // "linux", "freebsd", "openbsd", "netbsd"
		cmd = "xdg-open"
	}
	args = append(args, url)
	return exec.Command(cmd, args...).Start()
}
