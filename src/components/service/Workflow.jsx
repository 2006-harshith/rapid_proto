import Section from "../ui/Section.jsx";

/**
 * "How we work with you": numbered dots on a horizontal track (lg),
 * a vertical timeline on phones.
 */
export default function Workflow({ title = "How we work with you", steps, tone }) {
  return (
    <Section tone={tone} title={title}>
      <ol className="relative grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:before:absolute lg:before:top-5.5 lg:before:right-[calc(25%-0.5rem)] lg:before:left-5.5 lg:before:h-px lg:before:bg-line">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="group relative flex gap-4 max-sm:not-last:after:absolute max-sm:not-last:after:top-12.5 max-sm:not-last:after:-bottom-4.5 max-sm:not-last:after:left-5.5 max-sm:not-last:after:w-px max-sm:not-last:after:bg-line sm:block"
          >
            <span className="relative inline-grid size-11 shrink-0 place-items-center rounded-full border border-blue bg-surface font-title text-ui font-semibold text-blue transition-colors group-hover:bg-blue group-hover:text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="pt-2 font-title text-lead font-medium text-ink sm:mt-6 sm:pt-0">
                {step.title}
              </h3>
              <p className="mt-1 text-ui leading-[1.65] text-muted sm:mt-2">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
