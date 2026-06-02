# 🍪 Cookie Vault Hacker: Session Key Extractor 🗝️

**Developed by [@xyphoscyber](https://github.com/xyphoscyber)**

---

## 💡 Project Overview: The Deep Session Intrusion Tool

The Cookie Vault Hacker is a sophisticated Chrome Extension designed not just to track cookies, but to extract, aggregate, and package the entire state of a user's authenticated session.

This tool moves beyond simple "cookie dumpers." It acts as a comprehensive session key extractor, gathering all necessary authentication tokens and session identifiers in one single, actionable payload.

> **In short:** You run the extension, and it gives you everything needed to replicate a logged-in session elsewhere.

---

## ✨ Core Features

- **🍪 Deep Harvest** — Scans the current active tab to pull session cookies, authentication tokens, and expiration metadata.
- **🔗 Multi-Vector Payload Generation** — It doesn't just dump a list; it pre-calculates multiple usable output formats:
  - **Primary URL Payload:** A clean, single-line URL designed to be pasted directly into a browser address bar (the fastest method).
  - **Structured Data:** A machine-readable format perfect for API ingestion or database logging.
  - **Raw Key List:** A simple `name="value"` string ideal for manual injection into developer consoles (`document.cookie = "..."`).
- **🗄️ Reliable File Output** — All collected data is bundled into a single, highly informative downloadable file (`cookies_master_payload_fallback.txt`) to serve as the ultimate, reliable backup.
- **🚀 High Reliability** — Built with layered fallback systems, ensuring that even if one method (like API calls) fails, another method (like file download) is ready to save the day.

---

## 🛠️ How It Works (The Black Box Magic)

The core strength of this tool lies in its layered extraction model:

| Phase | Description |
|-------|-------------|
| **Acquire** | The extension reads the current page's cookies via the `chrome.cookies` API. |
| **Process** | It runs this data through a sophisticated parsing engine that intelligently separates the raw cookie data into multiple, purpose-built formats (URL, raw string, structured data). |
| **Report** | It presents the results across three fronts: the visible UI, the console log, and the downloadable file. |

---

## 🚀 Getting Started (Installation Guide)

This project is built as a standard Chrome/Manifest V3 Extension.

### Prerequisites

- Chrome Browser (or compatible Chromium-based browser)

### Setup Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/xyphoscyber/Cookie-Vault-Hacker.git
cd Cookie-Vault-Hacker
```

#### 2. Load Extension in Browser

1. Open Chrome and navigate to `chrome://extensions`.
2. Toggle **Developer mode** ON.
3. Click **Load Unpacked** and select the root folder of this repository.

---

## 📋 Usage Workflow

1. Navigate to the website you wish to analyze within Chrome.
2. Click the **[Extension Icon Name]** icon in your toolbar.
3. Click the **"Extract Session Keys"** button inside the popup interface.
4. The tool executes in the background, processing the data, and will immediately prompt you with the results (visible on the screen, available for copy, and automatically downloaded).

---

## 📚 Technical Stack

| Component | Technology |
|-----------|------------|
| **Core** | JavaScript (ES6+) |
| **API Integration** | Chrome Extension APIs (`chrome.tabs`, `chrome.cookies`, `chrome.downloads`) |
| **Architecture** | Service Worker Model (Manifest V3) |

---

## 📂 Folder Structure

```
.
├── manifest.json   # Defines permissions and lifecycle
├── popup.html      # The user interface layout
├── popup.js        # The logic handling button clicks and UI updates
├── background.js   # The heavy lifting engine (cookie parsing, payload generation)
└── icons/          # Extension icons
```

---

## ⚠️ Disclaimer

This tool is intended for **educational, security research, and authorized penetration testing purposes only**.

By using this extension, you agree to the following:

- You will only use this tool on systems, accounts, and websites for which you have **explicit written authorization**.
- You will not use this tool to access, intercept, or impersonate any user session without proper consent.
- The developer (@xyphoscyber) assumes **no liability** for any misuse, damage, data loss, or legal consequences resulting from the use of this software.
- Unauthorized access to computer systems and data is illegal under various jurisdictions including the **Computer Fraud and Abuse Act (CFAA)** and similar laws worldwide.
- This tool is provided "as is" without warranty of any kind. Use at your own risk.

**If you do not agree with these terms, do not use this software.**
