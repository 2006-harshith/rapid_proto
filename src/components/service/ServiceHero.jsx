import Button from "../ui/Button.jsx";

/** Navy hero: title, lead, "Contact us" + an in-page link, product photo on the right. */
export default function ServiceHero({ title, lead, image, imageAlt, link }) {
  return (
    <section className="hero-glow relative overflow-hidden bg-navy-deep py-12 text-white sm:py-16 lg:py-22">
      <div className="site-container relative grid items-center gap-9 sm:gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div>
          <h1 className="font-title text-[clamp(2.125rem,5.5vw+0.5rem,4.25rem)] leading-[1.05] font-bold tracking-[-0.02em] text-balance">
            {title}
          </h1>
          <p className="mt-4 max-w-lg text-[clamp(1.0625rem,2vw,1.375rem)] leading-normal text-soft sm:mt-5">
            {lead}
          </p>
          {/* buttons share the row on phones and wrap full width when they don't fit */}
          <div className="mt-8 flex flex-wrap gap-3 *:grow sm:mt-10 sm:gap-4 sm:*:grow-0">
            <Button to="/contact">Contact us</Button>
            {link && (
              <Button href={link.href} variant="ghost">
                {link.label}
              </Button>
            )}
          </div>
        </div>
        {/* phones: wide frame showing the whole photo; larger screens: square card */}
        <figure className="w-full overflow-hidden rounded-2xl bg-white shadow-photo sm:max-w-90 lg:max-w-105 lg:justify-self-end">
          <img
            src={image}
            alt={imageAlt}
            fetchPriority="high"
            className="block aspect-4/3 w-full object-contain sm:aspect-square sm:object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
