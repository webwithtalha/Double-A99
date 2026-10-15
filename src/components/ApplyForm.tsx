"use client";

import { useActionState } from "react";
import { submitApplication } from "@/app/actions";
import { idleFormState } from "@/lib/forms";
import {
  engagementOptions,
  licenceOptions,
  towns,
  vehicleOptions,
} from "@/lib/site";

const inputClass =
  "h-12 w-full rounded-xl border border-line bg-card px-3 text-base text-ink placeholder:text-stone-400";

export function ApplyForm() {
  const [state, action, pending] = useActionState(
    submitApplication,
    idleFormState,
  );
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-line bg-card p-6 sm:p-8">
        <p className="text-sm font-medium text-pine">Application received</p>
        <h2 className="mt-3 font-serif text-4xl tracking-tight">
          Thanks, {state.name}.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-7 text-muted">
          We have your details and will be in touch about rounds you can cover.
          The rate is 80p–£1 per parcel, the same for every driver.
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
        <Field label="Full name" error={errors.name} name="name">
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

        <Field label="Town you can cover" error={errors.town} name="town">
          <select
            id="town"
            name="town"
            defaultValue=""
            className={inputClass}
            aria-invalid={Boolean(errors.town)}
            aria-describedby={errors.town ? "town-error" : undefined}
          >
            <option value="" disabled>
              Choose a town
            </option>
            {towns.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>
        </Field>

        <ChoiceGroup
          legend="How you would be engaged"
          name="engagement"
          error={errors.engagement}
          options={engagementOptions}
        />
        <ChoiceGroup
          legend="Licence"
          name="licence"
          error={errors.licence}
          options={licenceOptions}
        />
        <ChoiceGroup
          legend="Vehicle"
          name="vehicle"
          error={errors.vehicle}
          options={vehicleOptions}
        />

        <div>
          <label className="flex min-h-12 items-start gap-3 rounded-2xl border border-line px-4 py-3">
            <input
              type="checkbox"
              name="rightToWork"
              value="yes"
              className="mt-1 h-4 w-4"
              aria-invalid={Boolean(errors.rightToWork)}
              aria-describedby={errors.rightToWork ? "rightToWork-error" : undefined}
            />
            <span className="text-sm leading-6">
              I have the right to work in the UK.
            </span>
          </label>
          {errors.rightToWork ? (
            <p id="rightToWork-error" className="mt-2 text-sm text-danger">
              {errors.rightToWork}
            </p>
          ) : null}
        </div>

        <Field label="Anything we should know" error={errors.note} name="note">
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
        {pending ? "Sending…" : "Send application"}
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

function ChoiceGroup({
  legend,
  name,
  error,
  options,
}: {
  legend: string;
  name: string;
  error?: string;
  options: readonly { value: string; title: string; detail?: string }[];
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium">{legend}</legend>
      <div className="grid gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex min-h-12 cursor-pointer items-start gap-3 rounded-2xl border border-line px-4 py-3 has-[:checked]:border-ink"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              className="mt-1 h-4 w-4"
            />
            <span>
              <span className="block text-sm font-medium">{option.title}</span>
              {option.detail ? (
                <span className="mt-1 block text-sm leading-6 text-muted">
                  {option.detail}
                </span>
              ) : null}
            </span>
          </label>
        ))}
      </div>
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
