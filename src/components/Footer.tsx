import Link from "next/link";
import { towns } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm font-semibold">Double A99</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            We supply drivers for contracted parcel rounds across Suffolk,
            Norfolk and north Essex, including rounds we clear for Evri.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Towns</p>
          <p className="mt-3 text-sm leading-6 text-muted">{towns.join(" · ")}</p>
          <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
            <Link href="/drive">Drive with us</Link>
            <Link href="/apply">Apply</Link>
            <Link href="/businesses">Round cover</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
