import { sla } from "../../data/services/sla.js";
import ServiceHero from "../../components/service/ServiceHero.jsx";
import ServiceOverview from "../../components/service/ServiceOverview.jsx";
import ProcessSteps from "../../components/service/ProcessSteps.jsx";
import Advantages from "../../components/service/Advantages.jsx";
import Applications from "../../components/service/Applications.jsx";
import Commitment from "../../components/service/Commitment.jsx";
import Suitability from "../../components/service/Suitability.jsx";
import EnquirySection from "../../components/service/EnquirySection.jsx";

// Content lives in data/services/sla.js; this file only sets section order + background tones.
export default function Sla() {
  return (
    <>
      <ServiceHero {...sla.hero} />
      <ServiceOverview text={sla.overview} stats={sla.stats} />
      <ProcessSteps id="process" tone="surface" {...sla.process} />
      <Advantages items={sla.advantages} />
      <Applications tone="surface" {...sla.applications} />
      <Commitment items={sla.commitments} />
      <Suitability {...sla.suitability} />
      <EnquirySection tone="surface" {...sla.enquiry} />
    </>
  );
}
