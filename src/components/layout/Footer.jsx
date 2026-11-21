import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { navLinks } from "../../data/navLinks.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface px-(--gutter) py-10 text-center text-muted">
      <div className="mx-auto flex max-w-200 flex-col items-center gap-6">
        <img className="block h-auto w-30" src={logo} alt="Rapid Proto Tech" />

        {/* links + divider + LinkedIn on one centred row; stacked on phones */}
        <div className="flex flex-col items-center justify-center gap-x-7 gap-y-3 sm:flex-row sm:flex-wrap">
          <nav aria-label="Main Footer Navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-7">
              {navLinks
                .flatMap((link) => link.children ?? link)
                .map((link) => (
                  <li key={link.to}>
                    {/* py-2 = a comfortable tap target; the line sits 4px below the text */}
                    <Link
                      to={link.to}
                      className="link-line block py-2 font-title leading-normal font-medium [--line-offset:0.25rem]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <span className="hidden h-5 w-px bg-line sm:block" aria-hidden="true" />

          <a
            className="group grid size-11 place-items-center rounded-full border border-line bg-white transition-colors hover:border-blue sm:size-9"
            href="https://www.linkedin.com/company/rapid-proto-tech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our LinkedIn Profile"
          >
            <svg
              className="block size-4 fill-muted transition-colors group-hover:fill-blue"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <p className="text-sm text-muted">
          &copy; {year} Rapid Proto Tech India Private Limited.
        </p>
      </div>
    </footer>
  );
}
