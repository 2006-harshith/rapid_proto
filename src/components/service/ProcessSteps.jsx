import Section from "../ui/Section.jsx";
import { pad } from "../../utils/format.js";

/**
 * "How X works": numbered cards joined by a thin connector (4 across on desktop).
 * Phones: compact rows, number on the left.
 */
export default function ProcessSteps({ id, title, steps, tone }) {
  return (
    <Section id={id} tone={tone} title={title}>
      <ol className="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="group relative flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue hover:shadow-card sm:block sm:px-7 sm:pt-8 sm:pb-9 lg:not-first:before:absolute lg:not-first:before:top-13.5 lg:not-first:before:-left-6 lg:not-first:before:h-px lg:not-first:before:w-6 lg:not-first:before:bg-line"
          >
            <span className="inline-grid size-10 shrink-0 place-items-center rounded-full bg-navy font-title text-sm font-semibold text-white transition-colors group-hover:bg-blue sm:size-11">
              {pad(i + 1)}
            </span>
            <div>
              <h3 className="pt-1.5 font-title text-lead font-medium text-ink sm:mt-6 sm:pt-0">
                {step.title}
              </h3>
              <p className="mt-1.5 text-ui leading-[1.65] text-muted sm:mt-2.5">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
