# Core Domain Specifications & Compatibility: TFC by OldTimer

## 1. Legacy Binary Assets & Verified Integrity Hashes
- **Primary Binary Asset URL**: `https://github.com/markkirby125/tfc-old-timer/releases/latest/download/TFC.exe`
- **Fallback Release Mirror**: `https://github.com/markkirby125/tfc-old-timer/releases`
- **Verified MD5 Hash**: `788fcddd88240a85039f7f561093b118`
- **Verified SHA-256 Hash**: `c6592c2061c39ea8ed94d1f6854e16a722dc461f4d5b907b0230452d07d4cce3`

## 2. Operating System Compatibility Boundary
- **Supported (Target Audience)**: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1.
- **Incompatible (Strict User Warning)**: Windows 10, Windows 11.
  - *Rationale*: TFC forcefully terminates `explorer.exe` to unlock and purge in-use temporary files. On modern Windows 10 and 11, restarting `explorer.exe` breaks the modern UWP shell, Start menu, taskbar, and notification tray.
- **Deterministic Win 10/11 Remediation Guidance**: Explicitly recommend native Windows tools:
  - Storage Sense (`Settings > System > Storage`)
  - Disk Cleanup (`cleanmgr.exe`)
  - DISM component cleanup (`dism /online /cleanup-image /startcomponentcleanup`)
  - Open-source alternative: BleachBit

## 3. SEO Keywords & Search Intent
- **Primary Keywords**: `TFC Old Timer`, `Temp File Cleaner by OldTimer`, `TFC.exe download`
- **Secondary Keywords**: `TFC BleepingComputer`, `OldTimer software`, `TFC Windows 7`, `TFC Windows XP`, `clean temp files OldTimer`, `portable disk cleanup`

## 4. Conversion & Download Trigger Rules
- Primary CTA directs users to the GitHub release direct download link.
- Prominent OS compatibility warning callouts intercept modern Windows users before download.
- Checksum copy buttons provide instant clipboard copying of MD5 and SHA-256 hashes with user feedback.
