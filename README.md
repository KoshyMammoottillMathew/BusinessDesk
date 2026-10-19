<div align="center">

# 💼 BusinessDesk by KMM

### Your business. Your data. Your desk.

**A free, open-source, privacy-first business management workspace that runs in your browser.**

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](./package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen.svg)](./LICENSE)
[![Local First](https://img.shields.io/badge/Data-Local--First-purple.svg)](#-privacy--data)
[![React](https://img.shields.io/badge/React-TypeScript-61DAFB.svg)](#%EF%B8%8F-tech-stack)

[🚀 Live App](https://koshymammoottillmathew.github.io/BusinessDesk/) · [✨ Features](#-what-you-can-manage) · [⚡ Quick Start](#-quick-start) · [🔒 Privacy](#-privacy--data) · [📜 License](#-license)

---

### 🆓 100% FREE TO USE · 🔓 OPEN SOURCE · 💳 NO SUBSCRIPTION FEES

No signup required for core functionality. No BusinessDesk backend required. Your business records stay in your browser by default.

</div>

## ✨ Why BusinessDesk?

Business software should help you run your business — not lock your records behind another monthly subscription.

**BusinessDesk by KMM** brings the essential parts of day-to-day business management into one workspace: finance, customers, sales, invoices, quotations, projects, inventory, team records, goals, and analytics.

| | BusinessDesk approach |
|---|---|
| 💰 **Cost** | Free core functionality |
| 🔐 **Privacy** | Business records stay local by default |
| 👤 **Account** | No signup required |
| ☁️ **Backend** | No BusinessDesk backend required for core use |
| 💾 **Storage** | IndexedDB in your browser |
| 📦 **Portability** | JSON backup/restore + CSV import/export where appropriate |
| 🧑‍💻 **Source** | Public and open source |
| 📜 **License** | MIT |

> [!IMPORTANT]
> **Browser storage is not a backup.** Clearing site data, resetting your browser, or changing devices may remove locally stored records. Export regular backups from **Backup & Restore**.

## 🧩 What you can manage

<details open>
<summary><strong>📊 Dashboard & business insights</strong></summary>
<br>
Get a central view of your business activity and locally generated insights without sending your core business records to a BusinessDesk server.
</details>

<details>
<summary><strong>💰 Finance & cash flow</strong></summary>
<br>
Track business transactions, income, expenses, categories, and cash-flow information from one place.
</details>

<details>
<summary><strong>👥 Customers / CRM</strong></summary>
<br>
Maintain customer information and keep important business relationships organized.
</details>

<details>
<summary><strong>📈 Sales pipeline</strong></summary>
<br>
Keep track of sales opportunities and move work from prospect to customer.
</details>

<details>
<summary><strong>🧾 Invoices & quotations</strong></summary>
<br>
Create and manage quotations and invoices alongside the rest of your business records.
</details>

<details>
<summary><strong>📁 Projects</strong></summary>
<br>
Organize projects and connect related business information in the same workspace.
</details>

<details>
<summary><strong>📦 Inventory, products & services</strong></summary>
<br>
Manage products and services, stock movements, and invoice fulfillment information.
</details>

<details>
<summary><strong>👨‍👩‍👧‍👦 Team records</strong></summary>
<br>
Keep useful team information accessible from the business workspace.
</details>

<details>
<summary><strong>📉 Reports, analytics & goals</strong></summary>
<br>
Review business performance and maintain goals using locally processed business data.
</details>

<details>
<summary><strong>💾 Backup, restore & export</strong></summary>
<br>
Export JSON backups, restore your BusinessDesk data, and use CSV import/export where supported.
</details>

## 🚀 Quick Start

### Option 1 — Use the hosted app

Open the GitHub Pages deployment:

**👉 https://koshymammoottillmathew.github.io/BusinessDesk/**

Your core business records are stored locally in the browser you use to access the app.

### Option 2 — Run it locally

```bash
# Clone the repository
git clone https://github.com/KoshyMammoottillMathew/BusinessDesk.git

# Enter the project
cd BusinessDesk

# Install dependencies
npm install

# Start the development server
npm run dev
```

For a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🏗️ How it works

```text
┌─────────────────────────────────────────────────────┐
│                 BusinessDesk by KMM                 │
│              React + TypeScript + Vite              │
├─────────────────────────────────────────────────────┤
│ Dashboard │ Finance │ CRM │ Sales │ Projects │ More │
├─────────────────────────────────────────────────────┤
│                 Local Data Layer                    │
│                    IndexedDB                        │
├─────────────────────────────────────────────────────┤
│      JSON Backup / Restore + CSV Import/Export      │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
                 Your web browser
```

BusinessDesk is a static React + TypeScript application built with Vite. It can be hosted as a static site without a traditional application server or cloud database for its core local-first functionality.

## 🔒 Privacy & data

Privacy is a core product principle.

The core application processes business records locally in your browser. BusinessDesk does not require customer records, financial records, invoices, notes, or inventory records to be sent to a BusinessDesk by KMM server.

### What this means

- 🖥️ Core business records stay in your browser by default.
- 🔑 You do not need a BusinessDesk account for core functionality.
- 💾 IndexedDB provides local browser storage.
- 📤 You can export backups and supported data.
- ⚠️ You are responsible for maintaining backups of important records.

For more information, read the **[Privacy documentation](./PRIVACY.md)**.

## 🛠️ Tech stack

| Technology | Purpose |
|---|---|
| ⚛️ React | User interface |
| 🔷 TypeScript | Typed application development |
| ⚡ Vite | Development and production builds |
| 🗄️ IndexedDB / `idb` | Local browser data storage |
| 📊 Recharts | Charts and data visualization |
| 🎨 Lucide React | Interface icons |
| 🌐 GitHub Pages | Static production deployment |

## 📂 Project structure

```text
BusinessDesk/
├── .github/             # GitHub workflows
├── src/                 # Application source code
├── dist/                # Production build output
├── LICENSE              # MIT License
├── PRIVACY.md           # Privacy information
├── README.md            # Project documentation
├── package.json         # Scripts and dependencies
├── index.html           # Application entry page
└── vite.config.ts       # Vite configuration
```

## 🗺️ Project status

> [!NOTE]
> **V1 release preparation — active development.**

BusinessDesk is evolving. Features and workflows may continue to change as the V1 release is refined. If you use it for real business records, maintain regular exported backups.

## 🤝 Contributing

BusinessDesk is open source, and constructive contributions are welcome.

You can help by:

- 🐛 Reporting bugs
- 💡 Suggesting useful features
- 🧪 Testing workflows and edge cases
- 📝 Improving documentation
- 💻 Contributing code improvements

Use the repository's **Issues** and **Pull Requests** sections to participate.

## ⭐ Support the project

If BusinessDesk is useful to you, consider giving the repository a **⭐ Star**. It helps other people discover the project and supports continued development.

You can also share the project with freelancers, small businesses, agencies, and teams looking for a local-first business workspace without subscription fees.

## 📜 License

BusinessDesk by KMM is released under the **MIT License**.

You may use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software subject to the terms of the license.

See **[LICENSE](./LICENSE)** for the full license text.

## 👨‍💻 Author

**Koshy Mammoottill Mathew (KMM)**

Creator and maintainer of **BusinessDesk by KMM**.

<div align="center">

---

### 💼 One workspace. Your business data. No subscription required.

**[🚀 Open BusinessDesk](https://koshymammoottillmathew.github.io/BusinessDesk/)**

Made with care by **KMM** · Licensed under **MIT**

</div>
