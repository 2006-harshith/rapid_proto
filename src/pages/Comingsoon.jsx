import comingSoonImg from "../assets/images/coming_soon2_transp.png";

// Uses the site Navbar/Footer, but the hero keeps its own original look: hard-coded
// colours + Inter, on purpose (not the site tokens).
const HERO_BG =
  "bg-[radial-gradient(circle_at_50%_15%,rgba(255,59,59,0.18),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(0,183,255,0.08),transparent_45%),linear-gradient(180deg,#323238_0%,#232328_40%,#151518_75%,#0d0d0f_100%)]";
// faint 70px grid that fades out towards the bottom
const GRID_OVERLAY =
  "before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] before:bg-size-[70px_70px] before:mask-[linear-gradient(black,transparent)]";

export default function Comingsoon() {
  return (
    <div className="overflow-x-hidden bg-[#0d0d0f] font-[Inter,system-ui,sans-serif] text-white">
      <section
        className={`relative flex min-h-[calc(100svh-var(--spacing-navbar))] items-center justify-center overflow-hidden px-5 pt-12 pb-20 sm:px-7.5 ${HERO_BG} ${GRID_OVERLAY}`}
      >
        <div className="relative z-2 max-w-300 text-center">
          <img
            src={comingSoonImg}
            alt="coming soon"
            className="mx-auto block w-full drop-shadow-[0_45px_80px_rgba(0,0,0,0.6)] md:w-[min(1200px,93vw)]"
          />

          <h1 className="mt-8 text-[clamp(2.5rem,6vw+1rem,6rem)] leading-[0.95] font-bold text-balance md:mt-11">
            Engineering the Future of
            <span className="text-[#3b83ff]"> 3D Printing</span>
          </h1>

          <p className="mx-auto mt-6 max-w-175 text-base leading-[1.7] text-[#bdbdc4] md:mt-7 md:text-xl">
            Our new website is under construction. We're "printing" something
            extraordinary.
          </p>
        </div>
      </section>
    </div>
  );
}
