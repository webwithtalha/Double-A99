export type FieldErrors = Record<string, string>;

export type FormState = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: FieldErrors;
  name?: string;
};

export const idleFormState: FormState = { status: "idle" };

export function readText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export function validateContact(
  formData: FormData,
  nameLabel: string,
): { name: string; email: string; phone: string; errors: FieldErrors } {
  const errors: FieldErrors = {};
  const name = readText(formData, "name");
  const email = readText(formData, "email");
  const phone = readText(formData, "phone");

  if (name.length < 2 || name.length > 80) {
    errors.name = `Enter your ${nameLabel}.`;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    errors.email = "Enter a valid email address.";
  }

  const digits = phone.replace(/[^\d]/g, "");
  if (digits.length < 10 || digits.length > 15 || phone.length > 20) {
    errors.phone = "Enter a phone number we can reach you on.";
  }

  return { name, email, phone, errors };
}
