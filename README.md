# sales-secretary-legal

Privacy policy and legal pages for **Sales Secretary** — an iOS app for tracking clothing-reselling purchases, returns and profit.

Hosted via GitHub Pages at: **https://lisiq.github.io/sales-secretary-legal/**

This repo serves a single static `index.html` containing:
- English privacy policy
- German *Impressum* (§ 5 DDG)
- German *Datenschutzerklärung* (DSGVO)

The privacy policy URL is referenced in App Store Connect → App Privacy.

## Publishing

```bash
cd sales-secretary-legal
git init
git add .
git commit -m "Privacy policy for Sales Secretary"
git branch -M main
git remote add origin https://github.com/lisiq/sales-secretary-legal.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: `main` / root**. The page is live at the URL above within a minute or two.

## Updating the policy

Edit `index.html`, commit, push. GitHub Pages republishes within a minute or two. If anything material changes (data handling, third parties), bump the "Effective date" / "Stand:" lines.

## What this policy claims — keep it true

Unlike the game apps, Sales Secretary is **not** a "nothing ever leaves the device" app. Two things do, and the policy says so. If either changes, the policy has to change with it:

| Feature | What leaves the device | Where it's implemented |
|---|---|---|
| Address autocomplete | The partial address text you type, sent to Apple for suggestions | `Views/Components/AddressField.swift` (`MKLocalSearchCompleter`) |
| "Open in Maps" | The address, passed to Apple Maps / Google Maps / Waze when you pick one | `Helpers/MapLinks.swift` |

Everything else — records, photos, notifications, reports — stays local. There is no account, no server, no analytics, no ads, no iCloud sync.

Also worth re-checking before each release:
- `SalesSecretary/PrivacyInfo.xcprivacy` still declares no tracking and no collected data types.
- The camera / photo-library usage strings in the project still describe the real reason.
- Adding CloudKit sync, any SDK, or any crash reporter would make several paragraphs here false.
