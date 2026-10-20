import { emailBrand } from "./email-brand";
import RawHtml from "./RawHtml";
import Row from "./Row";

const { colors, fonts, radius, site, personal, social } = emailBrand;

const link = {
  fontFamily: fonts.sans,
  fontSize: "13px",
  lineHeight: "20px",
  fontWeight: 500,
  color: colors.accentPrimary,
  textDecoration: "none",
} as const;

const sep = { color: colors.borderPrimary, margin: "0 8px" } as const;

/**
 * Footer: Surface bordered + social handles (about-section SocialCard copy).
 */
const EmailBodyLogo = () => (
  <>
    <RawHtml
      html={`<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->`}
    />
    <div style={{ margin: "0 auto", maxWidth: 600 }}>
      <Row align="center" border="0" style={{ width: "100%" }}>
        <td style={{ padding: "8px 0 40px", textAlign: "left" }}>
          <table
            role="presentation"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: colors.bgPrimary,
              border: `1px solid ${colors.borderPrimary}`,
              borderRadius: radius.surface,
            }}>
            <tbody>
              <tr>
                <td style={{ padding: "24px" }}>
                  <div
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: "15px",
                      lineHeight: "24px",
                      fontWeight: 500,
                      color: colors.textPrimary,
                    }}>
                    {personal.name}
                  </div>
                  <div
                    style={{
                      marginTop: "8px",
                      fontFamily: fonts.sans,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: colors.textSecondary,
                    }}>
                    Per spostare o annullare la call usa i link in questa email. Per altro, scrivimi
                    direttamente.
                  </div>
                  <div style={{ marginTop: "16px" }}>
                    <a href={`mailto:${personal.email}`} style={link}>{personal.email}</a>
                  </div>
                  <div style={{ marginTop: "14px", lineHeight: "24px" }}>
                    <a href={site.url} style={link}>andrea0x.me</a>
                    <span style={sep}>|</span>
                    <a href={social.linkedin} style={link}>LinkedIn</a>
                    <span style={sep}>|</span>
                    <a href={social.github} style={link}>GitHub</a>
                    <span style={sep}>|</span>
                    <a href={site.bookUrl} style={link}>call.andrea0x.me/book</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              marginTop: "16px",
              fontFamily: fonts.mono,
              fontSize: "11px",
              lineHeight: "14px",
              letterSpacing: "0.04em",
              color: colors.textTertiary,
              textTransform: "uppercase",
            }}>
            Conferma prenotazione · call.andrea0x.me
          </div>
        </td>
      </Row>
    </div>
  </>
);

export default EmailBodyLogo;
