# BusinessDesk Privacy

BusinessDesk is designed as a local-first application.

## Core data handling

The intended core application stores business records in the user's browser using browser storage such as IndexedDB. BusinessDesk does not require a BusinessDesk account or backend server for core functionality.

BusinessDesk is designed not to intentionally transmit customer records, financial records, invoices, quotations, project records, inventory records, team records, notes, or other entered business information to the developer.

## Backups

Local browser storage is not a guaranteed backup. Clearing browser/site data, browser resets, device loss, or moving to another browser or device can remove locally stored records.

BusinessDesk will provide explicit export and restore tools so users can maintain their own backups.

## Third-party resources

During development, the application may load ordinary static resources or open-source frontend dependencies required to render the application. These dependencies must not be interpreted as a BusinessDesk cloud storage service. Before a production release, network behavior and dependencies will be reviewed and documented here.

## Analytics and tracking

BusinessDesk does not currently include an analytics, advertising, or user-tracking system.

## Development status

BusinessDesk is currently in active development and is not yet a production release. This document will be updated when functionality or data handling changes.
