import Section from "../ui/Section.jsx";
import { TABLE } from "./tableStyles.js";

/**
 * "Technical snapshot": parameter | typical value | what it means.
 * headers = the three column titles; rows = { param, value, meaning }.
 * Below md each row is a card: parameter, blue value, meaning.
 */
export default function SpecTable({ title, subtitle, headers, rows, note, tone }) {
  return (
    <Section tone={tone} title={title} subtitle={subtitle} note={note}>
      <div className={TABLE.frame}>
        <table className={TABLE.table}>
          <thead className={TABLE.head}>
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col" className={`${TABLE.headCell} bg-navy-deep`}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={TABLE.body}>
            {rows.map((row) => (
              <tr key={row.param} className={TABLE.row}>
                <th scope="row" className={`${TABLE.rowHead} md:w-[24%]`}>
                  {row.param}
                </th>
                <td className={`${TABLE.cell} mt-1 font-title font-medium text-blue md:w-[30%]`}>
                  {row.value}
                </td>
                <td className={`${TABLE.cell} mt-1.5 text-muted`}>{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
