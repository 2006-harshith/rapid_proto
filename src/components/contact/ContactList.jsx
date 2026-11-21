import "./ContactList.css";
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

/**
 * Label/value list of company contact details.
 * fields  keys of ROWS, in display order
 * tone    "dark" (on navy) | "light" (on white/surface)
 * layout  "stacked" (label above value) | "inline" (label column left)
 */
export default function ContactList({
  fields,
  tone = "dark",
  layout = "stacked",
}) {
  return (
    <dl
      className={`contact-list contact-list--${tone} contact-list--${layout}`}
    >
      {fields.flatMap((key) =>
        ROWS[key].map((row) => (
          <div key={`${key}-${row.label}`} className="contact-list__row">
            <dt>{row.label}</dt>
            <dd>
              {row.value}
              {row.value && row.link && ", "}
              {row.link && (
                <a
                  href={row.link.href}
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
