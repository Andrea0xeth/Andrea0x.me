#!/usr/bin/env python3
"""Patch Cal.com BaseEmailHtml / V2BaseEmailHtml for Andrea header + footer."""
from pathlib import Path

COMPONENTS = Path("/opt/calcom/src/packages/emails/src/components")

IMPORT_SNIPPET = (
    'import EmailBodyLogo from "./EmailBodyLogo";\n'
    'import EmailHeaderBrand from "./EmailHeaderBrand";'
)


def patch(path: Path) -> None:
    text = path.read_text()
    if "EmailHeaderBrand" not in text:
        text = text.replace(
            'import EmailBodyLogo from "./EmailBodyLogo";',
            IMPORT_SNIPPET,
        )
    if "<EmailHeaderBrand />" not in text:
        needle = "{props.headerType && ("
        if needle in text:
            text = text.replace(needle, "<EmailHeaderBrand />\n            {props.headerType && (", 1)
        else:
            needle = "{props.headerType && <EmailSchedulingBodyHeader"
            text = text.replace(
                needle,
                "<EmailHeaderBrand />\n          {props.headerType && <EmailSchedulingBodyHeader",
                1,
            )
    text = text.replace(
        "{!Boolean(props.hideLogo) && <EmailBodyLogo />}",
        "<EmailBodyLogo />",
    )
    path.write_text(text)
    print(f"Patched {path}")


def main() -> None:
    for name in ("BaseEmailHtml.tsx", "V2BaseEmailHtml.tsx"):
        patch(COMPONENTS / name)


if __name__ == "__main__":
    main()
