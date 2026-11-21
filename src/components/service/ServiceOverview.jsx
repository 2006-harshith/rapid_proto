import Section from "../ui/Section.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

/** "Overview" title beside the intro paragraph, then the "At a glance" stat row (2×2 below lg). */
export default function ServiceOverview({ text, stats, tone }) {
  return (
    <Section tone={tone}>
      <div className="grid gap-6 md:gap-10 lg:grid-cols-[4fr_8fr] lg:gap-16">
        <SectionHeading>Overview</SectionHeading>
        <p className="text-md leading-[1.75] text-muted md:text-lead md:leading-[1.8]">
          {text}
        </p>
      </div>

      <dl
        className="mt-10 grid grid-cols-2 border-t border-line md:mt-14 lg:mt-18 lg:grid-cols-4"
        aria-label="At a glance"
      >
        {stats.map((stat) => (
          // dt comes first in the markup (label), shown under the number
          <div
            key={stat.label}
            className="group flex flex-col-reverse justify-end gap-2 border-line py-5 pr-4 even:border-l even:pl-4 nth-[n+3]:border-t sm:gap-2.5 sm:py-7 sm:pr-6 sm:even:pl-6 lg:border-t-0 lg:border-l lg:pt-8 lg:pr-7 lg:pb-0 lg:pl-7 lg:first:border-l-0 lg:first:pl-0"
          >
            <dt className="max-w-48 text-sm leading-normal text-muted sm:text-ui">
              {stat.label}
            </dt>
            <dd className="font-title text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none font-medium tracking-[-0.02em] text-navy transition-colors duration-300 group-hover:text-blue">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
