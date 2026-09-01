# TFC (Temp File Cleaner) by OldTimer

[![Release](https://img.shields.io/github/v/release/markkirby125/tfc-old-timer?style=flat-square&color=0ea5e9)](https://github.com/markkirby125/tfc-old-timer/releases/latest)
[![Live Site](https://img.shields.io/badge/Website-tfc--old--timer.tcp123.com-10b981?style=flat-square)](https://gettfc.download)
[![Platform](https://img.shields.io/badge/Platform-Legacy%20Windows%20(XP%20%7C%20Vista%20%7C%207%20%7C%208.1)-amber?style=flat-square)](https://gettfc.download)
[![Downloads](https://img.shields.io/badge/Historical%20Downloads-1.33M%2B-blue?style=flat-square)](https://www.geekstogo.com/forum/files/file/187-tfc-temp-file-cleaner-by-oldtimer/)
[![Licence](https://img.shields.io/badge/Licence-Freeware%20Archive-lightgrey?style=flat-square)](LICENSE)

> **Official Standalone Archive Mirror & Technical Documentation**  
> Public archive and landing page for **TFC (Temp File Cleaner)**, the classic Windows malware remediation and deep temporary file purge utility created by **OldTimer** (historically featured on Geeks to Go & BleepingComputer).

---

## 📊 Historical Milestone & Social Proof

- **1,333,828+** Community Downloads on Geeks to Go
- **6,385,427+** Historical Technical Forum Views
- **100% Freeware** (Zero Telemetry, Zero Bundled Adware)
- **438 KB Micro-Footprint** Standalone Executable

---

## ⚠️ Important Operating System Advisory (Windows 10 & 11)

> **Do not use TFC on Windows 10 or Windows 11.**  
> TFC was developed prior to Windows 10. It forcibly shuts down the Windows Explorer shell (`explorer.exe`) to unlock file handles. In Windows 10 and 11, Explorer is tightly coupled with modern Universal Windows Platform (UWP) brokers, the modern Start Menu, and Search indexing. Running TFC on modern systems can cause the taskbar and Start Menu to permanently freeze or fail to reload upon shell restart.
>
> **Recommended Alternatives for Windows 10 & 11 Users:**
> 1. **Storage Sense:** Built into `Settings > System > Storage`.
> 2. **Disk Cleanup:** Built into Windows (`cleanmgr.exe` > *Clean up system files*).
> 3. **DISM Cleanup:** Command prompt `dism /online /cleanup-image /startcomponentcleanup`.
> 4. **BleachBit:** Actively maintained modern open-source cleaner.

---

## 📥 Direct Download (Legacy Windows XP / Vista / 7 / 8.1)

| Source | Link | Format | Size |
| :--- | :--- | :--- | :--- |
| **Primary Binary** | [**Download TFC.exe**](https://github.com/markkirby125/tfc-old-timer/releases/latest/download/TFC.exe) | Portable Executable (`.exe`) | ~438 KB |
| **Releases Tag** | [**GitHub Releases Hub**](https://github.com/markkirby125/tfc-old-timer/releases) | Release Assets | All Releases |
| **Live Web App** | [**gettfc.download**](https://gettfc.download) | Cloudflare Pages Edge | Static Site |

---

## 🔍 Cryptographic Checksums

Verify your downloaded `TFC.exe` binary matches the original authentic release:

- **MD5:** `788fcddd88240a85039f7f561093b118`
- **SHA-256:** `c6592c2061c39ea8ed94d1f6854e16a722dc461f4d5b907b0230452d07d4cce3`

---

## 🛡️ What TFC Purges vs What It Preserves

| Target Category | ✔ What TFC Purges (Cleaned) | 🛡️ What TFC Preserves (Untouched) |
| :--- | :--- | :--- |
| **User Profiles** | `%TEMP%`, Local AppData Temp, Temporary Internet Files | Documents, Desktop Files, Downloads Folder |
| **System Services** | `LocalService\Temp`, `NetworkService\Temp`, `%SystemRoot%\Temp` | System Registry Hives, Critical Drivers |
| **Web Browsers** | Chrome, Firefox, Opera, IE & Safari Media Caches | **Cookies, URL History, Saved Passwords, Bookmarks** |
| **Windows Subsystems**| Root drive `%SystemDrive%\*.tmp` files, System32 buffers | **Prefetch Files (`C:\Windows\Prefetch`)**, Restore Points |

---

## ⚙️ Technical Specifications

- **Developer:** OldTimer (BleepingComputer / Geekstogo / Sysnative remediation tools)
- **Binary Name:** `TFC.exe`
- **Architecture:** x86 Native (Compatible with 32-bit & 64-bit legacy Windows architectures)
- **Privileges Required:** Administrator (`Run as administrator`)
- **Execution Mode:** 100% Standalone / Portable (Zero installation or background daemon)
- **Target Supported OS:** Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1
- **Incompatible OS:** Windows 10, Windows 11 (Not supported)

---

## ⚖️ Legal Disclaimer

This repository and its documentation site serve as an independent public archive mirror for historical software preservation. Windows is a registered trademark of Microsoft Corporation. All third-party trademarks and trade names are the property of their respective owners.
