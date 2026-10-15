"use server";

import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import {
  engagementOptions,
  isTown,
  licenceOptions,
  vehicleOptions,
} from "@/lib/site";
import {
  type FormState,
  readText,
  validateContact,
} from "@/lib/forms";

async function saveEnquiry(record: Record<string, unknown>) {
  const directory = path.join(process.cwd(), "data");
  await mkdir(directory, { recursive: true });
  await appendFile(
    path.join(directory, "enquiries.jsonl"),
    `${JSON.stringify({ ...record, receivedAt: new Date().toISOString() })}\n`,
    "utf8",
  );
}

function allowed(
  value: string,
  options: readonly { value: string }[],
) {
  return options.some((option) => option.value === value);
}

export async function submitApplication(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (readText(formData, "website")) {
    return { status: "success", name: "there" };
  }

  const { name, email, phone, errors } = validateContact(formData, "full name");
  const town = readText(formData, "town");
  const engagement = readText(formData, "engagement");
  const licence = readText(formData, "licence");
  const vehicle = readText(formData, "vehicle");
  const rightToWork = formData.get("rightToWork") === "yes";
  const note = readText(formData, "note");

  if (!isTown(town)) errors.town = "Choose a town you can cover.";
  if (!allowed(engagement, engagementOptions)) {
    errors.engagement = "Choose how you would be engaged.";
  }
  if (!allowed(licence, licenceOptions)) {
    errors.licence = "Choose the licence you hold.";
  }
  if (!allowed(vehicle, vehicleOptions)) {
    errors.vehicle = "Tell us about your vehicle.";
  }
  if (!rightToWork) {
    errors.rightToWork = "Confirm that you have the right to work in the UK.";
  }
  if (note.length > 600) errors.note = "Keep the note under 600 characters.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and send the application again.",
      errors,
    };
  }

  try {
    await saveEnquiry({
      type: "driver",
      name,
      email,
      phone,
      town,
      engagement,
      licence,
      vehicle,
      rightToWork,
      note,
    });
  } catch {
    return {
      status: "error",
      message: "We could not save your application. Please try again.",
      errors: {},
    };
  }

  return { status: "success", name };
}

export async function submitBusinessEnquiry(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (readText(formData, "website")) {
    return { status: "success", name: "there" };
  }

  const { name, email, phone, errors } = validateContact(
    formData,
    "contact name",
  );
  const company = readText(formData, "company");
  const selectedTowns = formData
    .getAll("towns")
    .map((value) => String(value))
    .filter(isTown);
  const note = readText(formData, "note");

  if (company.length < 2 || company.length > 120) {
    errors.company = "Enter the company name.";
  }
  if (selectedTowns.length === 0) {
    errors.towns = "Choose at least one town.";
  }
  if (note.length > 600) errors.note = "Keep the note under 600 characters.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and send the enquiry again.",
      errors,
    };
  }

  try {
    await saveEnquiry({
      type: "business",
      company,
      name,
      email,
      phone,
      towns: selectedTowns,
      note,
    });
  } catch {
    return {
      status: "error",
      message: "We could not save your enquiry. Please try again.",
      errors: {},
    };
  }

  return { status: "success", name };
}
