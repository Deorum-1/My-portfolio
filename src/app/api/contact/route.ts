import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.email("Enter a valid email address").max(254),
  projectType: z.string().trim().min(1, "Choose a project type").max(80),
  budget: z.string().trim().max(80).optional(),
  message: z.string().trim().min(20, "Message must be at least 20 characters").max(5000),
  website: z.string().max(200).optional(),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check your details." },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, projectType, budget, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `New portfolio enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        `Budget: ${budget || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", {
        name: error.name,
        message: error.message,
      });
      const statusCode =
        "statusCode" in error && typeof error.statusCode === "number"
          ? error.statusCode
          : 0;
      const providerMessage =
        statusCode === 401 ||
        (statusCode === 400 &&
          (error.name === "validation_error" ||
            error.message.toLowerCase().includes("api key")))
          ? "Email service credentials are invalid. Please try again later."
          : error.message === "Testing emails are only allowed to be sent to your own email address"
            ? "Email delivery is restricted until the sender domain is verified."
            : "Could not send your message. Please try again.";
      return NextResponse.json(
        { error: providerMessage },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }
}
