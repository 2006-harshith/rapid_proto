import Section from "../ui/Section.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
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
      <div className="grid items-start gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div>
          <SectionHeading className="mb-8 md:mb-12">{title}</SectionHeading>
          <NumberedList items={checklist} />
        </div>
        <ContactCard fields={contactFields} />
      </div>
    </Section>
  );
}
