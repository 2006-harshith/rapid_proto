// SRM page content — source: brochures/RPT_SRM_Information_Sheet.pdf
// Rendered by src/pages/services/Srm.jsx. "[Label](/route)" inside a string becomes a link.
import image from "../../assets/images/technologies/srm.jpg";

export const srm = {
  hero: {
    title: "Silicone Rubber Moulding",
    lead: "Vacuum casting for production-quality polyurethane parts in small batches",
    image,
    imageAlt: "Polyurethane parts cast in silicone moulds",
    link: { label: "How SRM works", href: "#process" },
  },

  overview:
    "Silicone Rubber Moulding (SRM), also called vacuum casting, injects polyurethane (PU) resin into a silicone mould made from a high-accuracy SLA master pattern. Casting under vacuum removes trapped air, so parts come out bubble-free with the surface finish, fine detail and dimensional accuracy of the master. One silicone mould produces multiple near-production parts, making SRM a cost-effective bridge between 3D printing and injection moulding for form, fit and function testing, pre-production builds and small-batch end use. Rapid Proto Tech manages the full chain in-house, from SLA master to finished, inspected castings.",

  stats: [
    { value: "~20", label: "Typical castings per silicone mould" },
    { value: "A30 - D85", label: "Shore hardness range, rubber-like to rigid" },
    { value: "7-10", label: "Working days, typical lead time for first parts" },
    { value: "2010", label: "Supporting customers since" },
  ],

  process: {
    title: "How SRM works",
    steps: [
      {
        title: "SLA Master",
        text: "A high-resolution SLA master is printed, finished to the required texture and inspected; its accuracy carries into every casting.",
      },
      {
        title: "Silicone Mould",
        text: "Liquid silicone is poured around the master, de-aired and cured, then cut along a parting line; gates and vents are added.",
      },
      {
        title: "Vacuum Casting",
        text: "Two-part PU resin is mixed and poured under vacuum, filling fine detail without air bubbles or voids.",
      },
      {
        title: "Cure & Finish",
        text: "Parts are oven-cured, demoulded, trimmed and finished: paint, texture, inserts or colour matching, then inspected.",
      },
    ],
  },

  advantages: [
    {
      title: "Production-like parts",
      text: "PU resins simulate ABS, PP, PC, PMMA and rubber, so prototypes look and behave like the final product.",
    },
    {
      title: "Low tooling cost",
      text: "Silicone moulds cost a fraction of steel or aluminium tools and are ready in days, not weeks.",
    },
    {
      title: "Excellent surface finish",
      text: "The mould replicates the master exactly, from high gloss to fine textures.",
    },
    {
      title: "Colour and clarity",
      text: "Pigment-matched colours (e.g. Pantone / RAL) and optically clear parts, cast in colour.",
    },
    {
      title: "Over-moulding and inserts",
      text: "Soft-touch over hard substrates and threaded metal inserts cast in place.",
    },
    {
      title: "Fast iteration",
      text: "Change the master, re-cast, and validate design revisions before committing to hard tooling.",
    },
    {
      title: "Flexible volumes",
      text: "Economical from about 10 up to a few hundred parts using multiple moulds.",
    },
  ],

  finishing: {
    title: "Finishing & value-added options",
    items: [
      "Colour matching",
      "Painting & coating",
      "Texture (SPI / VDI)",
      "Clear polishing",
      "Pad print / laser mark",
      "Assembly & kitting",
      "Threaded inserts",
      "Over-moulding",
    ],
  },

  applications: {
    subtitle: "Where vacuum cast parts deliver the most value",
    items: [
      {
        name: "Medical Devices",
        useCase:
          "Small-batch housings and handheld devices for usability studies, clinical evaluation builds and pre-launch trials.",
        parts: [
          "Device housings and covers",
          "Handles, grips and soft-touch parts",
          "Pilot-batch enclosures",
        ],
      },
      {
        name: "Automotive",
        useCase:
          "OEMs test cast parts for form, fit and function and use them for design verification in pre-production.",
        parts: [
          "Interior trims, bezels and knobs",
          "Clear light-guide and lens parts",
          "Rubber-like seals and grommets",
        ],
      },
      {
        name: "Electronics & Electrical",
        useCase:
          "Production-look enclosures with flame-retardant grades, snap-fits and cast-in inserts.",
        parts: [
          "Device and meter enclosures",
          "Keypads and button mats",
          "Connector and sensor housings",
        ],
      },
      {
        name: "Consumer & Appliances",
        useCase:
          "Colour-matched, textured parts that look like the final product for marketing and user testing.",
        parts: [
          "Appliance housings and panels",
          "Wearables and handheld products",
          "Trade-show and photo samples",
        ],
      },
      {
        name: "Industrial Equipment",
        useCase:
          "Short runs of functional parts where injection tooling is not yet justified.",
        parts: [
          "Covers, guards and panels",
          "Jigs, fixtures and assembly aids",
          "Low-volume spare parts",
        ],
      },
      {
        name: "Robotics & Automation",
        useCase:
          "Durable housings and soft grippers produced in small batches and revised quickly.",
        parts: [
          "Soft gripper pads and fingers",
          "Sensor and camera housings",
          "Cable guides and bellows",
        ],
      },
    ],
  },

  quantity: {
    title: "Where SRM fits by quantity",
    bands: [
      {
        stage: "Prototype",
        range: "1 to 10 parts",
        text: "One-off parts are usually faster as SLA or SLS prints; SRM pays off once look, material or colour matter.",
      },
      {
        stage: "SRM Sweet Spot",
        range: "10 to 50 parts",
        text: "One or two moulds deliver production-like parts at the lowest cost per part.",
      },
      {
        stage: "Small Batch",
        range: "50 to 300 parts",
        text: "Multiple moulds run in parallel for pilot builds, clinical or field trials.",
      },
      {
        stage: "Bridge to Tooling",
        range: "300+ parts",
        text: "Compare against aluminium soft tooling or injection moulding (enquire).",
      },
    ],
    note: "Quantity bands are indicative guidance for one part design; mould life depends on geometry and resin. Confirm feasibility, cost and lead time with RPT.",
  },

  specs: {
    title: "Technical snapshot",
    subtitle: "Indicative",
    headers: ["Parameter", "Typical value", "What it means for your part"],
    rows: [
      {
        param: "Master pattern",
        value: "High-resolution SLA, hand-finished",
        meaning: "Master quality sets the finish and accuracy of every casting",
      },
      {
        param: "Mould material",
        value: "Addition- or condensation-cure RTV silicone",
        meaning: "Flexible mould allows undercuts and complex shapes",
      },
      {
        param: "Mould life",
        value: "~15 to 25 castings per mould",
        meaning: "Plan extra moulds for larger quantities or abrasive resins",
      },
      {
        param: "Dimensional accuracy",
        value: "±0.3 % (min. ±0.2 mm)",
        meaning: "Share critical dimensions; large flat parts may need fixturing",
      },
      {
        param: "Shrinkage",
        value: "~0.15 to 0.4 % (resin dependent)",
        meaning: "Compensated at master stage when critical",
      },
      {
        param: "Wall thickness",
        value: "1.5 to 3.0 mm recommended; ~1.0 mm min.",
        meaning: "Uniform walls cast and cure most consistently",
      },
      {
        param: "Max. part size",
        value: "Up to ~1,000 mm class (vacuum chamber)",
        meaning: "Confirm envelope and weight per project with RPT",
      },
      {
        param: "Hardness range",
        value: "Shore A 30 to Shore D 85",
        meaning: "From soft seals and grips to rigid structural housings",
      },
      {
        param: "Heat resistance",
        value: "~70 to 100 °C standard; up to ~140 °C HT",
        meaning: "Choose high-temperature grades for warm environments",
      },
      {
        param: "Surface finish",
        value: "Gloss, matte, textured (SPI / VDI) or painted",
        meaning: "Replicates the master; texture applied before moulding",
      },
      {
        param: "Colour / clarity",
        value: "Pigment-matched; water-clear or tinted",
        meaning: "Cast-in colour avoids paint wear on handled parts",
      },
      {
        param: "Lead time",
        value: "~7 to 10 working days for first 20 parts",
        meaning: "Depends on size, quantity, resin and finishing",
      },
    ],
    note: "Typical values reflect common vacuum casting practice and supplier resin data; they are not guarantees. Final properties depend on geometry, resin grade, curing and finishing.",
  },

  // Rendered with ComparisonTable: materials as rows, properties as columns.
  materials: {
    title: "Material guide: PU resin families",
    criteriaLabel: "Simulated material",
    columns: [
      { key: "hardness", label: "Hardness" },
      { key: "tensile", label: "Tensile (approx.)" },
      { key: "uses", label: "Typical applications" },
    ],
    rows: [
      {
        criteria: "ABS-like (rigid)",
        values: {
          hardness: "Shore D 75-85",
          tensile: "~45-60 MPa",
          uses: "Housings, enclosures, brackets, snap-fit assemblies",
        },
      },
      {
        criteria: "PP-like (semi-rigid)",
        values: {
          hardness: "Shore D 65-75",
          tensile: "~25-35 MPa",
          uses: "Living hinges, clips, containers, impact parts",
        },
      },
      {
        criteria: "PC / PMMA-like (clear)",
        values: {
          hardness: "Shore D 80-87",
          tensile: "~55-70 MPa",
          uses: "Lenses, light guides, covers, fluid windows",
        },
      },
      {
        criteria: "Rubber-like elastomer",
        values: {
          hardness: "Shore A 30-90",
          tensile: "~2-15 MPa",
          uses: "Seals, gaskets, grips, keypads, soft over-moulds",
        },
      },
      {
        criteria: "High-temperature",
        values: {
          hardness: "Shore D 80-88",
          tensile: "~60-75 MPa",
          uses: "Under-hood and electronics parts near heat sources",
        },
      },
      {
        criteria: "Flame-retardant (UL94 V-0 class)",
        values: {
          hardness: "Shore D 80-85",
          tensile: "~50-65 MPa",
          uses: "Electrical enclosures and appliance parts",
        },
      },
      {
        criteria: "Glass / mineral filled",
        values: {
          hardness: "Shore D 85-90",
          tensile: "~60-80 MPa",
          uses: "Stiff structural parts, low-warp housings",
        },
      },
    ],
    note: "Ranges are indicative across commercial vacuum casting resins (e.g. Axson / Sika, Huntsman, Hei-Cast classes). RPT will confirm the exact grade and datasheet for your project.",
  },

  // Rendered with ProcessSteps (numbered cards).
  quality: {
    title: "Quality assurance",
    steps: [
      {
        title: "Master approval",
        text: "SLA master inspected and finished; customer approval of the master before moulding when required.",
      },
      {
        title: "First-article check",
        text: "First castings measured against critical dimensions on your drawing before the batch runs.",
      },
      {
        title: "Cosmetic standard",
        text: "Colour, gloss and texture checked against the agreed sample or reference under controlled light.",
      },
      {
        title: "Documentation",
        text: "Inspection report and resin datasheet available on request for each batch.",
      },
    ],
  },

  comparison: {
    title: "Process comparison: SLA / SLS vs SRM vs Injection Moulding",
    columns: [
      { key: "print", label: "3D Printing (SLA/SLS)" },
      { key: "srm", label: "SRM Vacuum Casting", highlight: true },
      { key: "im", label: "Injection Moulding" },
    ],
    rows: [
      {
        criteria: "Tooling cost",
        values: {
          print: "None",
          srm: "Low (silicone mould)",
          im: "High (steel / aluminium tool)",
        },
      },
      {
        criteria: "Lead time",
        values: {
          print: "1 to 3 days",
          srm: "~7 to 10 working days",
          im: "4 to 10+ weeks for tooling",
        },
      },
      {
        criteria: "Economic quantity",
        values: {
          print: "1 to 10 parts",
          srm: "10 to a few hundred parts",
          im: "1,000+ parts",
        },
      },
      {
        criteria: "Materials",
        values: {
          print: "Process-specific resins / nylon",
          srm: "Wide PU range, rigid to rubber-like",
          im: "Full thermoplastic range",
        },
      },
      {
        criteria: "Surface finish",
        values: {
          print: "Layer lines; needs finishing",
          srm: "Replicates master: gloss to texture",
          im: "Defined by tool finish",
        },
      },
      {
        criteria: "Colour / clarity",
        values: {
          print: "Limited; mostly painted",
          srm: "Cast-in colour, clear parts",
          im: "Any; masterbatch colour",
        },
      },
      {
        criteria: "Over-mould / inserts",
        values: {
          print: "Limited",
          srm: "Yes, soft-touch and metal inserts",
          im: "Yes",
        },
      },
      {
        criteria: "Design changes",
        values: {
          print: "Instant",
          srm: "Easy: new master and mould",
          im: "Costly tool modification",
        },
      },
      {
        criteria: "Best suited for",
        values: {
          print: "Early concepts, fit checks",
          srm: "Pre-production, trials, small batches",
          im: "Mass production",
        },
      },
    ],
    note: "Tooling is spread across parts: SRM overtakes printing at roughly 10-15 parts, while injection moulding only wins once its tool cost is spread over several hundred parts or more. Crossover points vary with part size, complexity, material and finish.",
  },

  guidelines: {
    title: "Design guidelines for vacuum casting",
    items: [
      "Keep walls uniform at 1.5 to 3.0 mm; avoid abrupt thick-to-thin transitions that cause sink and uneven cure.",
      "Add draft of about 1 to 2 degrees where possible; silicone tolerates undercuts, but draft improves mould life.",
      "Use radii of at least 0.5 mm on internal corners to aid resin flow and reduce stress concentration.",
      "Ribs about 60 % of adjoining wall thickness; bosses supported by ribs for strength.",
      "Specify inserts (threaded brass, metal pins) and over-mould areas early so they are planned into the mould.",
      "Define texture, gloss level and colour (Pantone / RAL or sample) up front; texture is applied to the master.",
      "Flag critical dimensions and cosmetic faces so gates, vents and parting lines are placed away from them.",
    ],
  },

  commitments: [
    {
      title: "Since 2010",
      text: "Supporting customers across R&D, medical, automotive and electronics programmes with dependable manufacturing.",
    },
    {
      title: "No compromises",
      text: "Quality prototypes and end-use parts, held to a consistent standard of accuracy, finish and fit.",
    },
    {
      title: "Fast turnaround",
      text: "Short lead times from SLA master to finished castings that keep your schedule moving.",
    },
  ],

  suitability: {
    title: "Is SRM the right process?",
    choose: {
      title: "Choose SRM when you need",
      items: [
        "10 to a few hundred parts that look and feel like production",
        "Specific colours, clear parts or textured finishes",
        "Rubber-like or soft-touch parts, or over-moulding",
        "Parts for user trials, clinical builds or marketing samples",
        "Design validation before investing in hard tooling",
        "Cast-in metal inserts or mixed hard / soft materials",
      ],
    },
    consider: {
      title: "Consider another process when",
      items: [
        "Only 1 to 5 parts are needed quickly ([SLA](/services/sla) / [SLS](/services/sls) printing)",
        "Maximum heat or chemical resistance of true engineering polymers is required",
        "Volumes reach thousands of parts (injection moulding)",
        "Certified production material grades are mandatory",
        "Tolerances tighter than about ±0.1 mm are critical",
        "Very large parts exceed the vacuum chamber envelope",
      ],
    },
  },

  workflow: [
    {
      title: "Enquiry",
      text: "Send CAD, quantity, material and finish details.",
    },
    {
      title: "Review & Quote",
      text: "DFM feedback, resin and finish advice, quotation.",
    },
    {
      title: "Master & Mould",
      text: "SLA master printed, finished and approved; silicone mould made.",
    },
    {
      title: "Cast & Deliver",
      text: "Vacuum casting, finishing, inspection and dispatch.",
    },
  ],

  enquiry: {
    checklist: [
      "3D CAD file (STEP preferred; STL / IGES accepted) and 2D drawing with critical tolerances",
      "Quantity required, delivery schedule and whether repeat batches are expected",
      "Material behaviour needed (ABS-like, clear, rubber-like with Shore hardness, flame-retardant, high-temperature)",
      "Colour (Pantone / RAL or sample), gloss level, texture and any painting or printing",
      "Inserts, over-moulding, assembly or fit requirements and the operating environment",
    ],
    contactFields: ["company", "phone", "email", "website", "facilities"],
  },
};
