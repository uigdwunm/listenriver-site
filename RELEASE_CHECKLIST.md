# Release Checklist

Use this checklist before uploading a public installer.

## Build Artifact

- Confirm the installer is a `.dmg` or `.zip`, not a raw development `target/` directory.
- Confirm the file name follows `ListenRiver-Extractor-<version>-macos-arm64.dmg`.
- Confirm the final file is below GitHub Releases' 2 GiB single-file upload limit.

## Privacy Boundary

- Do not upload the private application source tree.
- Do not upload build caches.
- Do not upload local project directories or user media.
- Do not include local absolute paths in release notes.

## Public Download Test

- Open the GitHub Release in a signed-out or private browser session.
- Download the asset.
- Confirm the downloaded file size matches the uploaded file.
