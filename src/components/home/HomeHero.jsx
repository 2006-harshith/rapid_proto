import Button from "../ui/Button.jsx";

/**
 * Full-bleed home hero: navy gradient over a photo, title, lead and buttons.
 * Phones: an even navy wash over the photo so the text stays readable.
 * actions  [{label, to | href, variant}] -> Button
 */
export default function HomeHero({ title, lead, image, actions }) {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-navy-deep py-16 text-white sm:py-20 md:min-h-[min(calc(85vh-var(--spacing-navbar)),45rem)]">
      <img
        src={image}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-10 size-full object-cover object-[70%_center] md:object-right"
      />
      <div
        className="absolute inset-0 -z-10 bg-navy-deep/90 md:bg-transparent md:bg-linear-to-r md:from-navy-deep md:via-navy-deep/75 md:via-45% md:to-navy-deep/15"
        aria-hidden="true"
      />
      <div className="site-container">
        <h1 className="max-w-120 font-title text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-[0.01em] uppercase">
          {title}
        </h1>
        <p className="mt-4 max-w-120 text-[clamp(1.0625rem,2vw,1.375rem)] leading-normal text-soft sm:mt-5">
          {lead}
        </p>
        {/* buttons share the row on phones and wrap full width when they don't fit */}
        <div className="mt-8 flex flex-wrap gap-3 *:grow sm:mt-10 sm:gap-4 sm:*:grow-0">
          {actions.map(({ label, ...action }) => (
            <Button key={label} {...action}>
              {label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
