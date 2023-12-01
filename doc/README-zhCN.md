# Zotero Action Cmd 插件

Zotero Action Cmd 是一个用于 Zotero 的插件，它允许在执行 Zotero 中的动作时执行命令。这些命令可以是系统命令、Python 脚本、JavaScript 脚本、Java 程序、C# 程序、HTTP 请求等等。该插件的目的是将在 Zotero 环境中难以处理的部分放在外部程序中进行处理。

## 功能特点

在 Zotero 中右键单击项目时，弹出一个按钮菜单。
点击按钮菜单后，可以执行以下三种类型的命令：
执行本地 JavaScript 文件。
执行系统命令，用于执行任意程序。
发送 HTTP 请求。

## 安装

下载最新版本的 Zotero Action Cmd 插件。
在 Zotero 中，选择 "工具" > "插件"。
在插件管理窗口中，点击 "齿轮" 图标，选择 "安装插件从文件"。
选择下载的插件文件进行安装。
重启 Zotero。

## 使用方法

在 Zotero 中，右键单击项目。
在弹出的按钮菜单中，选择要执行的命令类型。
根据命令类型的要求，输入必要的参数或选择文件。
执行命令。

## 设置
目前设置在"设置/高级/编辑器"下

![step1](https://github.com/Bowen-0x00/zotero-action-cmd/blob/main/images/settings_step1.png)
![step2](https://github.com/Bowen-0x00/zotero-action-cmd/blob/main/images/settings_step1.png)

mode:1/2/3代表：本地js/命令/HTTP请求，分别使用对应参数。

右键条目然后点击按钮进行对应操作。

## 注意事项

在执行系统命令时，请谨慎操作，确保命令是安全且可靠的。
在执行 HTTP 请求时，请确保您的网络连接是可靠的，并且您已经提供了正确的请求参数。