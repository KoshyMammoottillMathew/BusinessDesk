# BusinessDesk by KMM

**A privacy-first, local-first business management workspace.**

BusinessDesk by KMM is an open-source browser application for managing finance, customers, sales, invoices, quotations, projects, inventory, team records, goals, and business analytics from one workspace.

## Product principles

- No signup required
- No BusinessDesk by KMM backend required for core functionality
- Business records stay in the user's browser by default
- Local-first storage using IndexedDB
- JSON backup and restore
- CSV import and export where appropriate
- Responsive desktop and mobile interface
- Free core functionality with no paid dependency required
- Open source under the MIT License

> Browser storage is not a backup. Clearing site data, resetting the browser, or changing devices may remove locally stored records. Export regular backups from Backup & Restore.

## Core modules

- Dashboard and local business insights
- Finance and cash flow
- Customers / CRM
- Sales pipeline
- Invoices and quotations
- Projects
- Inventory / products and services
- Stock movements and invoice fulfillment
- Team records
- Reports and analytics
- Business goals
- Settings and business setup
- Backup / restore and data export

## Architecture

BusinessDesk by KMM is a static React + TypeScript application built with Vite. Business data is stored locally in IndexedDB and the application can be hosted as a static site on GitHub Pages without a traditional application server or cloud database.

## Privacy

The core application processes business records locally in the user's browser. The project does not require customer records, financial records, invoices, notes, or inventory records to be sent to a BusinessDesk by KMM server.

Because data is local to the browser and website origin, users should maintain regular exported backups before clearing browser data or moving to another device/browser.

See `PRIVACY.md` for additional privacy information.

## Deployment

The production build is deployed to GitHub Pages using the workflow in `.github/workflows/deploy-pages.yml`.

The Vite base path is configured for the `BusinessDesk` GitHub repository.

## Status

**V1 release preparation.** The application is under active development; production users should keep regular backups while features continue to evolve.

## Author

Koshy Mammoottill Mathew (KMM)

## License

MIT
