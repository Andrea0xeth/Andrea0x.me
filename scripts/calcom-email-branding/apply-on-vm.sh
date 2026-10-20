#!/usr/bin/env bash
# Apply Andrea Ritondale email branding to self-hosted Cal.com on Oracle VM.
# Usage: ./apply-on-vm.sh [ssh_target]
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SSH_TARGET="${1:-ubuntu@130.110.7.20}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/calcom_oracle}"
REMOTE_COMPONENTS="/opt/calcom/src/packages/emails/src/components"

SSH=(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$SSH_TARGET")

echo "→ Copy branded email components…"
scp -i "$SSH_KEY" -o StrictHostKeyChecking=no \
  "$SCRIPT_DIR/EmailBodyLogo.tsx" \
  "$SCRIPT_DIR/EmailHeaderBrand.tsx" \
  "$SCRIPT_DIR/email-brand.ts" \
  "$SSH_TARGET:/tmp/"

"${SSH[@]}" "sudo cp /tmp/EmailBodyLogo.tsx $REMOTE_COMPONENTS/EmailBodyLogo.tsx && \
  sudo cp /tmp/EmailHeaderBrand.tsx $REMOTE_COMPONENTS/EmailHeaderBrand.tsx && \
  sudo cp /tmp/email-brand.ts $REMOTE_COMPONENTS/email-brand.ts && \
  sudo chown ubuntu:ubuntu $REMOTE_COMPONENTS/EmailBodyLogo.tsx $REMOTE_COMPONENTS/EmailHeaderBrand.tsx $REMOTE_COMPONENTS/email-brand.ts"

echo "→ Patch BaseEmailHtml + V2BaseEmailHtml (header import + render)…"
scp -i "$SSH_KEY" -o StrictHostKeyChecking=no \
  "$SCRIPT_DIR/patch-email-layout.py" \
  "$SSH_TARGET:/tmp/patch-email-layout.py"
"${SSH[@]}" "python3 /tmp/patch-email-layout.py"

echo "→ Replace emails/logo.png with text mark (fallback clients)…"
"${SSH[@]}" 'python3 << "PY"
from pathlib import Path
# Minimal PNG is optional; header/footer use andrea0x.me assets. Skip if Pillow missing.
try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("Pillow not installed — skipping logo.png regeneration")
    raise SystemExit(0)

out = Path("/opt/calcom/src/apps/web/public/emails/logo.png")
w, h = 320, 48
img = Image.new("RGBA", (w, h), (15, 23, 42, 255))
draw = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 22)
except OSError:
    font = ImageFont.load_default()
draw.text((16, 10), "Andrea Ritondale", fill=(255, 255, 255), font=font)
img.save(out)
print(f"Wrote {out}")
PY'

echo "→ Rebuild Cal.com image (this can take several minutes)…"
"${SSH[@]}" 'cd /opt/calcom && docker compose build calcom && docker compose up -d calcom'

echo "✓ Done. Send a test booking to verify the new email layout."
