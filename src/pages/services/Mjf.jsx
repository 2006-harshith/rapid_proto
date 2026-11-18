import { mjf } from "../../data/services/mjf.js";
import Section from "../../components/ui/Section.jsx";
import NumberedList from "../../components/ui/NumberedList.jsx";
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

// Content lives in data/services/mjf.js; this file only sets section order + background tones.
export default function Mjf() {
  return (
    <>
      <ServiceHero {...mjf.hero} />
      <ServiceOverview text={mjf.overview} stats={mjf.stats} />
      <ProcessSteps id="process" tone="surface" {...mjf.process} />
      <Advantages items={mjf.advantages} />
      <Applications tone="surface" {...mjf.applications} />
      <QuantityBands {...mjf.quantity} />
      <SpecTable tone="surface" {...mjf.specs} />
      <ComparisonTable {...mjf.comparison} />
      <Section tone="surface" layout="split" title={mjf.guidelines.title}>
        <NumberedList items={mjf.guidelines.items} />
      </Section>
      <Commitment items={mjf.commitments} />
      <Suitability {...mjf.suitability} />
      <Workflow tone="surface" steps={mjf.workflow} />
      <EnquirySection {...mjf.enquiry} />
    </>
  );
}
