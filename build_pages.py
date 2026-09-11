import os
import re
import json

PAGES = [
    {
        "path": "tfc-by-oldtimer",
        "title": "TFC.exe (Temp File Cleaner) by OldTimer — Download 3.1.9.0",
        "description": "Download the official verified TFC by OldTimer executable. Includes MD5/SHA256 checksums and legacy Windows compatibility warnings.",
        "schema_name": "TFC by OldTimer",
        "h1": "TFC.exe (Temp File Cleaner) by OldTimer"
    },
    {
        "path": "tfc-vs-ccleaner-windows-7",
        "title": "TFC by OldTimer vs CCleaner for Windows 7: Which is Better?",
        "description": "Compare TFC by OldTimer vs CCleaner on legacy Windows 7 systems. Understand the differences in file locking, process termination, and privacy.",
        "schema_name": "TFC vs CCleaner",
        "h1": "TFC vs CCleaner on Windows 7"
    },
    {
        "path": "is-tfc-safe-windows-10",
        "title": "Is TFC (Temp File Cleaner) Safe for Windows 10 & 11?",
        "description": "Warning: Do not run TFC by OldTimer on Windows 10 or 11. Learn why killing explorer.exe breaks modern UWP and what native tools to use instead.",
        "schema_name": "TFC Windows 10 Safety Warning",
        "h1": "Is TFC Safe for Windows 10?"
    },
    {
        "path": "oldtimer-tools",
        "title": "OldTimer Tools Archive: TFC, OTL, OTM, and OTC in 2026",
        "description": "The complete index of the OldTimer remediation suite. Learn about TFC, OTL, OTM, and OTC, and their relevance for retro PC maintenance.",
        "schema_name": "OldTimer Tools Suite",
        "h1": "The OldTimer Tools Suite"
    },
    {
        "path": "how-to-verify-tfc-checksum",
        "title": "How to Verify TFC.exe MD5 & SHA-256 Checksums",
        "description": "Step-by-step walkthrough to verify the cryptographic checksums of TFC by OldTimer before executing. Ensure you have the authentic 438 KB binary.",
        "schema_name": "TFC Checksum Verification Guide",
        "h1": "How to Verify TFC.exe Checksums"
    }
]

with open("main/header.tmp", "r", encoding="utf-8") as f:
    header = f.read()

with open("main/footer.tmp", "r", encoding="utf-8") as f:
    footer = f.read()

for p in PAGES:
    os.makedirs(f"main/{p['path']}", exist_ok=True)
    
    # Replace metadata
    new_header = header
    new_header = re.sub(r'<title>.*?</title>', f'<title>{p["title"]}</title>', new_header)
    new_header = re.sub(r'<meta name="title" content=".*?"', f'<meta name="title" content="{p["title"]}"', new_header)
    new_header = re.sub(r'<meta property="og:title" content=".*?"', f'<meta property="og:title" content="{p["title"]}"', new_header)
    new_header = re.sub(r'<meta property="twitter:title" content=".*?"', f'<meta property="twitter:title" content="{p["title"]}"', new_header)
    
    new_header = re.sub(r'<meta name="description" content=".*?"', f'<meta name="description" content="{p["description"]}"', new_header)
    new_header = re.sub(r'<meta property="og:description" content=".*?"', f'<meta property="og:description" content="{p["description"]}"', new_header)
    new_header = re.sub(r'<meta property="twitter:description" content=".*?"', f'<meta property="twitter:description" content="{p["description"]}"', new_header)
    
    new_header = re.sub(r'<link rel="canonical" href=".*?"', f'<link rel="canonical" href="https://gettfc.download/{p["path"]}/"', new_header)
    new_header = re.sub(r'<meta property="og:url" content=".*?"', f'<meta property="og:url" content="https://gettfc.download/{p["path"]}/"', new_header)
    
    # Build content body
    # We will just write a placeholder section for the body, which can be modified later
    body = f"""
  <section class="py-16 md:py-24 border-b border-slate-800/80">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">{p["h1"]}</h1>
      <div class="prose prose-invert prose-slate max-w-none">
        <p class="text-lg text-slate-300">Content for {p["path"]} goes here...</p>
      </div>
    </div>
  </section>
"""

    with open(f"main/{p['path']}/index.html", "w", encoding="utf-8") as f:
        f.write(new_header + body + footer)

print("Pages scaffolded successfully.")
