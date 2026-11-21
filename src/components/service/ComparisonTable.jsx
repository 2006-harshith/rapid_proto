import { Link } from "react-router-dom";
import "./DataTable.css";
import Section from "../ui/Section.jsx";
import { findService } from "../../data/services/index.js";

/**
 * "Process comparison": criteria rows × process columns.
 * columns = [{ key, label, highlight? }]  (`highlight` marks the current page's
 *            column; any other column whose key is a service code, e.g. "sla",
 *            links its header to that service page)
 * rows    = [{ criteria, values: { [column.key]: text } }]
 * Also used for other row × column data (e.g. the SRM material guide), with
 * `criteriaLabel` naming the first column.
 * Scrolls sideways inside its frame on phones.
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
  const hl = (col) => (col.highlight ? "data-table__hl" : undefined);
  const linkTo = (col) => !col.highlight && findService(col.key)?.route;

  return (
    <Section tone={tone} title={title} subtitle={subtitle} note={note}>
      <div className="table-wrap table-wrap--scroll">
        <table className="data-table data-table--compare">
          <thead>
            <tr>
              <th scope="col">{criteriaLabel}</th>
              {columns.map((col) => (
                <th key={col.key} scope="col" className={hl(col)}>
                  {linkTo(col) ? (
                    <Link to={linkTo(col)} className="data-table__link">
                      {col.label}
                    </Link>
                  ) : (
                    col.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.criteria}>
                <th scope="row">{row.criteria}</th>
                {columns.map((col) => (
                  <td key={col.key} className={hl(col)}>
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
