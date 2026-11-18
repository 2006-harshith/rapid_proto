import { sls } from "../../data/services/sls.js";
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

// Content lives in data/services/sls.js; this file only sets section order + background tones.
export default function Sls() {
  return (
    <>
      <ServiceHero {...sls.hero} />
      <ServiceOverview text={sls.overview} stats={sls.stats} />
      <ProcessSteps id="process" tone="surface" {...sls.process} />
      <Advantages items={sls.advantages} />
      <Applications tone="surface" {...sls.applications} />
      <QuantityBands {...sls.quantity} />
      <SpecTable tone="surface" {...sls.specs} />
      <ComparisonTable {...sls.comparison} />
      <Section tone="surface" layout="split" title={sls.guidelines.title}>
        <NumberedList items={sls.guidelines.items} />
      </Section>
      <Commitment items={sls.commitments} />
      <Suitability {...sls.suitability} />
      <Workflow tone="surface" steps={sls.workflow} />
      <EnquirySection {...sls.enquiry} />
    </>
  );
}
