import "./EnquirySection.css";
import Section from "../ui/Section.jsx";
import Button from "../ui/Button.jsx";
import NumberedList from "../ui/NumberedList.jsx";
import { company } from "../../data/company.js";

// Rows the contact card can show, in display order. Values come from data/company.js.
const CONTACT_ROWS = {
  company: { label: "Company", value: company.name },
  phone: { label: "Telephone", link: company.phone },
  email: { label: "E-mail", link: company.email },
  website: { label: "Website", link: company.website },
  facilities: { label: "Facilities", value: company.facilities },
};

function ContactCard({ fields }) {
  return (
    <aside className="contact-card">
      <h3 className="contact-card__title">Contact</h3>
      <dl className="contact-card__list">
        {fields.map((key) => {
          const row = CONTACT_ROWS[key];
          return (
            <div key={key}>
              <dt>{row.label}</dt>
              <dd>
                {row.link ? (
                  <a href={row.link.href}>{row.link.label}</a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          );
        })}
      </dl>
      <Button to="/contact">Contact us</Button>
    </aside>
  );
}

/**
 * "Information to share with your enquiry": numbered checklist + sticky navy contact card.
 * contactFields picks rows from CONTACT_ROWS (company, phone, email, website, facilities).
 */
export default function EnquirySection({
  title = "Information to share with your enquiry",
  checklist,
  contactFields = ["company", "phone", "email", "facilities"],
  tone,
}) {
  return (
    <Section tone={tone}>
      <div className="enquiry">
        <div>
          <h2 className="section-heading">{title}</h2>
          <NumberedList items={checklist} />
        </div>
        <ContactCard fields={contactFields} />
      </div>
    </Section>
  );
}
