import { useState } from "react";
import "./ContactRow.css";
import Icon from "../ui/Icon.jsx";

/**
 * Clickable contact row: icon, small label, value, arrow on hover.
 * value     string or array of lines
 * href      tel:/mailto:/https link; `external` opens it in a new tab
 * copy      optional text for a "Copy" button beside the row
 */
export default function ContactRow({ icon, label, value, href, external, copy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable: the link still works */
    }
  };

  return (
    <li className="contact-row">
      <a
        className="contact-row__link"
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <span className="contact-row__icon">
          <Icon name={icon} />
        </span>
        <span className="contact-row__text">
          <span className="contact-row__label">{label}</span>
          <span className="contact-row__value">
            {Array.isArray(value)
              ? value.map((line) => <span key={line}>{line}</span>)
              : value}
          </span>
        </span>
        <span className="contact-row__arrow" aria-hidden="true">
          →
        </span>
      </a>
      {copy && (
        <button
          type="button"
          className={`contact-row__copy${copied ? " contact-row__copy--done" : ""}`}
          onClick={handleCopy}
          aria-label={`Copy ${copy}`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      )}
    </li>
  );
}
