// Shared classes for SpecTable and ComparisonTable.
// From md up they are real tables; below md every row becomes a stacked card.
export const TABLE = {
  frame: "overflow-hidden rounded-xl border border-line bg-white",
  table: "w-full border-collapse text-left",
  head: "hidden md:table-header-group",
  headCell:
    "px-6 py-4 font-title text-xs font-semibold tracking-[0.1em] text-white uppercase",
  body: "divide-y divide-line",
  row: "block px-5 py-4.5 transition-colors hover:bg-surface md:table-row md:p-0",
  rowHead:
    "block font-title text-md leading-[1.55] font-medium text-ink md:table-cell md:px-6 md:py-4.5 md:align-top md:text-ui",
  cell: "block text-ui leading-[1.55] md:mt-0 md:table-cell md:px-6 md:py-4.5 md:align-top",
};
