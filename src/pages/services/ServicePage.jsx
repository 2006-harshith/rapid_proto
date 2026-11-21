import { Fragment } from "react";
import { findService } from "../../data/services/index.js";
import { sla } from "../../data/services/sla.js";
import { sls } from "../../data/services/sls.js";
import { mjf } from "../../data/services/mjf.js";
import { srm } from "../../data/services/srm.js";
import Section from "../../components/ui/Section.jsx";
import NumberedList from "../../components/ui/NumberedList.jsx";
import TagList from "../../components/ui/TagList.jsx";
import ServiceHero from "../../components/service/ServiceHero.jsx";
import ServiceOverview from "../../components/service/ServiceOverview.jsx";
import ProcessSteps from "../../components/service/ProcessSteps.jsx";
import Advantages from "../../components/service/Advantages.jsx";
import Applications from "../../components/service/Applications.jsx";
import QuantityBands from "../../components/service/QuantityBands.jsx";
import SpecTable from "../../components/service/SpecTable.jsx";
import ComparisonTable from "../../components/service/ComparisonTable.jsx";
import Commitment from "../../components/service/Commitment.jsx";
import Suitability from "../../components/service/Suitability.jsx";
import Workflow from "../../components/service/Workflow.jsx";
import EnquirySection from "../../components/service/EnquirySection.jsx";

// Page content per service code (data/services/<code>.js).
const content = { SLA: sla, SLS: sls, MJF: mjf, SRM: srm };

// Every section a service page can have, in page order: [data key, render(data, tone)].
// A page shows the sections its data file has keys for, in this order.
const SECTIONS = [
  ["overview", (d, tone) => <ServiceOverview tone={tone} text={d.overview} stats={d.stats} />],
  // id = target of the hero's "How X works" button
  ["process", (d, tone) => <ProcessSteps id="process" tone={tone} {...d.process} />],
  ["advantages", (d, tone) => <Advantages tone={tone} items={d.advantages} />],
  ["finishing", (d, tone) => (
    <Section tone={tone} layout="split" title={d.finishing.title}>
      <TagList items={d.finishing.items} />
    </Section>
  )],
  ["applications", (d, tone) => <Applications tone={tone} {...d.applications} />],
  ["quantity", (d, tone) => <QuantityBands tone={tone} {...d.quantity} />],
  ["specs", (d, tone) => <SpecTable tone={tone} {...d.specs} />],
  ["materials", (d, tone) => <ComparisonTable tone={tone} {...d.materials} />],
  ["quality", (d, tone) => <ProcessSteps tone={tone} {...d.quality} />],
  ["comparison", (d, tone) => <ComparisonTable tone={tone} {...d.comparison} />],
  ["guidelines", (d, tone) => (
    <Section tone={tone} layout="split" title={d.guidelines.title}>
      <NumberedList items={d.guidelines.items} />
    </Section>
  )],
  ["commitments", (d) => <Commitment items={d.commitments} />], // always dark
  ["suitability", (d, tone) => <Suitability tone={tone} {...d.suitability} />],
  ["workflow", (d, tone) => <Workflow tone={tone} steps={d.workflow} />],
  ["enquiry", (d, tone) => <EnquirySection tone={tone} {...d.enquiry} />],
];

// Background tone of each section: plain and surface alternate so neighbours
// stand apart; Commitment is dark and the section after it starts plain again.
function sectionTones(keys) {
  let next = "plain";
  return keys.map((key) => {
    if (key === "commitments") {
      next = "plain";
      return "dark";
    }
    const tone = next;
    next = tone === "plain" ? "surface" : "plain";
    return tone;
  });
}

/** A service page (/services/<code>): hero, then the sections its data file has, toned automatically. */
export default function ServicePage({ code }) {
  const service = findService(code);
  const data = content[service.code];
  const sections = SECTIONS.filter(([key]) => data[key] !== undefined);
  const tones = sectionTones(sections.map(([key]) => key));

  return (
    <>
      <ServiceHero
        {...data.hero}
        title={service.name}
        image={service.image}
        link={data.process && { label: data.process.title, href: "#process" }}
      />
      {sections.map(([key, render], i) => (
        <Fragment key={key}>{render(data, tones[i])}</Fragment>
      ))}
    </>
  );
}
