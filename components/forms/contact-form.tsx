"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState, useTransition } from "react";
import { siteConfig } from "@/lib/portfolio-data";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  function updateField(field: keyof typeof initialState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(() => {
      const params = new URLSearchParams({
        subject: `[Portfolio] ${form.subject}`,
        body: `Name: ${form.name}\r\nEmail: ${form.email}\r\n\r\n${form.message}`,
      });

      window.location.href = `mailto:${siteConfig.email}?${params.toString()}`;
      setSubmitted(true);
      setForm(initialState);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-5 md:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[var(--heading)]">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="focus-ring rounded-md border border-[var(--line)] bg-white px-3 py-3 text-sm font-medium text-[var(--heading)] placeholder:text-[var(--muted)]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--heading)]">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="focus-ring rounded-md border border-[var(--line)] bg-white px-3 py-3 text-sm font-medium text-[var(--heading)] placeholder:text-[var(--muted)]"
            placeholder="name@email.com"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-[var(--heading)]">
        Subject
        <input
          required
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          className="focus-ring rounded-md border border-[var(--line)] bg-white px-3 py-3 text-sm font-medium text-[var(--heading)] placeholder:text-[var(--muted)]"
          placeholder="Opportunity or collaboration"
        />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-[var(--heading)]">
        Message
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="focus-ring rounded-md border border-[var(--line)] bg-white px-3 py-3 text-sm font-medium text-[var(--heading)] placeholder:text-[var(--muted)]"
          placeholder="Tell me about the role, team, or project."
        />
      </label>
      <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-7 text-[var(--muted)]">
          The form opens your email client with a prepared draft.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[var(--heading)] px-4 py-2.5 text-sm font-bold text-white hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {isPending ? "Preparing" : "Send email"}
        </button>
      </div>
      {submitted ? (
        <p className="mt-4 rounded-md border border-[rgba(79,143,123,0.25)] bg-[rgba(79,143,123,0.08)] px-3 py-3 text-sm font-semibold text-[var(--success)]">
          Email draft prepared.
        </p>
      ) : null}
    </form>
  );
}
