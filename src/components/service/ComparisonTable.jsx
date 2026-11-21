import { Link } from "react-router-dom";
import Section from "../ui/Section.jsx";
import { TABLE } from "./tableStyles.js";
import { findService } from "../../data/services/index.js";

/**
 * "Process comparison": criteria rows × process columns.
 * columns = [{ key, label, highlight? }]  (`highlight` marks the current page's
 *            column; any other column whose key is a service code, e.g. "sla",
 *            links its header to that service page)
 * rows    = [{ criteria, values: { [column.key]: text } }]
 * Also used for other row × column data (e.g. the SRM material guide), with
 * `criteriaLabel` naming the first column.
 * Below md each criterion becomes a card listing every column's value under its label.
 */
export default function ComparisonTable({
  title,
  subtitle,
  criteriaLabel = "Criteria",
  columns,
  rows,
  note,
  tone,
}) {
  const linkTo = (col) => !col.highlight && findService(col.key)?.route;

  // Column name: a link to that service page where there is one
  const label = (col, className) =>
    linkTo(col) ? (
      <Link to={linkTo(col)} className={className}>
        {col.label}
      </Link>
    ) : (
      col.label
    );

  return (
    <Section tone={tone} title={title} subtitle={subtitle} note={note}>
      <div className={TABLE.frame}>
        <table className={TABLE.table}>
          <thead className={TABLE.head}>
            <tr>
              <th scope="col" className={`${TABLE.headCell} w-[19%] bg-navy-deep`}>
                {criteriaLabel}
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={`${TABLE.headCell} w-[27%] ${col.highlight ? "bg-blue" : "bg-navy-deep"}`}
                >
                  {label(
                    col,
                    "border-b border-white/35 transition-colors hover:border-current",
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={TABLE.body}>
            {rows.map((row) => (
              <tr key={row.criteria} className={TABLE.row}>
                <th scope="row" className={`${TABLE.rowHead} pb-1.5`}>
                  {row.criteria}
                </th>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`${TABLE.cell} py-2 ${
                      col.highlight
                        ? "bg-blue/6 text-ink max-md:-mx-3 max-md:rounded-lg max-md:px-3"
                        : "text-muted"
                    }`}
                  >
                    {/* phones: the column name above each value */}
                    <span
                      className={`block font-title text-xs font-semibold tracking-[0.08em] uppercase md:hidden ${col.highlight ? "text-blue" : "text-muted"}`}
                    >
                      {label(col, "underline decoration-current/40 underline-offset-3")}
                    </span>
                    {row.values[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
