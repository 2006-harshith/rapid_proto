import Button from "../ui/Button.jsx";
import ContactList from "./ContactList.jsx";

/**
 * Navy card: "Contact" title, company details (ContactList fields) and a "Contact us" button.
 * Sticky beside its neighbour from lg; the button is full width on phones.
 */
export default function ContactCard({ title = "Contact", fields }) {
  return (
    <aside
      data-tone="dark"
      className="rounded-2xl bg-navy-deep px-5 py-7 text-soft shadow-float sm:p-8 lg:sticky lg:top-[calc(var(--spacing-navbar)+2rem)] lg:p-10"
    >
      <h3 className="mb-5 font-title text-2xl text-white sm:mb-6">{title}</h3>
      <ContactList fields={fields} />
      <div className="mt-6 flex flex-col sm:block">
        <Button to="/contact">Contact us</Button>
      </div>
    </aside>
  );
}
