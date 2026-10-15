import Link from "next/link";
import { TownList } from "@/components/TownList";

const facts = [
  {
    title: "Students on payroll",
    body: "Students are employed by Double A99 and paid through payroll, at the same per-parcel rate.",
  },
  {
    title: "Self-employed drivers",
    body: "UK citizens, people with indefinite leave to remain, and others with full right to work can cover rounds as self-employed drivers.",
  },
  {
    title: "Insurance while you deliver",
    body: "Insurance is covered while you are out delivering the parcels.",
  },
];

const steps = [
  {
    number: "01",
    title: "Check how you would be paid",
    body: "Students go on payroll. Everyone else with full right to work is self-employed. The parcel rate is the same.",
  },
  {
    number: "02",
    title: "Tell us where you can drive",
    body: "Apply with your licence, the town you can cover, and whether you have your own vehicle.",
  },
  {
    number: "03",
    title: "Cover a round",
    body: "We match you to a round. You are paid per parcel, and insurance is covered while you deliver.",
  },
];

export default function Home() {
  return (
    <>
      <section className="px-5 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto grid w-full max-w-6xl items-end gap-10 lg:grid-cols-[1.35fr_0.75fr]">
          <div>
            <p className="text-sm font-medium text-pine">
              Driver supply across Suffolk, Norfolk and north Essex
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-[2.7rem] leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Cover the round.
              <span className="mt-1 block italic text-pine">Get paid per parcel.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Double A99 supplies drivers for contracted parcel rounds, including
              rounds we clear for Evri. You are paid 80p–£1 per parcel. The rate
              depends on the round and the area, and it is the same for every driver.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/apply"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-paper"
              >
                Apply to drive
              </Link>
              <Link
                href="/businesses"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-card px-5 text-sm font-medium"
              >
                Need round cover
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl bg-ink p-6 text-paper sm:p-8">
            <p className="text-sm text-amber">Same rate for everyone</p>
            <p className="mt-3 font-serif text-6xl tracking-tight text-amber sm:text-7xl">
              80p–£1
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Per parcel. The exact rate depends on the round and the area.
            </p>
            <ul className="mt-6 space-y-3 border-t border-white/15 pt-6 text-sm leading-6">
              <li>Full UK licence or international licence</li>
              <li>Right to work in the UK</li>
              <li>Own vehicle and fuel, or our van on larger rounds</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-5 pb-16 md:pb-24">
        <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
          {facts.map((fact) => (
            <article key={fact.title} className="rounded-3xl border border-line bg-card p-6">
              <h2 className="font-serif text-2xl tracking-tight">{fact.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{fact.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 md:pb-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Towns we cover
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted">
              If you can drive in these towns, we can put you on a round.
            </p>
            <Link
              href="/drive"
              className="mt-6 inline-flex min-h-12 items-center text-sm font-medium underline decoration-line underline-offset-4"
            >
              How driving with us works
            </Link>
          </div>
          <TownList />
        </div>
      </section>

      <section className="px-5 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            From application to round
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="rounded-3xl border border-line p-6">
                <p className="font-serif text-sm text-muted">{step.number}</p>
                <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-16 md:pb-24">
        <div className="mx-auto grid w-full max-w-6xl gap-6 rounded-3xl bg-pine px-6 py-10 text-paper md:grid-cols-2 md:px-10">
          <div>
            <h2 className="font-serif text-4xl tracking-tight">Ready to drive?</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-stone-200">
              Bring a full UK licence or an international licence, and the right
              to work in the UK.
            </p>
            <Link
              href="/apply"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-amber px-5 text-sm font-medium text-ink"
            >
              Apply to drive
            </Link>
          </div>
          <div className="md:border-l md:border-white/15 md:pl-10">
            <h2 className="font-serif text-4xl tracking-tight">Need drivers?</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-stone-200">
              Companies can ask Double A99 to cover parcel rounds in these towns.
            </p>
            <Link
              href="/businesses"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-medium"
            >
              Request round cover
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
