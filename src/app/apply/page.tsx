import type { Metadata } from "next";
import { ApplyForm } from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Apply to drive",
  description:
    "Apply to cover parcel rounds with Double A99. You need a driving licence and the right to work in the UK. Pay is 80p–£1 per parcel.",
};

const reminders = [
  "Full UK licence or international licence",
  "Right to work in the UK",
  "Students are paid through payroll",
  "Other drivers are self-employed",
  "Own vehicle and fuel, unless the round uses our van",
];

export default function ApplyPage() {
  return (
    <article className="px-5 py-12 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <p className="text-sm font-medium text-pine">Driver application</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight md:text-6xl">
            Apply to cover a round.
          </h1>
          <p className="mt-5 text-base leading-7 text-muted">
            Tell us who you are, which town you can cover, and whether you have
            your own vehicle. The rate is 80p–£1 per parcel for everyone.
          </p>
          <ul className="mt-8 space-y-3 text-sm leading-6">
            {reminders.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ApplyForm />
      </div>
    </article>
  );
}
