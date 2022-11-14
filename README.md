# Astral Desktop Client
The official Astral databse search engine desktop client.


## Building The Client
### Windows

In Windows your graphics driver will already be installed, but it is recommended to ensure they are up to date.

Download node.js from the download page and follow instructions

Install one of the available NPM downloads for windows, the following are tested with NPM and Electron:

The steps for building with npm (recommended) are as follows:

- Install node.js from nodejs.org
- Once installed do not use the npm terminal that opens
- Open “cmd” from the start menu

Execute the following commands (if asked for install options be sure to choose “all”):
```
cd src
npm i
npm install electron-packager -g
electron-packager .\src "Astral" --platform=win32 --arch=x64
```

### Unix
Execute the following commands:
```
cd src
npm i
npm install electron-packager -g
electron-packager .\src "Astral" --arch=universal
```
