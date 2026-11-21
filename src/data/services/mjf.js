// MJF page content — source: brochures/RPT_MJF_Information_Sheet.pdf
// Rendered by src/pages/services/ServicePage.jsx, which shows the sections this file has keys for (order + tones are set there).
// Code, name, route and photo come from the service catalogue (index.js). "[Label](/route)" inside a string becomes a link.

export const mjf = {
  hero: {
    lead: "Production-grade nylon 3D printing for functional prototypes and end-use parts",
    imageAlt: "Nylon parts produced by HP Multi Jet Fusion",
  },

  overview:
    "HP Multi Jet Fusion (MJF) builds parts from fine nylon powder, layer by layer, by jetting fusing and detailing agents and fusing the pattern with infrared energy. The result is light, strong, heat-resistant parts with consistent mechanical properties and fast print speed, with no support structures to remove. Rapid Proto Tech uses in-house HP MJF technology to serve customised projects and short-batch production, from functional prototypes to end-use parts.",

  stats: [
    { value: "1", label: "In-house HP MJF printer" },
    { value: "2010", label: "Supporting customers since" },
    { value: "PA12", label: "Core nylon material" },
    { value: "6", label: "Industry sectors served" },
  ],

  process: {
    title: "How MJF works",
    steps: [
      {
        title: "Digital Preparation",
        text: "Your CAD model is checked, orientated and nested with other parts in a 3D build volume. No supports needed.",
      },
      {
        title: "Fusing & Detailing",
        text: "A thin powder layer is spread; agents are jetted and infrared energy fuses the part cross-section.",
      },
      {
        title: "Cooling & Depowder",
        text: "The build cools in a controlled way, then parts are unpacked and cleaned of loose powder.",
      },
      {
        title: "Finishing",
        text: "Bead blasting for an even matte surface, optional dyeing and inspection to the agreed specification.",
      },
    ],
  },

  advantages: [
    {
      title: "Strong and durable",
      text: "Tough nylon parts that tolerate repeated push/pull, snap-fit and impact loads.",
    },
    {
      title: "Heat resistant",
      text: "Retains performance in warm environments where resin-based parts struggle.",
    },
    {
      title: "Lightweight",
      text: "Low part density suits drones, handheld devices and moving assemblies.",
    },
    {
      title: "Fast print speed",
      text: "Whole build volume is fused at once, so batches finish quickly.",
    },
    {
      title: "No supports",
      text: "Free nesting and complex geometry, less post-processing, lower cost per part in batches.",
    },
    {
      title: "Consistent properties",
      text: "Uniform strength across the part for repeatable functional testing.",
    },
    {
      title: "Scales from 1 to many",
      text: "The same process serves prototypes, pilot lots and short-run end-use parts.",
    },
  ],

  applications: {
    subtitle: "Where MJF parts deliver the most value",
    items: [
      {
        name: "Drones",
        useCase:
          "Light, strong parts: MJF's low weight compared with other powder-based technologies supports airframe and payload applications.",
        parts: [
          "Frames, arms and brackets",
          "Payload and sensor housings",
          "Ducts, mounts and covers",
        ],
      },
      {
        name: "Industrial",
        useCase:
          "Parts fitted directly into machinery to perform simple push / pull functions at high cycle counts.",
        parts: [
          "Jigs, fixtures and guides",
          "Levers, clips and actuators",
          "Housings and covers",
        ],
      },
      {
        name: "Automotive",
        useCase:
          "Heat and impact resistance give a good foundation for automotive testing and applications.",
        parts: [
          "Clips, ducts and brackets",
          "Fit, packaging and function tests",
          "Interior and under-hood trial parts",
        ],
      },
      {
        name: "Robotics & Automation",
        useCase:
          "Durable, light end-effectors and enclosures produced in small batches, redesigned quickly as the machine evolves.",
        parts: [
          "Grippers and end-effectors",
          "Sensor and PCB enclosures",
          "Cable guides and mounts",
        ],
      },
      {
        name: "Consumer & Appliances",
        useCase:
          "Functional validation of snap-fits, hinges and enclosures before committing to tooling.",
        parts: [
          "Enclosures and housings",
          "Hinges, latches and snap-fits",
          "Pre-tooling pilot batches",
        ],
      },
      {
        name: "Healthcare & Devices",
        useCase:
          "Tough, lightweight casings and aids for devices and equipment (confirm material suitability for each use).",
        parts: [
          "Device casings and shells",
          "Handheld equipment housings",
          "Custom aids and holders",
        ],
      },
    ],
  },

  quantity: {
    title: "Where MJF fits by quantity",
    bands: [
      {
        stage: "Prototype",
        range: "1 to 10 parts",
        text: "Functional validation, fit and assembly checks, quick design iterations.",
      },
      {
        stage: "Pilot / Bridge Batch",
        range: "10 to 500 parts",
        text: "Field trials and market testing while tooling is being developed.",
      },
      {
        stage: "Short-Run End-Use",
        range: "500+ parts (enquire)",
        text: "Customised and low-volume production where tooling is not economic.",
      },
    ],
    note: "Quantity bands are indicative guidance; confirm feasibility, cost and lead time with RPT.",
  },

  specs: {
    title: "Technical snapshot",
    subtitle: "Indicative, PA12",
    headers: ["Parameter", "Typical value", "What it means for your part"],
    rows: [
      {
        param: "Material",
        value: "PA12 nylon powder (HP)",
        meaning: "Tough, lightweight, good chemical resistance",
      },
      {
        param: "Layer thickness",
        value: "~80 microns",
        meaning: "Fine enough for functional detail",
      },
      {
        param: "Dimensional accuracy",
        value: "~0.3 % (min. ~0.3 mm)",
        meaning: "Allow clearance on press fits and moving joints",
      },
      {
        param: "Tensile strength (XY)",
        value: "~48 MPa",
        meaning: "Durable under repeated push / pull loads",
      },
      {
        param: "Elongation at break",
        value: "~20 %",
        meaning: "Flexes before failing; good impact tolerance",
      },
      {
        param: "Heat deflection temp.",
        value: "~175 °C @ 0.45 MPa",
        meaning: "Stable in warm environments; verify peak temperature",
      },
      {
        param: "Part density",
        value: "~1.0 g/cc",
        meaning: "Light weight for drones and handheld parts",
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
        value: "Grey; dyed black or bead-blasted",
        meaning: "Even matte surface; glossy finish not typical",
      },
    ],
    note: "Typical values follow published HP PA12 data and are not guarantees. Final properties depend on geometry, orientation and finishing.",
  },

  comparison: {
    title: "Process comparison: MJF vs SLA vs SLS",
    columns: [
      { key: "mjf", label: "MJF", highlight: true },
      { key: "sla", label: "SLA" },
      { key: "sls", label: "SLS" },
    ],
    rows: [
      {
        criteria: "Surface finish",
        values: {
          mjf: "Fine matte, slightly grainy",
          sla: "Smoothest; minimal layer marks",
          sls: "Matte, slightly grainy",
        },
      },
      {
        criteria: "Strength",
        values: {
          mjf: "High; durable, impact tolerant",
          sla: "Moderate; can be brittle",
          sls: "High; durable",
        },
      },
      {
        criteria: "Heat resistance",
        values: {
          mjf: "Good",
          sla: "Limited; avoid heat exposure",
          sls: "Good",
        },
      },
      {
        criteria: "Fine detail",
        values: {
          mjf: "High",
          sla: "Highest",
          sls: "Moderate to high",
        },
      },
      {
        criteria: "Batch production",
        values: {
          mjf: "Excellent; fast, no supports",
          sla: "Good for small quantities",
          sls: "Good; no supports",
        },
      },
      {
        criteria: "Best suited for",
        values: {
          mjf: "Functional parts, short-batch end-use",
          sla: "Visual models, presentation, design review",
          sls: "Functional prototypes and parts",
        },
      },
    ],
  },

  guidelines: {
    title: "Design guidelines for MJF",
    items: [
      "Keep walls at about 1.0 mm or thicker; add ribs instead of thick solid sections to limit warping.",
      "Hollow parts need two or more escape holes (about 4 to 5 mm) so trapped powder can be removed.",
      "Leave about 0.5 mm or more clearance between mating or moving features in a single-print assembly.",
      "Embossed or engraved text should be at least 0.5 mm deep; avoid very small text.",
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
    title: "Is MJF the right process?",
    choose: {
      title: "Choose MJF when you need",
      items: [
        "Strong, functional parts that take load",
        "Heat and impact resistance",
        "Light weight with good durability",
        "Short batches without tooling",
        "Fast turnaround for many parts at once",
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
      text: "In-house MJF printing, depowdering and finishing.",
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
