"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/drive", label: "Drive" },
  { href: "/businesses", label: "Businesses" },
];

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-2.5 rounded-lg">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-[11px] font-semibold tracking-wide text-amber">
            A99
          </span>
          <span className="text-sm font-semibold tracking-tight">Double A99</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm ${pathname === link.href ? "font-semibold" : "text-muted"}`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-paper"
            aria-current={pathname === "/apply" ? "page" : undefined}
          >
            Apply
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line px-5 py-3 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-12 items-center text-base"
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <Link
                href="/apply"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-4 text-sm font-medium text-paper"
              >
                Apply to drive
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
