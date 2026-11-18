import "./DataTable.css";
import Section from "../ui/Section.jsx";

/**
 * "Technical snapshot": parameter | typical value | what it means.
 * headers = the three column titles; rows = { param, value, meaning }.
 * Stacks into one card per row on phones.
 */
export default function SpecTable({ title, subtitle, headers, rows, note, tone }) {
  return (
    <Section tone={tone} title={title} subtitle={subtitle} note={note}>
      <div className="table-wrap">
        <table className="data-table data-table--specs">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.param}>
                <th scope="row">{row.param}</th>
                <td className="data-table__value">{row.value}</td>
                <td>{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
