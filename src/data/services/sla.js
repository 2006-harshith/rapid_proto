// SLA page content — source: brochures/RPT_SLA_Information_Sheet.pdf
// Rendered by src/pages/services/ServicePage.jsx, which shows the sections this file has keys for (order + tones are set there).
// Code, name, route and photo come from the service catalogue (index.js). "[Label](/route)" inside a string becomes a link.

export const sla = {
  hero: {
    lead: "High-accuracy, fine-finish 3D printing for product development",
    imageAlt: "SLA-printed parts with a smooth finish",
  },

  overview:
    "Stereolithography (SLA) cures liquid photopolymer resin layer by layer using a UV laser, producing parts with exceptional dimensional accuracy, crisp detail and a smooth, aesthetic surface. Rapid Proto Tech supports research and development teams across multiple sectors with SLA prototyping from our manufacturing facilities in Coimbatore and Pune, backed by five industrial SLA printers.",

  stats: [
    { value: "5", label: "Industrial SLA printers" },
    { value: "2", label: "Facilities: Coimbatore & Pune" },
    { value: "2010", label: "Supporting customers since" },
    { value: "6", label: "Industry sectors served" },
  ],

  process: {
    title: "How SLA works",
    steps: [
      {
        title: "Digital Preparation",
        text: "Your CAD model is prepared, oriented and supported for printing.",
      },
      {
        title: "Laser Curing",
        text: "A UV laser traces each layer, solidifying the resin with fine precision.",
      },
      {
        title: "Post-Processing",
        text: "Parts are cleaned, supports removed and UV post-cured for stability.",
      },
      {
        title: "Finishing",
        text: "Surfaces are finished to the required appearance and inspected.",
      },
    ],
  },

  advantages: [
    {
      title: "High accuracy",
      text: "Fine layers deliver tight dimensional control and sharp features.",
    },
    {
      title: "Superior surface quality",
      text: "Smooth finish with minimal visible layer marks.",
    },
    {
      title: "Fine-detail capability",
      text: "Well suited to intricate geometry and small features.",
    },
    {
      title: "Lightweight parts",
      text: "Ideal where finish and low weight both matter.",
    },
    {
      title: "Fast turnaround",
      text: "Rapid iteration from CAD to physical part.",
    },
    {
      title: "Presentation-grade models",
      text: "Visually convincing for reviews, validation and stakeholder demos.",
    },
  ],

  applications: {
    subtitle: "Where SLA prototypes deliver the most value",
    items: [
      {
        name: "Automotive",
        useCase:
          "Prototype validation for electric and IC-engine vehicles ahead of series production.",
        parts: [
          "Fit and packaging checks",
          "Interior and exterior components",
          "Design review models",
        ],
      },
      {
        name: "Industrial",
        useCase:
          "Direct applications where a smooth finish and light weight are essential.",
        parts: [
          "Housings and covers",
          "Functional trial parts",
          "Visual and assembly models",
        ],
      },
      {
        name: "Home Appliances",
        useCase:
          "Validation of the growing range of smart-home appliances before tooling.",
        parts: [
          "Enclosures and control panels",
          "Ergonomic and fit studies",
          "Aesthetic design approval",
        ],
      },
      {
        name: "Healthcare",
        useCase:
          "Anatomical study and new product development with direct, practical applications.",
        parts: [
          "Anatomical models",
          "Device concept prototypes",
          "Pre-surgical study aids",
        ],
      },
      {
        name: "Medical Enclosures",
        useCase:
          "Prototype and end-product casings for medical devices that are not exposed to heat.",
        parts: [
          "Device casings",
          "Handheld equipment shells",
          "Usability and fit evaluation",
        ],
      },
      {
        name: "Architecture",
        useCase:
          "Miniaturised models with a fine finish and no visible layer marks.",
        parts: [
          "Scale and massing models",
          "Presentation models",
          "Detailed façade components",
        ],
      },
    ],
  },

  commitments: [
    {
      title: "Since 2010",
      text: "Supporting customers across R&D sectors with dependable prototyping, project after project.",
    },
    {
      title: "No compromises",
      text: "Quality prototypes and end-use parts, held to a consistent standard of accuracy and finish.",
    },
    {
      title: "Fast turnaround",
      text: "Short lead times that keep your development schedule moving.",
    },
  ],

  suitability: {
    title: "Is SLA the right process?",
    choose: {
      title: "Choose SLA when you need",
      items: [
        "A smooth, aesthetic surface",
        "High accuracy and fine detail",
        "Visual models and design-review parts",
        "Light, intricately detailed components",
        "Short lead time for early iterations",
      ],
    },
    consider: {
      title: "Consider another process when",
      items: [
        "Parts will be exposed to heat",
        "Functional, load-bearing end-use parts are required",
        "Tougher engineering-grade materials are needed (RPT also offers [MJF](/services/mjf) and [SLS](/services/sls))",
      ],
    },
    note: "Typical process characteristics are indicative of SLA technology; confirm project-specific tolerances and materials with RPT.",
  },

  enquiry: {
    checklist: [
      "3D CAD file (STL or STEP preferred)",
      "Quantity required and delivery timeline",
      "Application and operating environment (especially any heat exposure)",
      "Required surface finish and critical dimensions or tolerances",
      "Any assembly, fit or colour requirements",
    ],
  },
};
