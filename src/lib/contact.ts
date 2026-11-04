// Sending a project enquiry from the contact form.

export interface Enquiry {
  name: string;
  email: string;
  need: string;
  budget: string;
  message: string;
}

export interface SendResult {
  ok: boolean;
  method: 'email-app'; // later: 'api'
}

// Builds a mailto: link with the subject and body filled in from the form.
export function enquiryMailto(to: string, enquiry: Enquiry): string {
  const subject = `Project enquiry from ${enquiry.name}: ${enquiry.need}`;
  const body = [
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `What I need: ${enquiry.need}`,
    `Budget: ${enquiry.budget}`,
    '',
    enquiry.message,
  ].join('\n');
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/*
  The one place an enquiry is sent from. For now it opens the visitor's email app with the
  message ready to send. When the FastAPI endpoint exists, replace the body of this function
  with a fetch() POST to it; the contact page calls sendEnquiry() and will not need to change.
*/
export async function sendEnquiry(enquiry: Enquiry, options: { to: string }): Promise<SendResult> {
  window.location.href = enquiryMailto(options.to, enquiry);
  return { ok: true, method: 'email-app' };
}
