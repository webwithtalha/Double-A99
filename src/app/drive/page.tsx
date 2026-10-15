import type { Metadata } from "next";
import Link from "next/link";
import { TownList } from "@/components/TownList";
import { engagementOptions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Drive with us",
  description:
    "Drive contracted parcel rounds with Double A99. Students are paid through payroll. Other drivers with full right to work are self-employed. The rate is 80p–£1 per parcel.",
};

const requirements = [
  {
    title: "Licence",
    body: "A full UK driving licence or a valid international licence.",
  },
  {
    title: "Right to work",
    body: "You need the right to work in the UK. A passport on its own is not enough.",
  },
  {
    title: "Vehicle",
    body: "Bring your own vehicle and cover the fuel. On some larger rounds we provide a van.",
  },
  {
    title: "Insurance",
    body: "Insurance is covered while you are delivering the parcels.",
  },
];

export default function DrivePage() {
  return (
    <article className="px-5 py-12 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-medium text-pine">Drive with Double A99</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-tight md:text-6xl">
          Two ways onto a round. One parcel rate.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          You clear contracted parcel drops in the towns below. Pay is 80p–£1
          per parcel, depending on the round and the area. Every driver is on
          that same rate.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {engagementOptions.map((option) => (
            <section
              key={option.value}
              id={option.value}
              className="scroll-mt-24 rounded-3xl border border-line bg-card p-6 sm:p-8"
            >
              <h2 className="font-serif text-3xl tracking-tight">{option.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{option.detail}</p>
            </section>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-4xl tracking-tight">What you need</h2>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {requirements.map((item) => (
              <div key={item.title} className="rounded-3xl border border-line p-6">
                <dt className="text-sm font-medium">{item.title}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted">{item.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <h2 className="font-serif text-4xl tracking-tight">Where the rounds are</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Apply for the town you can cover. If you can do more than one,
              say so on the application.
            </p>
            <Link
              href="/apply"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-paper"
            >
              Apply to drive
            </Link>
          </div>
          <TownList />
        </section>
      </div>
    </article>
  );
}
