import { Resend } from "resend";

/**
 * Netlify Function – wird automatisch durch das Event "submission-created"
 * getriggert, sobald ein Netlify-Forms-Submission eingeht.
 *
 * Erwartete Forms:
 *  - name="contact" → Benachrichtigung an info@fels-coach.de (Layout = Lovable-Original)
 *  - name="ebook"   → PDF-Download-Mail an Nutzer (Layout = Lovable-Original)
 */

const OWNER_EMAIL = "info@fels-coach.de";
const FROM_CONTACT = "Coach Anfrage <anfrage@send.fels-coach.de>";
const FROM_EBOOK = "Jona Fels <anfrage@send.fels-coach.de>";
const EBOOK_DOWNLOAD_URL = "https://fels-coach.de/der-weg-zum-ganzsein.pdf";

interface NetlifySubmissionEvent {
  body: string;
}

interface SubmissionPayload {
  payload: {
    form_name: string;
    data: Record<string, string>;
    email?: string;
  };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function contactHtml(name: string, email: string, message: string) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const dateStr = new Date().toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td style="padding: 32px 40px 24px; border-bottom: 1px solid #e5e5e5;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #1a1a1a;">Neue Coaching-Anfrage</h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #666;">${dateStr}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 12px 16px; background-color: #f9f9f9; border-radius: 6px;">
                    <p style="margin: 0 0 4px; font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                    <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 500;">${safeName}</p>
                  </td>
                </tr>
                <tr><td style="height: 12px;"></td></tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f9f9f9; border-radius: 6px;">
                    <p style="margin: 0 0 4px; font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">E-Mail</p>
                    <p style="margin: 0; font-size: 16px; color: #1a1a1a;"><a href="mailto:${safeEmail}" style="color: #333; text-decoration: underline;">${safeEmail}</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px 32px;">
              <p style="margin: 0 0 12px; font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Nachricht</p>
              <div style="padding: 20px; background-color: #fafafa; border-left: 4px solid #999; border-radius: 0 6px 6px 0;">
                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #333; white-space: pre-wrap;">${safeMessage}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 40px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0; font-size: 13px; color: #666; text-align: center;">
                Diese Anfrage wurde über das Kontaktformular auf <strong>fels-coach.de</strong> gesendet.<br>
                Klicke auf "Antworten" um direkt an <strong>${safeEmail}</strong> zu schreiben.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function ebookHtml(name: string) {
  const safeName = name ? escapeHtml(name) : null;

  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td style="padding: 32px 40px 24px; border-bottom: 1px solid #e5e5e5;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #1a1a1a;">Dein Coaching E-Book ist da!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 40px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333;">
                ${safeName ? `Hallo ${safeName},` : "Hallo,"}
              </p>
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #333;">
                vielen Dank für dein Interesse an meinem E-Book! Hier kannst du es direkt herunterladen:
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto 24px;">
                <tr>
                  <td style="background-color: #1a1a1a; border-radius: 6px;">
                    <a href="${EBOOK_DOWNLOAD_URL}" style="display: inline-block; padding: 14px 32px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none;">
                      E-Book herunterladen
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6; color: #666;">
                Der Download-Link ist 7 Tage gültig.
              </p>
              <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6; color: #333;">
                Ich wünsche dir viel Freude beim Lesen und hoffe, dass dir die Inhalte wertvolle Impulse geben.
              </p>
              <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6; color: #333;">
                Herzliche Grüße,<br>
                <strong>Jona Fels</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 40px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0; font-size: 13px; color: #666; text-align: center;">
                Diese E-Mail wurde automatisch versendet, weil du das E-Book auf <strong>fels-coach.de</strong> angefordert hast.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export const handler = async (event: NetlifySubmissionEvent) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY missing");
    return { statusCode: 500, body: "Missing RESEND_API_KEY" };
  }

  const resend = new Resend(apiKey);

  let parsed: SubmissionPayload;
  try {
    parsed = JSON.parse(event.body);
  } catch (err) {
    console.error("Invalid JSON payload", err);
    return { statusCode: 400, body: "Invalid payload" };
  }

  const { form_name, data } = parsed.payload;
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();

  try {
    if (form_name === "ebook") {
      if (!email) return { statusCode: 400, body: "Missing email" };

      const res = await resend.emails.send({
        from: FROM_EBOOK,
        to: [email],
        subject: "Dein Coaching E-Book ist da!",
        html: ebookHtml(name),
      });
      console.log("Ebook email response:", res);
      return { statusCode: 200, body: "Ebook email sent" };
    }

    if (form_name === "contact") {
      if (!name || !email) return { statusCode: 400, body: "Missing fields" };
      const message = (data.message || "").trim();

      const res = await resend.emails.send({
        from: FROM_CONTACT,
        to: [OWNER_EMAIL],
        replyTo: email,
        subject: `Neue Anfrage-Coaching von ${name}`,
        html: contactHtml(name, email, message),
      });
      console.log("Contact email response:", res);
      return { statusCode: 200, body: "Contact email sent" };
    }

    return { statusCode: 200, body: `Form '${form_name}' ignored` };
  } catch (err) {
    console.error("Resend error:", err);
    return { statusCode: 500, body: "Email send failed" };
  }
};
