import { Resend } from "resend";

/**
 * Netlify Function – wird automatisch durch das Event "submission-created"
 * getriggert, sobald ein Netlify-Forms-Submission eingeht.
 *
 * Erwartete Forms:
 *  - name="contact"  → sendet Benachrichtigung an info@fels-coach.de
 *  - name="ebook"    → sendet PDF-Download-Link an den Nutzer
 */

const OWNER_EMAIL = "info@fels-coach.de";
const FROM_EMAIL = "Jona Fels <noreply@fels-coach.de>";
const SITE_URL = "https://www.fels-coach.de";
const EBOOK_URL = `${SITE_URL}/ebook.pdf`;

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

      await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "Dein E-Book: Der Weg zum Ganzsein",
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2A2A2A; line-height: 1.6;">
            <h1 style="color: #2F4F4F; font-size: 22px;">Schön, dass du da bist${name ? `, ${name}` : ""}.</h1>
            <p>Hier ist dein kostenfreies E-Book <strong>„Der Weg zum Ganzsein“</strong>:</p>
            <p style="margin: 28px 0;">
              <a href="${EBOOK_URL}"
                 style="background: #2F4F4F; color: #F9F7F2; padding: 14px 24px; border-radius: 6px; text-decoration: none; display: inline-block;">
                E-Book herunterladen (PDF)
              </a>
            </p>
            <p style="font-size: 14px; color: #666;">
              Falls der Button nicht funktioniert, kopiere diesen Link:<br />
              <a href="${EBOOK_URL}" style="color: #2F4F4F;">${EBOOK_URL}</a>
            </p>
            <hr style="border: none; border-top: 1px solid #E5E2DA; margin: 32px 0;" />
            <p style="font-size: 14px;">
              Herzlich,<br />
              Jona Fels<br />
              <a href="${SITE_URL}" style="color: #2F4F4F;">fels-coach.de</a>
            </p>
          </div>
        `,
      });

      return { statusCode: 200, body: "Ebook email sent" };
    }

    if (form_name === "contact") {
      const message = (data.message || "").trim();

      await resend.emails.send({
        from: FROM_EMAIL,
        to: [OWNER_EMAIL],
        replyTo: email || undefined,
        subject: `Neue Kontaktanfrage von ${name || "Unbekannt"}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 560px; color: #2A2A2A; line-height: 1.6;">
            <h2 style="color: #2F4F4F;">Neue Kontaktanfrage</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
            <p><strong>Nachricht:</strong></p>
            <div style="background: #F9F7F2; padding: 16px; border-left: 3px solid #2F4F4F; white-space: pre-wrap;">
              ${escapeHtml(message)}
            </div>
          </div>
        `,
      });

      return { statusCode: 200, body: "Contact email sent" };
    }

    return { statusCode: 200, body: `Form '${form_name}' ignored` };
  } catch (err) {
    console.error("Resend error:", err);
    return { statusCode: 500, body: "Email send failed" };
  }
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
