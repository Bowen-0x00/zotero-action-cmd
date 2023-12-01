# Zotero Action Cmd Plugin

Zotero Action Cmd is a plugin for Zotero that allows executing commands when performing actions in Zotero. These commands can be system commands, Python scripts, JavaScript scripts, Java programs, C# programs, HTTP requests, and more. The purpose of this plugin is to handle parts of the workflow in an external program that are difficult to handle within the Zotero environment.

## Features
![example](https://github.com/Bowen-0x00/zotero-action-cmd/blob/main/images/zotero-eagle1.gif)
Right-click on an item in Zotero to bring up a button menu.
Click on the button menu to execute one of the following types of commands:
Execute a local JavaScript file.
Execute a system command to run any program.
Send an HTTP request.

## Installation

Download the latest version of the Zotero Action Cmd plugin.
In Zotero, go to "Tools" > "Add-ons".
In the Add-ons Manager window, click on the gear icon and select "Install Add-on From File".
Choose the downloaded plugin file to install.
Restart Zotero.

## Usage

In Zotero, right-click on an item.
In the button menu that appears, select the type of command you want to execute.
Enter the necessary parameters or select a file based on the command type's requirements.
Execute the command.

### Settings
See settings in Settings/Advanced/Config Editor

![step1](https://github.com/Bowen-0x00/zotero-action-cmd/blob/main/images/settings_step1.png)
![step2](https://github.com/Bowen-0x00/zotero-action-cmd/blob/main/images/settings_step2.png)

mode: 1/2/3 represents: local JS/command/HTTP request, respectively using corresponding parameters.

Right-click on the item and then click the button to perform the corresponding operation.



## Notes

Exercise caution when executing system commands and ensure that the commands are safe and reliable.
When making HTTP requests, ensure that your network connection is reliable, and provide the correct request parameters.
