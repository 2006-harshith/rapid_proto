import "./ContactCard.css";
import Button from "../ui/Button.jsx";
import ContactList from "./ContactList.jsx";

/** Sticky navy card: "Contact" title, company details (ContactList fields) and a "Contact us" button. */
export default function ContactCard({ title = "Contact", fields }) {
  return (
    <aside className="contact-card">
      <h3 className="contact-card__title">{title}</h3>
      <ContactList fields={fields} />
      <div className="contact-card__action">
        <Button to="/contact">Contact us</Button>
      </div>
    </aside>
  );
}
