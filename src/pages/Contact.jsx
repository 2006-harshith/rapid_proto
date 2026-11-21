import { useState } from "react";
import { company } from "../data/company.js";
import { contact } from "../data/contact.js";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import ContactRow from "../components/contact/ContactRow.jsx";
import ContactList from "../components/contact/ContactList.jsx";
import MapCard from "../components/contact/MapCard.jsx";

// Content lives in data/contact.js + data/company.js; this file only lays out the page.
export default function Contact() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <section className="hero-glow relative overflow-hidden bg-navy-deep py-14 text-white [--glow-right:-8%] [--glow-size:45%] md:pt-20 md:pb-18">
        <div className="site-container relative">
          <p className="font-title text-label font-semibold tracking-[0.08em] text-mint uppercase">
            {contact.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-160 font-title text-[clamp(2rem,4.5vw+0.5rem,3.5rem)] leading-[1.1] font-bold tracking-[-0.02em] text-balance">
            {contact.hero.title}
          </h1>
          <p className="mt-4 max-w-136 text-[clamp(1.0625rem,1.6vw,1.25rem)] leading-[1.6] text-soft sm:mt-5">
            {contact.hero.lead}
          </p>
        </div>
      </section>

      <section className="bg-white pt-12 pb-16 md:pt-20 md:pb-24">
        {/* expanded map: full width on top, details below */}
        <div
          className={`site-container grid items-start gap-10 lg:gap-14 ${expanded ? "" : "lg:grid-cols-[5fr_7fr]"}`}
        >
          <div>
            <SectionHeading className="mb-6 md:mb-8">
              {contact.detailsTitle}
            </SectionHeading>
            <ul className="flex flex-col gap-1">
              {contact.rows.map((row) => (
                <ContactRow key={row.icon} {...row} />
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-line bg-surface px-5 pt-5 pb-2 sm:px-6 sm:pt-6">
              <h3 className="mb-2 font-title text-md font-semibold text-ink">
                {contact.people.title}
              </h3>
              <ContactList
                fields={contact.people.fields}
                tone="light"
                layout="inline"
              />
            </div>
          </div>

          <div
            className={
              expanded
                ? "order-first"
                : "lg:sticky lg:top-[calc(var(--spacing-navbar)+1.5rem)]"
            }
          >
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
