# Cal.com email branding (self-hosted)

Patches transactional emails on `call.andrea0x.me` (Oracle VM `/opt/calcom`) with header/footer aligned to Andrea0x.me (`globals.css` light tokens + `portfolio.ts` copy).

## Preview locally

Open `preview-booking-email.html` in a browser before deploying.

## Deploy

```bash
SSH_KEY=~/.ssh/calcom_oracle ./apply-on-vm.sh ubuntu@130.110.7.20
```

Rebuilds the `calcom-arm64:local` image (several minutes on the VM).
