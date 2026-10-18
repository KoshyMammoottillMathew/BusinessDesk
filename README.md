# BusinessDesk

**A free, privacy-first, local-first business management dashboard.**

BusinessDesk is an open-source browser application for managing finance, customers, sales, invoices, quotations, projects, inventory, team records, goals, and business analytics from one workspace.

## Product principles

- No signup required
- No BusinessDesk backend required for core functionality
- Business records stay in the user's browser by default
- Local-first storage using IndexedDB
- JSON backup and restore
- CSV import and export where appropriate
- Responsive desktop and mobile interface
- Free core functionality with no paid dependency required
- Open source under the MIT License

> Browser storage is not a backup. Clearing site data, resetting the browser, or changing devices may remove locally stored records. Users should export regular backups.

## Planned V1 modules

- Dashboard and smart local insights
- Finance and cash flow
- Customers / CRM
- Sales pipeline
- Invoices and quotations
- Projects and tasks
- Inventory / products and services
- Team records
- Reports and analytics
- Business goals
- Settings and business setup
- Backup / restore and data export
- Demo mode

## Architecture

BusinessDesk is designed as a static web application that can be deployed to GitHub Pages. The planned stack is React, TypeScript, Vite, IndexedDB, and a lightweight charting layer.

The core application will not require a traditional server, account system, or cloud database. Optional cloud or AI integrations may be explored later, but the core product will continue to work without them.

## Development roadmap

1. Application foundation and design system
2. Responsive application shell
3. Local IndexedDB data layer
4. Dashboard and demo dataset
5. Finance
6. CRM and sales pipeline
7. Invoices and quotations
8. Projects and tasks
9. Inventory
10. Team records
11. Reports and goals
12. Backup, restore, and CSV tools
13. PWA support
14. Accessibility, responsive, privacy, and security review
15. GitHub Pages production deployment

## Privacy

BusinessDesk is being designed so that business records are processed locally in the user's browser. The project will not intentionally collect customer records, financial records, invoices, notes, or other business data through a BusinessDesk server.

A complete privacy document will be maintained in `PRIVACY.md` as the application develops.

## Status

🚧 **In active development.** The repository is not yet a production release.

## Author

Koshy Mammoottill Mathew

## License

MIT
