import { towns } from "@/lib/site";

export function TownList() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
      {towns.map((town, index) => (
        <li
          key={town}
          className="flex items-baseline gap-4 bg-card px-5 py-4"
        >
          <span className="w-6 font-serif text-sm text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base">{town}</span>
        </li>
      ))}
    </ol>
  );
}
