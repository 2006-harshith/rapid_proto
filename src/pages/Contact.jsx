import { useState } from "react";
import "./Contact.css";
import { company } from "../data/company.js";
import { contact } from "../data/contact.js";
import ContactRow from "../components/contact/ContactRow.jsx";
import ContactList from "../components/contact/ContactList.jsx";
import MapCard from "../components/contact/MapCard.jsx";

// Content lives in data/contact.js + data/company.js; this file only lays out the page.
export default function Contact() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <p className="contact-hero__eyebrow">{contact.hero.eyebrow}</p>
          <h1 className="contact-hero__title">{contact.hero.title}</h1>
          <p className="contact-hero__lead">{contact.hero.lead}</p>
        </div>
      </section>

      <section className="contact-body">
        <div
          className={`container contact-grid${expanded ? " contact-grid--expanded" : ""}`}
        >
          <div>
            <h2 className="section-heading contact-grid__title">
              {contact.detailsTitle}
            </h2>
            <ul className="contact-grid__rows">
              {contact.rows.map((row) => (
                <ContactRow key={row.icon} {...row} />
              ))}
            </ul>

            <div className="contact-grid__people">
              <h3 className="contact-grid__people-title">
                {contact.people.title}
              </h3>
              <ContactList
                fields={contact.people.fields}
                tone="light"
                layout="inline"
              />
            </div>
          </div>

          <div className="contact-grid__map">
            <MapCard
              {...contact.map}
              map={company.map}
              expanded={expanded}
              onToggle={() => setExpanded((v) => !v)}
            />
          </div>
        </div>
      </section>
    </>
  );
}
