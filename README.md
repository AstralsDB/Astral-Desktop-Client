# Astral Desktop Client
The official Astral databse search engine desktop client.


## Building The Client
### Windows

In Windows your graphics driver will already be installed, but it is recommended to ensure they are up to date.
Download Go from the download page and follow instructions

Install one of the available C compilers for windows, the following are tested with Go and Fyne:
- MSYS2 with MingW-w64 - msys2.org
- TDM-GCC - tdm-gcc.tdragon.net
- Cygwin - cygwin.com

The steps for installing with MSYS2 (recommended) are as follows:

- Install MSYS2 from msys2.org
- Once installed do not use the MSYS terminal that opens
- Open “MSYS2 MinGW 64-bit” from the start menu

Execute the following commands (if asked for install options be sure to choose “all”):
```
pacman -Syu
pacman -S git mingw-w64-x86_64-toolchain

cd src
go mod init astral
go get fyne.io/fyne/v2
go mod tidy
```

### Unix
Execute the following commands:
```
cd src
go mod init astral
go get fyne.io/fyne/v2
go mod tidy
```
