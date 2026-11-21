import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { navLinks } from "../../data/navLinks.js";
import { company } from "../../data/company.js";
import Icon from "../ui/Icon.jsx";

// Plain links: underline link on desktop, a large tappable row in the phone menu.
const NAV_LINK =
  "link-line flex items-center gap-1.5 rounded-lg px-3 py-3.5 text-lg font-medium [--line-inset:1rem] [--line-offset:0.25rem] after:hidden max-md:[--link-rest:var(--color-ink)] md:px-4 md:py-2 md:text-ui md:after:block";

// Navy pill "Contact us"; full width at the bottom of the phone menu.
const NAV_CTA =
  "flex justify-center rounded-full bg-navy px-5.5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue active:bg-blue aria-[current=page]:bg-blue md:inline-flex md:py-2.5 md:text-ui";

export default function Navbar() {
  const { pathname } = useLocation();
  // The phone menu remembers the page it was opened on, so navigating anywhere
  // (links, back/forward) closes it.
  const [openOn, setOpenOn] = useState(null);
  const menuOpen = openOn === pathname;
  const closeMenu = () => setOpenOn(null);
  const [scrolled, setScrolled] = useState(false);

  // Lift the bar off the page once content scrolls under it
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the phone menu is open: lock page scroll, close on Escape or when
  // the screen widens to the desktop layout.
  useEffect(() => {
    if (!menuOpen) return;
    const desktop = window.matchMedia("(min-width: 48rem)");
    const close = () => setOpenOn(null);
    const onKey = (e) => e.key === "Escape" && close();
    const onWiden = () => desktop.matches && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onWiden);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onWiden);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 h-navbar border-b border-line font-title transition-[background-color,box-shadow] ${
        scrolled && !menuOpen
          ? "bg-white/88 shadow-bar backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="site-container flex h-full items-center justify-between gap-8">
        <Link
          to="/"
          className="flex shrink-0 items-center md:-ml-2"
          aria-label="Rapid Proto Tech, home"
          onClick={closeMenu}
        >
          <img src={logo} alt="" className="block h-9.5 w-auto md:h-11.5" />
          {/* Tucked beside the bird, centred on it, so it reads as part of the mark */}
          <span className="-ml-0.75 text-base leading-none font-bold tracking-[0.04em] text-ink md:-ml-1 md:text-lg">
            RPT
          </span>
        </Link>

        <button
          type="button"
          className="group -mr-2.5 flex size-11 flex-col justify-center gap-1.25 px-2.5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setOpenOn(menuOpen ? null : pathname)}
        >
          <span className="h-0.5 bg-ink transition group-aria-expanded:translate-y-1.75 group-aria-expanded:rotate-45" />
          <span className="h-0.5 bg-ink transition group-aria-expanded:opacity-0" />
          <span className="h-0.5 bg-ink transition group-aria-expanded:-translate-y-1.75 group-aria-expanded:-rotate-45" />
        </button>

        {/* Desktop: links in the bar. Phone: a full-height panel under the bar.
            It fades in when opened and closes instantly: animating only the opening
            stops it flashing when the screen turns from desktop to phone layout. */}
        <nav
          id="primary-nav"
          aria-label="Main navigation"
          className={`max-md:absolute max-md:inset-x-0 max-md:top-full max-md:h-[calc(100dvh-var(--spacing-navbar)+1px)] max-md:overflow-y-auto max-md:overscroll-contain max-md:border-t max-md:border-line max-md:bg-white max-md:px-(--gutter) max-md:pt-2 max-md:pb-10 md:h-full ${
            menuOpen
              ? "max-md:transition-[opacity,translate]"
              : "max-md:invisible max-md:-translate-y-2 max-md:opacity-0"
          }`}
        >
          <ul className="flex flex-col md:h-full md:flex-row md:items-center md:gap-1">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={
                  link.cta
                    ? "mt-6 md:mt-0 md:ml-3"
                    : "md:flex md:h-full md:items-center"
                }
              >
                {link.children ? (
                  <NavDropdown link={link} onNavigate={closeMenu} />
                ) : (
                  <NavLink
                    to={link.to}
                    end
                    className={link.cta ? NAV_CTA : NAV_LINK}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Phone menu only: call or email in one tap */}
          <div className="mt-8 flex flex-col border-t border-line pt-4 md:hidden">
            {[
              { icon: "phone", ...company.phone },
              { icon: "email", ...company.email },
            ].map((item) => (
              <a
                key={item.icon}
                href={item.href}
                className="flex items-center gap-3 px-3 py-3 text-base font-medium text-muted active:text-blue"
              >
                <span className="text-blue">
                  <Icon name={item.icon} />
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

// Desktop: opens on hover (CSS) or click (state); closes on Escape or focus leaving.
// Phone menu: the button is hidden and the service list is always shown under a small label.
function NavDropdown({ link, onNavigate }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = link.children.some((child) => child.to === pathname);
  const menuId = `${link.label.toLowerCase()}-menu`;

  const navigate = () => {
    setOpen(false);
    onNavigate();
  };

  return (
    <div
      className="group/dd relative md:flex md:h-full md:items-center"
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={`link-line hidden items-center gap-1.5 px-4 py-2 text-ui font-medium [--line-inset:1rem] [--line-offset:0.25rem] md:flex md:group-hover/dd:[--line-scale:1] md:group-hover/dd:[--link-rest:var(--color-ink)]${isActive ? " active" : ""}`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
      >
        {link.label}
        <svg
          className={`size-2.5 fill-none stroke-current stroke-[1.75] transition-transform md:group-hover/dd:rotate-180 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      <p className="px-3 pt-5 pb-2 text-xs font-semibold tracking-[0.1em] text-muted uppercase md:hidden">
        {link.label}
      </p>

      <ul
        id={menuId}
        className={`flex flex-col gap-0.5 md:absolute md:top-full md:left-0 md:min-w-75 md:rounded-xl md:border md:border-line md:bg-white md:p-2 md:shadow-panel md:transition-[opacity,translate,visibility] ${
          open
            ? ""
            : "md:invisible md:translate-y-2 md:opacity-0 md:group-hover/dd:visible md:group-hover/dd:translate-y-0 md:group-hover/dd:opacity-100"
        }`}
      >
        {link.children.map((child) => (
          <li key={child.to}>
            <NavLink
              to={child.to}
              className="group/row flex items-center gap-4 rounded-lg px-3 py-3 text-ink transition-colors hover:bg-surface hover:text-blue active:bg-surface aria-[current=page]:bg-surface aria-[current=page]:text-blue md:px-3.5"
              onClick={navigate}
            >
              <span className="w-9 shrink-0 text-xs font-semibold tracking-[0.06em] text-muted">
                {child.label}
              </span>
              <span className="flex-1 text-base font-medium md:text-ui">
                {child.name}
              </span>
              <svg
                className="size-3.5 fill-none stroke-current stroke-[1.5] opacity-40 transition group-aria-[current=page]/row:opacity-100 md:-translate-x-1 md:opacity-0 md:group-hover/row:translate-x-0 md:group-hover/row:opacity-100 md:group-aria-[current=page]/row:translate-x-0 md:group-aria-[current=page]/row:opacity-100"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
