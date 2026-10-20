import { emailBrand } from "./email-brand";
import RawHtml from "./RawHtml";
import Row from "./Row";

const { colors, fonts, radius, site, personal } = emailBrand;

/**
 * Site header pattern (site-header.tsx): name + mono handle on a bordered surface.
 * No glass/blur — email-safe bordered card only.
 */
const EmailHeaderBrand = () => (
  <>
    <RawHtml
      html={`<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->`}
    />
    <div style={{ margin: "0 auto", maxWidth: 600 }}>
      <Row align="center" border="0" style={{ width: "100%" }}>
        <td style={{ padding: "0 0 12px 0", textAlign: "left" }}>
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
                <td style={{ padding: "20px 24px" }}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: colors.textPrimary }}>
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
                        marginTop: "2px",
                        fontFamily: fonts.mono,
                        fontSize: "11px",
                        lineHeight: "14px",
                        letterSpacing: "0.04em",
                        color: colors.textTertiary,
                      }}>
                      · {personal.handle}
                    </div>
                  </a>
                  <div
                    style={{
                      marginTop: "12px",
                      fontFamily: fonts.sans,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: colors.textSecondary,
                    }}>
                    {personal.tagline}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </Row>
    </div>
  </>
);

export default EmailHeaderBrand;
