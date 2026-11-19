import { home } from "../data/home.js";
import HomeHero from "../components/home/HomeHero.jsx";
import AboutIntro from "../components/home/AboutIntro.jsx";
import TechnologyCards from "../components/home/TechnologyCards.jsx";
import WhyChoose from "../components/home/WhyChoose.jsx";
import ClientLogos from "../components/home/ClientLogos.jsx";
import ContactBanner from "../components/contact/ContactBanner.jsx";

// Content lives in data/home.js; this file only sets section order + background tones.
export default function Mainpage() {
  return (
    <>
      <HomeHero {...home.hero} />
      <AboutIntro {...home.about} />
      <TechnologyCards id="technologies" tone="surface" {...home.technologies} />
      <WhyChoose {...home.why} />
      <ClientLogos {...home.clients} />
      <ContactBanner id="contact" tone="surface" {...home.contact} />
    </>
  );
}
