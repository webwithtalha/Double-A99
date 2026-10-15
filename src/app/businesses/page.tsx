import type { Metadata } from "next";
import { BusinessForm } from "@/components/BusinessForm";
import { TownList } from "@/components/TownList";

export const metadata: Metadata = {
  title: "Round cover for companies",
  description:
    "Double A99 supplies drivers to clear contracted parcel rounds in Suffolk, Norfolk and north Essex, including work for Evri.",
};

const points = [
  {
    title: "Drivers for your rounds",
    body: "We arrange drivers to clear drops on contracted parcel rounds.",
  },
  {
    title: "Licence and right to work",
    body: "Drivers hold a full UK licence or an international licence, and have the right to work in the UK.",
  },
  {
    title: "Vans on larger rounds",
    body: "Drivers usually use their own vehicle. On some larger rounds we provide a van.",
  },
  {
    title: "Insurance while they deliver",
    body: "Insurance is covered while the driver is delivering the parcels.",
  },
];

export default function BusinessesPage() {
  return (
    <article className="px-5 py-12 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-medium text-pine">For companies</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-tight md:text-6xl">
          Drivers when you need a round cleared.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Double A99 supplies drivers for contracted parcel rounds, including
          rounds we clear for Evri. Tell us the towns you need covered.
        </p>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="rounded-3xl border border-line bg-card p-6">
              <dt className="font-medium">{point.title}</dt>
              <dd className="mt-2 text-sm leading-6 text-muted">{point.body}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-16">
          <h2 className="font-serif text-4xl tracking-tight">Where we can help</h2>
          <div className="mt-8">
            <TownList />
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <h2 className="font-serif text-4xl tracking-tight">Request cover</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Send the towns and a short note about the rounds. We will come
              back to you about driver availability.
            </p>
          </div>
          <BusinessForm />
        </section>
      </div>
    </article>
  );
}
