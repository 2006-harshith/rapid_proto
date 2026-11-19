import "./ContactBanner.css";
import Section from "../ui/Section.jsx";
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
      <div className="contact-banner">
        <div>
          <h2 className="section-heading contact-banner__title">{title}</h2>
          <address className="contact-banner__address">
            <span className="contact-banner__office">
              {company.address.title}
            </span>
            {company.address.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          {link && (
            <div className="contact-banner__action">
              <Button to={link.to} variant="ghost">
                {link.label}
              </Button>
            </div>
          )}
        </div>
        <ContactList fields={fields} layout="inline" />
      </div>
    </Section>
  );
}
