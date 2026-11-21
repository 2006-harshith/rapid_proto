// SLS page content — source: brochures/RPT_SLS_Information_Sheet.pdf
// Rendered by src/pages/services/ServicePage.jsx, which shows the sections this file has keys for (order + tones are set there).
// Code, name, route and photo come from the service catalogue (index.js). "[Label](/route)" inside a string becomes a link.

export const sls = {
  hero: {
    lead: "Strong, heat-resistant nylon 3D printing for functional parts and small batches",
    imageAlt: "Nylon parts produced by SLS",
  },

  overview:
    "Selective Laser Sintering (SLS) uses a laser to sinter fine nylon powder layer by layer, producing laser-sintered parts that are stronger than SLA parts and fully functional. SLS parts are built to be strong and heat resistant, making the process an ideal, low-cost solution when strength and heat resistance are the priority. Rapid Proto Tech runs in-house SLS for small-batch production with shorter lead times than conventional methods.",

  stats: [
    { value: "1", label: "In-house SLS printer" },
    { value: "2010", label: "Supporting customers since" },
    { value: "Nylon", label: "PA12 and Alumide powders" },
    { value: "6", label: "Industry sectors served" },
  ],

  process: {
    title: "How SLS works",
    steps: [
      {
        title: "Digital Preparation",
        text: "Your CAD model is checked, orientated and nested in the build volume. No support structures are needed.",
      },
      {
        title: "Laser Sintering",
        text: "A laser sinters each powder layer in a controlled nitrogen atmosphere; fresh powder is then spread on top.",
      },
      {
        title: "Cooling & Depowder",
        text: "The powder bed cools slowly, then parts are unpacked and cleaned of loose powder.",
      },
      {
        title: "Finishing",
        text: "Bead blasting for an even matte surface, optional dyeing and inspection to specification.",
      },
    ],
  },

  advantages: [
    {
      title: "High strength",
      text: "Functional nylon parts that are stronger than SLA and hold up under load.",
    },
    {
      title: "Heat resistant",
      text: "Suited to parts where temperature exposure rules out resin prints.",
    },
    {
      title: "Impact resistant",
      text: "Tough parts for testing, assembly and working models.",
    },
    {
      title: "Low cost",
      text: "An economical route to strong 3D prints, especially in small batches.",
    },
    {
      title: "No supports",
      text: "Free nesting in 3D and complex geometry without support removal.",
    },
    {
      title: "Repeatable properties",
      text: "Consistent mechanical behaviour across small-batch production.",
    },
    {
      title: "Shorter lead times",
      text: "Faster than conventional methods for small runs.",
    },
  ],

  applications: {
    subtitle: "Where SLS parts deliver the most value",
    items: [
      {
        name: "Industrial",
        useCase:
          "Enclosures, jigs and fixtures for testing, with high repeatability of mechanical properties in small-batch production.",
        parts: [
          "Enclosures and covers",
          "Jigs and fixtures",
          "Test and assembly aids",
        ],
      },
      {
        name: "Automotive",
        useCase:
          "From testing applications to direct end-use fitment parts, helped by the growing availability of new materials.",
        parts: [
          "Brackets, clips and mounts",
          "Fit and function test parts",
          "End-use fitment parts",
        ],
      },
      {
        name: "Fluid & Air Handling",
        useCase:
          "A low-cost, heat-resistant alternative for hoses, pipes and connectors in prototype and trial builds.",
        parts: [
          "Ducts and manifolds",
          "Pipe and hose connectors",
          "Housings and adaptors",
        ],
      },
      {
        name: "Electrical & Electronics",
        useCase:
          "Strong, heat-resistant housings and mounts for devices and control equipment.",
        parts: [
          "Device enclosures",
          "PCB and sensor mounts",
          "Connector housings",
        ],
      },
      {
        name: "Consumer & Appliances",
        useCase:
          "Functional validation of snap-fits, hinges and enclosures before committing to tooling.",
        parts: [
          "Housings and brackets",
          "Hinges, latches and snap-fits",
          "Pre-tooling pilot batches",
        ],
      },
      {
        name: "Robotics & Automation",
        useCase:
          "Durable, lightweight end-effectors and enclosures produced in small batches and revised quickly.",
        parts: [
          "Grippers and end-effectors",
          "Guards and enclosures",
          "Cable guides and mounts",
        ],
      },
    ],
  },

  quantity: {
    title: "Where SLS fits by quantity",
    bands: [
      {
        stage: "Prototype",
        range: "1 to 10 parts",
        text: "Functional validation, fit and assembly checks, quick design iterations.",
      },
      {
        stage: "Small Batch",
        range: "10 to 500 parts",
        text: "Repeatable small-batch production with shorter lead times than conventional methods.",
      },
      {
        stage: "End-Use / Bridge",
        range: "500+ parts (enquire)",
        text: "Low-volume end-use and fitment parts where tooling is not economic.",
      },
    ],
    note: "Quantity bands are indicative guidance; confirm feasibility, cost and lead time with RPT.",
  },

  specs: {
    title: "Technical snapshot",
    subtitle: "Indicative, Nylon PA12",
    headers: ["Parameter", "Typical value", "What it means for your part"],
    rows: [
      {
        param: "Material",
        value: "Nylon PA12 (e.g. PA2200); Alumide",
        meaning: "Tough nylon; Alumide adds a metallic, stiffer feel",
      },
      {
        param: "Layer thickness",
        value: "~100 to 120 microns",
        meaning: "Good functional detail; not cosmetic-grade smooth",
      },
      {
        param: "Dimensional accuracy",
        value: "~0.3 % (min. ~0.3 mm)",
        meaning: "Allow clearance on press fits and moving joints",
      },
      {
        param: "Tensile strength (XY)",
        value: "~48 MPa",
        meaning: "Strong enough for load-bearing functional parts",
      },
      {
        param: "Elongation at break",
        value: "~15 to 20 %",
        meaning: "Flexes before failing; good impact tolerance",
      },
      {
        param: "Heat resistance",
        value: "~160 °C Vicat softening",
        meaning: "Suited to warm environments; verify peak temperature",
      },
      {
        param: "Part density",
        value: "~0.9 to 1.0 g/cc",
        meaning: "Light weight for handheld and moving parts",
      },
      {
        param: "Min. recommended wall",
        value: "~1.0 mm",
        meaning: "Thinner walls possible; review per geometry",
      },
      {
        param: "Supports",
        value: "Not required",
        meaning: "Free nesting, complex geometry, cost-efficient batches",
      },
      {
        param: "Colour / finish",
        value: "Natural grey-white; dyed or blasted",
        meaning: "Even matte, slightly grainy surface",
      },
    ],
    note: "Typical values follow published PA12 (PA2200-class) data and are not guarantees. Final properties depend on geometry, orientation and finishing.",
  },

  comparison: {
    title: "Process comparison: SLS vs MJF vs SLA",
    columns: [
      { key: "sls", label: "SLS", highlight: true },
      { key: "mjf", label: "MJF" },
      { key: "sla", label: "SLA" },
    ],
    rows: [
      {
        criteria: "Surface finish",
        values: {
          sls: "Matte, grainy; bead blasting evens it",
          mjf: "Fine matte, slightly grainy",
          sla: "Smoothest; minimal layer marks",
        },
      },
      {
        criteria: "Strength",
        values: {
          sls: "High; durable and impact tolerant",
          mjf: "High; durable",
          sla: "Moderate; can be brittle",
        },
      },
      {
        criteria: "Heat resistance",
        values: {
          sls: "Good; heat resistant",
          mjf: "Good",
          sla: "Limited; avoid heat exposure",
        },
      },
      {
        criteria: "Fine detail",
        values: {
          sls: "Moderate to high",
          mjf: "High",
          sla: "Highest",
        },
      },
      {
        criteria: "Batch production",
        values: {
          sls: "Good; no supports, nested builds",
          mjf: "Excellent; fast, no supports",
          sla: "Good for small quantities",
        },
      },
      {
        criteria: "Best suited for",
        values: {
          sls: "Jigs, fixtures, enclosures, strong functional parts",
          mjf: "Functional parts, short-batch end-use",
          sla: "Visual models, presentation, design review",
        },
      },
    ],
  },

  guidelines: {
    title: "Design guidelines for SLS",
    items: [
      "Keep walls at about 1.0 mm or thicker; avoid large flat thin sections that can warp.",
      "Hollow parts need two or more escape holes (about 4 to 5 mm) so trapped powder can be removed.",
      "Leave about 0.5 mm or more clearance between mating or moving features in a single-print assembly.",
      "Snap-fits and living hinges work well in nylon; design for the part's flexibility.",
      "Share critical dimensions so RPT can orientate and finish parts to hold them.",
    ],
  },

  commitments: [
    {
      title: "Since 2010",
      text: "Supporting customers across R&D and production sectors with dependable manufacturing, project after project.",
    },
    {
      title: "No compromises",
      text: "Quality prototypes and end-use parts, held to a consistent standard of strength, accuracy and finish.",
    },
    {
      title: "Fast turnaround",
      text: "Short lead times that keep your development schedule moving. Don't blink.",
    },
  ],

  suitability: {
    title: "Is SLS the right process?",
    choose: {
      title: "Choose SLS when you need",
      items: [
        "Strength and heat resistance as the main priority",
        "Low-cost strong 3D prints",
        "Jigs, fixtures and enclosures for testing",
        "Small batches with repeatable properties",
        "Shorter lead times than conventional methods",
        "Complex geometry without supports",
      ],
    },
    consider: {
      title: "Consider another process when",
      items: [
        "A glass-smooth, cosmetic surface is the priority ([SLA](/services/sla))",
        "Presentation-grade visual models are required ([SLA](/services/sla))",
        "Rubber-like, flexible parts are needed ([SRM](/services/srm) silicone moulding)",
        "Very large parts beyond the build volume",
        "Quantities where injection moulding is cheaper",
      ],
    },
  },

  workflow: [
    { title: "Enquiry", text: "Send CAD, quantity and application details." },
    {
      title: "Review & Quote",
      text: "DFM feedback, material and finish advice, quote.",
    },
    {
      title: "Print & Finish",
      text: "In-house SLS printing, depowdering and finishing.",
    },
    {
      title: "Inspect & Deliver",
      text: "Quality check and dispatch to your schedule.",
    },
  ],

  enquiry: {
    checklist: [
      "3D CAD file (STL or STEP preferred)",
      "Quantity required and delivery timeline",
      "Application and operating environment (especially heat, load and chemical exposure)",
      "Required surface finish, colour and critical dimensions or tolerances",
      "Any assembly, fit or moving-part requirements",
    ],
    contactFields: ["company", "phone", "email", "website", "facilities"],
  },
};
