import axios from "axios";
import type { EmailAdapter, SendEmailOptions } from "payload";

const {
  BREVO_EMAILS_ACTIVE, BREVO_API_KEY, BREVO_SENDER_NAME, BREVO_SENDER_EMAIL
} = process.env;

const brevoAdapter = (): EmailAdapter => {
  const adapter = () => ({
    name: "Brevo",
    defaultFromName: BREVO_SENDER_NAME as string,
    defaultFromAddress: BREVO_SENDER_EMAIL as string,
    sendEmail
  })

  return adapter;
};

const sendEmail = async (message: SendEmailOptions): Promise<unknown> => {
  if (!BREVO_EMAILS_ACTIVE) {
    console.warn("Email sending is disabled.");
    return;
  }

  try {
    const response = await axios({
      method: "POST",
      url: "https://api.brevo.com/v3/smtp/email",
      headers: {
        "api-key": BREVO_API_KEY as string,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      data: {
        sender: {
          name: BREVO_SENDER_NAME as string,
          email: BREVO_SENDER_EMAIL as string,
        },
        to: [{
          email: message.to
        }],
        subject: message.subject,
        htmlContent: message.html
      }
    });

    return response.data
  } catch (err) {
    console.error(`Error while sending email with Brevo -> ${err}`);
  }
}

export default brevoAdapter;
