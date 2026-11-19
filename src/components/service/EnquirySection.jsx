import "./EnquirySection.css";
import Section from "../ui/Section.jsx";
import NumberedList from "../ui/NumberedList.jsx";
import ContactCard from "../contact/ContactCard.jsx";

/**
 * "Information to share with your enquiry": numbered checklist + sticky navy ContactCard.
 * contactFields picks ContactList rows (company, phone, email, website, facilities, address, people).
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
