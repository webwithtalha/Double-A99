import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-5 py-24">
      <div className="mx-auto w-full max-w-xl">
        <p className="text-sm font-medium text-pine">404</p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight">This page is not on the round.</h1>
        <p className="mt-4 text-base leading-7 text-muted">
          The address does not match a page on the Double A99 site.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-paper"
        >
          Back to the homepage
        </Link>
      </div>
    </div>
  );
}
