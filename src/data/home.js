// Home page content — source: brochures/Brochure.docx
// Rendered by src/pages/Mainpage.jsx. Contact details come from company.js,
// technology cards (code, name, route, photo, summary) from the service catalogue (services/index.js).
import { services } from "./services/index.js";
import heroImage from "../assets/images/home/hero.jpg";
import batteryImg from "../assets/images/home/battery_cell_holder_2.png";
import piaggioLogo from "../assets/images/clients/piaggio.png";
import bajajLogo from "../assets/images/clients/bajaj.png";
import pricolLogo from "../assets/images/clients/pricol.png";
import lmwLogo from "../assets/images/clients/lmw.png";
import tvsLogo from "../assets/images/clients/tvs.png";
import boschLogo from "../assets/images/clients/bosch.png";
import ultraLogo from "../assets/images/clients/ultra.png";

export const home = {
  hero: {
    title: "Rapid Proto Tech",
    lead: "In-House 3D Printing & Rapid Prototyping Solutions",
    image: heroImage,
    actions: [
      { label: "Get in Touch", href: "#contact" },
      { label: "Our Technologies", href: "#technologies", variant: "ghost" },
    ],
  },
  about: {
    eyebrow: "About Us",
    title: "Precision, reliability and speed since 2010",
    text: "Rapid Proto Tech (RPT) is a lean, in-house 3D printing enterprise supporting product development teams across diverse industries. Since 2010, our Coimbatore and Pune facilities have delivered precision, reliability, and speed to every engagement — enabling clients to move confidently from concept to functional design without the delays of outsourced production.",
    facts: [
      { label: "Established", value: "2010" },
      { label: "Facilities", value: "Coimbatore & Pune" },
      {
        label: "Technologies",
        value: services.map((s) => s.code).join(", "),
      },
    ],
  },
  technologies: {
    title: "Our Technologies & Capabilities",
    items: services.map((s) => ({
      code: s.code,
      name: s.name,
      to: s.route,
      image: s.image,
      text: s.summary,
    })),
  },
  why: {
    title: "Why Choose Rapid Proto Tech",
    items: [
      {
        title: "Responsive delivery",
        text: "In-house equipment eliminates the delays typical of outsourced production.",
      },
      {
        title: "Consistent standards",
        text: "Every component undergoes dimensional inspection before it reaches the customer.",
      },
      {
        title: "Broader reach",
        text: "Twin operations in Coimbatore and Pune extend capacity across regions.",
      },
    ],
    image: batteryImg,
    imageAlt: "MJF-printed battery cell holder assembly",
    caption: "MJF-printed battery cell holder assembly",
  },
  clients: {
    label: "Trusted by teams at",
    items: [
      { name: "Piaggio", logo: piaggioLogo },
      { name: "Bajaj", logo: bajajLogo },
      { name: "TVS", logo: tvsLogo },
      { name: "Bosch", logo: boschLogo },
      { name: "Pricol", logo: pricolLogo },
      { name: "LMW", logo: lmwLogo },
      { name: "Ultra", logo: ultraLogo },
    ],
  },
  contact: {
    title: "Get in Touch",
    fields: ["phone", "email", "website", "people"],
    link: { label: "Find us on the map", to: "/contact" },
  },
};
