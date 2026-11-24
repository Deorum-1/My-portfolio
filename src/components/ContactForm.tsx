"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Could not send your message.");
      }

      form.reset();
      setStatus("success");
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Could not send your message.");
      setStatus("error");
    }
  }

  const inputClass =
    "border-border bg-background text-foreground placeholder:text-muted mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-foreground";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <div className="absolute -left-[10000px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium" htmlFor="name">
          Name
          <input className={inputClass} id="name" name="name" required minLength={2} maxLength={80} placeholder="Your name" />
        </label>
        <label className="text-sm font-medium" htmlFor="email">
          Email
          <input className={inputClass} id="email" name="email" type="email" required maxLength={254} placeholder="you@example.com" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium" htmlFor="projectType">
          Project type
          <select className={inputClass} id="projectType" name="projectType" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Business website</option>
            <option>Animated frontend</option>
            <option>React or Next.js app</option>
            <option>Website redesign</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="text-sm font-medium" htmlFor="budget">
          Budget <span className="text-muted font-normal">(optional)</span>
          <input className={inputClass} id="budget" name="budget" maxLength={80} placeholder="Your budget range" />
        </label>
      </div>

      <label className="text-sm font-medium" htmlFor="message">
        Message
        <textarea className={`${inputClass} min-h-32 resize-y`} id="message" name="message" required minLength={20} maxLength={5000} placeholder="Tell me about your project..." />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          className="bg-foreground text-background rounded-full px-5 py-3 text-sm font-medium transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send enquiry"}
        </button>
        {status === "success" && <p className="text-sm" role="status">Thanks — your message has been sent.</p>}
        {status === "error" && <p className="text-sm text-red-600" role="alert">{error}</p>}
      </div>
    </form>
  );
}
