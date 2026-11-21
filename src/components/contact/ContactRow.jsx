import { useState } from "react";
import Icon from "../ui/Icon.jsx";

/**
 * Clickable contact row (navbar list-row pattern): round icon, small label, value;
 * on hover the row tints, the icon fills blue and an arrow slides in.
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
    <li className="group flex items-center rounded-xl transition-colors hover:bg-surface active:bg-surface">
      <a
        className="flex min-w-0 flex-1 items-center gap-3 py-3.5 pr-2 sm:gap-4 sm:p-4"
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-white text-blue transition-colors group-hover:border-blue group-hover:bg-blue group-hover:text-white">
          <Icon name={icon} />
        </span>
        <span className="flex min-w-0 flex-col gap-1">
          <span className="font-title text-xs font-semibold tracking-[0.06em] text-muted uppercase">
            {label}
          </span>
          <span className="flex flex-col text-base leading-[1.45] font-normal wrap-anywhere text-ink transition-colors group-hover:text-blue sm:text-md">
            {Array.isArray(value)
              ? value.map((line) => <span key={line}>{line}</span>)
              : value}
          </span>
        </span>
        {/* hover hint only: hidden on phones so the value gets the room */}
        <span
          className="ml-auto hidden -translate-x-1 text-blue opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 sm:inline"
          aria-hidden="true"
        >
          →
        </span>
      </a>
      {/* phones: a round icon button, so the value keeps its room; text button from sm */}
      {copy && (
        <button
          type="button"
          className={`grid size-10 shrink-0 place-items-center rounded-full border bg-white font-title text-xs font-semibold transition-colors sm:mr-3 sm:flex sm:size-auto sm:px-3 sm:py-1.5 ${
            copied
              ? "border-mint text-ink"
              : "border-line text-muted hover:border-blue hover:text-blue focus-visible:border-blue focus-visible:text-blue"
          }`}
          onClick={handleCopy}
          aria-label={copied ? "Copied" : `Copy ${copy}`}
        >
          <span className="sm:hidden">
            <Icon name={copied ? "check" : "copy"} className="size-4" />
          </span>
          <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
        </button>
      )}
    </li>
  );
}
