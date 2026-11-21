import Section from "../ui/Section.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";
import ContactList from "./ContactList.jsx";
import { company } from "../../data/company.js";

/**
 * Navy "Get in touch" box: title + main office address + an optional button on the left,
 * company details (ContactList fields) on the right. Values come from data/company.js.
 */
export default function ContactBanner({
  id,
  title,
  fields,
  link,
  tone = "surface",
}) {
  return (
    <Section id={id} tone={tone}>
      <div
        data-tone="dark"
        className="grid gap-8 rounded-2xl bg-navy-deep px-5 py-9 text-soft sm:p-10 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:p-14"
      >
        <div>
          <SectionHeading className="mb-6 md:mb-7">{title}</SectionHeading>
          <address className="flex flex-col text-base leading-[1.7] not-italic">
            <span className="mb-2 font-title text-xs font-semibold tracking-[0.1em] text-mint uppercase">
              {company.address.title}
            </span>
            {company.address.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          {link && (
            <div className="mt-8 flex flex-col sm:block">
              <Button to={link.to} variant="ghost">
                {link.label}
              </Button>
            </div>
          )}
        </div>
        <ContactList fields={fields} layout="inline" flush />
      </div>
    </Section>
  );
}
