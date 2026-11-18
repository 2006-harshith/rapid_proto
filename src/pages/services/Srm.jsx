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

// Content lives in data/services/srm.js; this file only sets section order + background tones.
export default function Srm() {
  return (
    <>
      <ServiceHero {...srm.hero} />
      <ServiceOverview text={srm.overview} stats={srm.stats} />
      <ProcessSteps id="process" tone="surface" {...srm.process} />
      <Advantages items={srm.advantages} />
      <Section tone="surface" layout="split" title={srm.finishing.title}>
        <TagList items={srm.finishing.items} />
      </Section>
      <Applications {...srm.applications} />
      <QuantityBands tone="surface" {...srm.quantity} />
      <SpecTable {...srm.specs} />
      <ComparisonTable tone="surface" {...srm.materials} />
      <ProcessSteps {...srm.quality} />
      <ComparisonTable tone="surface" {...srm.comparison} />
      <Section layout="split" title={srm.guidelines.title}>
        <NumberedList items={srm.guidelines.items} />
      </Section>
      <Commitment items={srm.commitments} />
      <Suitability {...srm.suitability} />
      <Workflow tone="surface" steps={srm.workflow} />
      <EnquirySection {...srm.enquiry} />
    </>
  );
}
