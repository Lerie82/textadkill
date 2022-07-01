## TextAdKill
2021-2022

![This is an image](https://badgen.net/github/release/lerie82/textadkill)

This is a Chrome Extension that will remove ads from websites that normally have super laggy UI and functionality. This is due to the amount of advertisements above (and below) the fold when you are visiting the website. The name is from my old software I created that would kill just ads on texting based websites (such as "pinger type" sites).

### Chrome Web Store
You can download the extension from the Web Store here: https://chrome.google.com/webstore/detail/textadkill/hjebehoaeafhflpfimaiegaadhblidfp?hl=en&authuser=0

## Dev Installation
> __NOTE__: You must have Developer Mode enabled (slider; top right of the Extensions Settings page, unless you downloaded this from the Chrome Web Store)

(1) Clone this repository **or** Download the zip file. (2) Then, click the **Load Unpacked** button on the Chrome Extensions Settings page (you can see the point below to get to the Extensions Settings page), locate the "root folder" (where you unzipped the zip file at).

## Site Scripts
New as of the first official release, there are JSON encoded files located in the sites directory.You can modify or add new scripts in this directory. There are two sections in the JSON file, one named classes and one named ids. (1) You can find the names of the classes and id's using the Chrome Inspector or something similiar to view the source of the page. (2) Once you locate the class names and id names, place them in their respective areasin the JSON file. The naming convention for the files should follow camel case to ensure proper execution.

### Chrome Extensions Settings
You can paste the link below in your Chrome browser to bring up the Extensions Settings Screen.

```
chrome://extensions/
```
