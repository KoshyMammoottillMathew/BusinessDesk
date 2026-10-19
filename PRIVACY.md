# BusinessDesk Privacy

**Last updated: 19 October 2026**

BusinessDesk by KMM is designed as a privacy-first, local-first business management application.

## Business data stays in the user's browser

BusinessDesk stores its application records locally in the user's browser using IndexedDB. This includes business settings and records such as customers, transactions, invoices, quotations, sales opportunities, projects, inventory, stock movements, team records and goals.

BusinessDesk does not require a BusinessDesk account, application backend, or remote business database for normal operation. The application is designed not to transmit entered business records to the developer or to an application analytics service.

Each browser profile has its own local storage. Forking, cloning, downloading, or viewing the BusinessDesk source-code repository does not provide access to another user's locally stored BusinessDesk database.

## Network protection

The production application includes a restrictive Content Security Policy. In particular, `connect-src 'none'` prevents BusinessDesk application code from establishing network connections through browser mechanisms governed by the Content Security Policy, such as fetch, XMLHttpRequest, WebSocket and EventSource.

The policy also prevents third-party scripts, frames, form submissions and plugins from being loaded or used by the application. Application scripts are restricted to the same origin.

This protection is intended to make accidental introduction of remote data transmission substantially harder. A person who creates and publishes a modified fork controls that fork and can change or remove these protections. Users should therefore use the official BusinessDesk deployment when working with real business information.

## Analytics, advertising and tracking

BusinessDesk does not include an application analytics system, advertising SDK, tracking pixel, telemetry SDK, or user-behaviour tracking service.

BusinessDesk does not sell entered business data and does not provide an application mechanism for sharing that data with advertisers.

## Hosting

The official BusinessDesk web application is delivered as static files using GitHub Pages. As with any website, the hosting provider and network infrastructure necessarily receive ordinary web requests required to deliver the application files. This is separate from the BusinessDesk local database: BusinessDesk does not intentionally include locally stored customer, financial, invoice, project, inventory or team records in those static-file requests.

## Backups and exports

BusinessDesk provides user-controlled backup and restore functionality. Automatic local backup, when enabled and supported by the browser, writes the BusinessDesk backup to a folder selected and authorized by the user. BusinessDesk does not upload that backup to a BusinessDesk server.

Exported backup files can contain sensitive business information. Users are responsible for protecting exported files, controlling who can access them, and choosing a secure storage location.

## Local-device security

Local-first storage protects business records from being placed in a BusinessDesk cloud database, but it does not make the user's device or browser immune to compromise. Someone who gains access to the user's device, browser profile, exported backup files, or an already-unlocked browser session may be able to access locally stored information.

BusinessDesk's IndexedDB records are not currently encrypted by BusinessDesk with a separate user passphrase. Device encryption, operating-system account security, browser security and secure handling of backup files therefore remain important.

## Forks and modified versions

BusinessDesk is open-source software. A fork contains the source code, not the local data stored by users of the official deployment. However, a third party can modify a fork and publish code with different privacy behaviour. The privacy properties described in this document apply to the official BusinessDesk source and deployment corresponding to this policy, not to independently modified third-party versions.

## Changes

Privacy-sensitive changes should be reviewed before release. If BusinessDesk later introduces a backend, synchronization service, analytics, externally hosted application resources, or another feature that changes how user data is handled, this policy and the application's technical privacy controls should be updated before that feature is released.
