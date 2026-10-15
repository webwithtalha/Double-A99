export const towns = [
  "Ipswich",
  "Bury St Edmunds",
  "Stowmarket",
  "Clacton-on-Sea",
  "Sudbury",
  "Earsham",
  "Diss",
  "Norwich",
  "Newmarket",
  "Haverhill",
] as const;

export type Town = (typeof towns)[number];

export const engagementOptions = [
  {
    value: "student",
    title: "Student",
    detail:
      "Employed by Double A99 and paid through payroll. The per-parcel rate is the same. Hours stay within your visa, typically up to 20 hours a week during term time.",
  },
  {
    value: "self-employed",
    title: "Self-employed",
    detail:
      "For UK citizens, people with indefinite leave to remain, and anyone else with full right to work who can work on a self-employed basis.",
  },
] as const;

export const licenceOptions = [
  { value: "uk", title: "Full UK licence" },
  { value: "international", title: "International licence" },
] as const;

export const vehicleOptions = [
  {
    value: "own",
    title: "I have my own vehicle",
    detail: "You cover the fuel.",
  },
  {
    value: "company-van",
    title: "I need a company van",
    detail: "We provide a van on some larger rounds.",
  },
] as const;

export function isTown(value: string): value is Town {
  return towns.some((town) => town === value);
}
