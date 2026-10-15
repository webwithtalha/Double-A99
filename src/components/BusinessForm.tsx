"use client";

import { useActionState } from "react";
import { submitBusinessEnquiry } from "@/app/actions";
import { idleFormState } from "@/lib/forms";
import { towns } from "@/lib/site";

const inputClass =
  "h-12 w-full rounded-xl border border-line bg-card px-3 text-base text-ink placeholder:text-stone-400";

export function BusinessForm() {
  const [state, action, pending] = useActionState(
    submitBusinessEnquiry,
    idleFormState,
  );
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-line bg-card p-6 sm:p-8">
        <p className="text-sm font-medium text-pine">Enquiry received</p>
        <h2 className="mt-3 font-serif text-4xl tracking-tight">
          Thanks, {state.name}.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-7 text-muted">
          We have your request and will be in touch about driver cover in the
          towns you selected.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="rounded-3xl border border-line bg-card p-5 sm:p-8" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.message ? (
        <p role="alert" className="mb-6 rounded-2xl bg-paper px-4 py-3 text-sm text-danger">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5">
        <Field label="Company" error={errors.company} name="company">
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={inputClass}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
        </Field>
        <Field label="Your name" error={errors.name} name="name">
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" error={errors.email} name="email">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </Field>
          <Field label="Phone" error={errors.phone} name="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
          </Field>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-medium">Towns you need covered</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {towns.map((town) => (
              <label
                key={town}
                className="flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border border-line px-4 py-3 has-[:checked]:border-ink"
              >
                <input type="checkbox" name="towns" value={town} className="h-4 w-4" />
                <span className="text-sm">{town}</span>
              </label>
            ))}
          </div>
          {errors.towns ? (
            <p id="towns-error" className="mt-2 text-sm text-danger">
              {errors.towns}
            </p>
          ) : null}
        </fieldset>

        <Field label="The rounds you need covered" error={errors.note} name="note">
          <textarea
            id="note"
            name="note"
            rows={4}
            className="w-full rounded-xl border border-line bg-card px-3 py-3 text-base text-ink"
            aria-invalid={Boolean(errors.note)}
            aria-describedby={errors.note ? "note-error" : undefined}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-paper disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Request cover"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
