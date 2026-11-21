// Service catalogue: the one place a Service's identity lives (code, name, route, photo, card summary).
// Nav links, home technology cards, routes, service heroes and comparison-table links all read from here.
// Page content stays in the per-service files (sla.js, …), which import their identity from this file.
import slaImg from "../../assets/images/technologies/sla.jpg";
import slsImg from "../../assets/images/technologies/sls.jpg";
import mjfImg from "../../assets/images/technologies/mjf.jpg";
import srmImg from "../../assets/images/technologies/srm.jpg";

const entries = [
  {
    code: "SLA",
    name: "Stereolithography",
    image: slaImg,
    summary:
      "Delivers exceptional dimensional accuracy and a refined surface finish using photosensitive resin. Well suited to intricate R&D models and aesthetic-grade prototypes.",
  },
  {
    code: "SLS",
    name: "Selective Laser Sintering",
    image: slsImg,
    summary:
      "Produces durable Nylon components engineered for elevated heat resistance. A practical choice for functional testing and efficient small-batch runs.",
  },
  {
    code: "MJF",
    name: "Multi Jet Fusion",
    image: mjfImg,
    summary:
      "HP MJF technology yields lightweight components with excellent structural integrity and rapid production cycles — well matched to automotive validation and short-run custom builds.",
  },
  {
    code: "SRM",
    name: "Silicone Rubber Moulding",
    image: srmImg,
    summary:
      "Vacuum-cast components built from inspected SLA masters, allowing several units to be reproduced from a single tool while keeping per-unit costs contained.",
  },
];

// Every service page lives at /services/<code in lowercase>.
export const services = entries.map((s) => ({
  ...s,
  route: `/services/${s.code.toLowerCase()}`,
}));

// Looks a service up by code, any case ("SLA" or "sla"); undefined if it isn't one.
export function findService(code) {
  return services.find((s) => s.code.toLowerCase() === code.toLowerCase());
}
