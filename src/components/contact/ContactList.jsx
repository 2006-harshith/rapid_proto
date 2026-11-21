import { company } from "../../data/company.js";

// Rows the list can show. Values come from data/company.js.
// "people" expands to one row per person (role · name, phone).
const ROWS = {
  company: [{ label: "Company", value: company.name }],
  phone: [{ label: "Phone", link: company.phone }],
  email: [{ label: "E-mail", link: company.email }],
  website: [{ label: "Website", link: company.website, external: true }],
  facilities: [{ label: "Facilities", value: company.facilities }],
  address: [
    { label: company.address.title, value: company.address.lines.join(" ") },
  ],
  people: company.people.map((p) => ({
    label: p.role,
    value: p.name,
    link: p.phone,
  })),
};

const TONES = {
  dark: {
    row: "border-white/14",
    label: "text-mint",
    value: "text-white",
    link: "border-white/30 hover:text-mint",
  },
  light: {
    row: "border-line",
    label: "text-muted",
    value: "text-ink",
    link: "border-line hover:text-blue",
  },
};

/**
 * Label/value list of company contact details.
 * fields  keys of ROWS, in display order
 * tone    "dark" (on navy) | "light" (on white/surface)
 * layout  "stacked" (label above value) | "inline" (label column left from sm)
 * flush   no rule/padding above the first row (when it sits level with a title)
 */
export default function ContactList({
  fields,
  tone = "dark",
  layout = "stacked",
  flush = false,
}) {
  const t = TONES[tone];
  const inline = layout === "inline";

  return (
    <dl>
      {fields.flatMap((key) =>
        ROWS[key].map((row) => (
          <div
            key={`${key}-${row.label}`}
            className={`border-t py-4 ${t.row} ${flush ? "first:border-t-0 first:pt-0" : ""} ${
              inline ? "grid gap-1 sm:grid-cols-[7rem_1fr] sm:items-baseline sm:gap-4" : ""
            }`}
          >
            <dt
              className={`font-title text-xs font-semibold tracking-[0.1em] uppercase ${t.label}`}
            >
              {row.label}
            </dt>
            <dd
              className={`text-base leading-normal ${inline ? "" : "mt-1.25"} ${t.value}`}
            >
              {row.value}
              {row.value && row.link && ", "}
              {row.link && (
                <a
                  href={row.link.href}
                  className={`border-b whitespace-nowrap transition-colors hover:border-current ${t.link}`}
                  {...(row.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {row.link.label}
                </a>
              )}
            </dd>
          </div>
        )),
      )}
    </dl>
  );
}
