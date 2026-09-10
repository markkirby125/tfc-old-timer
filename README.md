# TFC by OldTimer: Final Release Archive

[![Live Site](https://img.shields.io/badge/Website-tfc--old--timer.tcp123.com-10b981?style=flat-square)](https://gettfc.download)
[![Downloads](https://img.shields.io/badge/Historical%20Downloads-1.33M%2B-blue?style=flat-square)](https://www.geekstogo.com/forum/files/file/187-tfc-temp-file-cleaner-by-oldtimer/)
[![Licence](https://img.shields.io/badge/Licence-Freeware%20Archive-lightgrey?style=flat-square)](LICENSE)

**Bottom Line Up Front (BLUF):** TFC (Temp File Cleaner) by OldTimer is a legacy Windows executable that deletes temporary files across all user accounts by terminating active processes to release file locks. This repository serves as an unofficial public mirror for the final release build. The software is closed-source and no longer in active development.

## What is TFC by OldTimer?
Temp File Cleaner (TFC) is a 32-bit standalone utility that clears `%TEMP%`, local app data, and browser caches for every user profile on a Windows machine. Unlike the native Windows Disk Cleanup tool, TFC kills running processes—including `explorer.exe`—before attempting deletion. This forces the OS to release file locks, allowing TFC to purge stubborn files that standard tools leave behind. Following the cleanup, it triggers a mandatory system reboot.

For full downloads, alternatives, and deployment guides, visit the primary distribution hub: [gettfc.download](https://gettfc.download).

## Security Protocol and Provenance
We scanned the executable provided in this mirror (`TFC.exe`), and it passes standard endpoint detection checks. That said, never trust binary files blindly. Always take precautions when downloading executable files from strangers on the internet. Run your own checksums, verify the file against [VirusTotal](https://www.virustotal.com/), or sandbox it before executing it on a live machine.

This is **not** an official repository for the application. The original developer (OldTimer) has retired the tool, making this the final, unaltered release. It is completely proprietary and not open source. Review our [AGENTS.md](AGENTS.md) file for operational directives regarding this archive.

### Cryptographic Checksums
Verify your downloaded `TFC.exe` binary matches the original authentic release hosted in our [GitHub Releases](https://github.com/markkirby125/tfc-old-timer/releases) section:
- **MD5:** `788fcddd88240a85039f7f561093b118`
- **SHA-256:** `c6592c2061c39ea8ed94d1f6854e16a722dc461f4d5b907b0230452d07d4cce3`

## Operational Execution: How TFC Bypasses File Locks
TFC uses a blunt-force approach to clear system bloat:
1. **Process Halting:** It terminates all user-level processes. Save your work before launching it. 
2. **Cross-Profile Wiping:** It iterates through `C:\Users\` (or `C:\Documents and Settings\`) and empties the temp directories for every account, not just the currently logged-in user.
3. **Hard Reboot:** It forces a system restart to finalize the removal of files locked by system-level drivers.

## Modern OS Compatibility Warning (Windows 10 & 11)
TFC was designed for Windows XP, Vista, Windows 7, and Windows 8.1. While it executes on Windows 10 and 11, aggressive process termination causes unexpected behavior in modern Desktop Window Manager (DWM) environments. In modern systems, Explorer is tightly coupled with UWP brokers. Running TFC on modern systems can cause the taskbar and Start Menu to permanently freeze or fail to reload upon shell restart.

For contemporary systems, review [Microsoft's official Disk Cleanup documentation](https://support.microsoft.com/en-us/windows/disk-cleanup-in-windows-8a96ff42-5751-39ad-23d6-434b4d5b9c23) or use an actively maintained, open-source remediation stack like [BleachBit](https://www.bleachbit.org/).
