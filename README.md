# Sales Secretary website

[Sales Secretary](https://lisiq.github.io/sales-secretary-legal/app/) is an iPhone
and iPad app for clothing inventory, purchases, returns and sale profit.

- [Get the app](https://apps.apple.com/app/id6797229901)
- [Free resale profit calculator](https://lisiq.github.io/sales-secretary-legal/tools/resale-profit/)
- [App privacy policy and Impressum](https://lisiq.github.io/sales-secretary-legal/)

## Hosting

Published from `lisiq/sales-secretary-legal`, main branch, repository root, using
existing GitHub Pages hosting. No paid hosting, domain or additional account.

This folder in the app repository is a maintained source copy, not a nested git
repository. Updating only `salessecretary` does not publish the website. Copy the
same public assets into `sales-secretary-legal`, review the diff, commit and push.
Preserve the root `index.html` policy URL used by the app and App Store.

## Changes

9 October 2026: the English and German privacy update for on-device Predictions,
listing history, private iCloud sync and backups was published in commit bd4bbfc.
The app uses Apple's standard EULA. No separate app account was introduced.

10 October 2026: added `/app/`, `/tools/resale-profit/`, shared static assets and
a sitemap. The legal page gets navigation links; its policy text and effective
date remain unchanged. Pages have no tracking, external fonts or third-party
scripts. Calculator inputs are neither stored nor transmitted. GitHub processes
ordinary website requests under its own privacy policy.

## Development

Serve this folder with any static HTTP server; no package installation or build
is needed. Calculator arithmetic is separated into `tools/resale-profit/money.mjs`.
Tests are maintained in the app repository at
`marketing/growth/tests/calculator.test.mjs` and run with `node --test`.

Use the existing, approved screenshots in `assets/`. Do not substitute design
mockups for real app screenshots. Do not promise model accuracy or live prices.
App Store links are currently direct links. Real campaign links can replace them
when generated in App Store Connect; do not invent a provider token.
