export default function ContributionGraph() {
  const levels = generateLevels();
  const total = 1128;

  const monthLabels = MONTHS.map((m, i) => ({
    label: m,
    col: Math.round((i / 12) * WEEKS),
  }));

  return (
    <div className="rounded-md border border-line bg-canvas p-4">
      <p className="mb-3 text-sm text-muted">
        <span className="font-medium text-fg">{total.toLocaleString()}</span>{" "}
        contributions in the last year
      </p>

      <div className="overflow-x-auto pb-1">
        <div className="inline-block min-w-max">
          {/* Month labels */}
          <div
            className="mb-1 grid"
            style={{
              gridTemplateColumns: `repeat(${WEEKS}, 11px)`,
              gap: "3px",
            }}
          >
            {Array.from({ length: WEEKS }).map((_, col) => {
              const m = monthLabels.find((x) => x.col === col);
              return (
                <span
                  key={col}
                  className="h-3 text-[10px] leading-3 text-muted"
                >
                  {m ? m.label : ""}
                </span>
              );
            })}
          </div>

          {/* Cells: 53 columns (weeks) × 7 rows (days) */}
          <div
            className="grid grid-flow-col grid-rows-7"
            style={{
              gap: "3px",
              gridTemplateColumns: `repeat(${WEEKS}, 11px)`,
            }}
          >
            {Array.from({ length: WEEKS }).map((_, week) =>
              Array.from({ length: DAYS }).map((_, day) => {
                const level = levels[week * DAYS + day];
                return (
                  <div
                    key={`${week}-${day}`}
                    className={`lvl-${level} h-[11px] w-[11px] rounded-[2px]`}
                    title={`${level === 0 ? "No" : level} contribution${level === 1 ? "" : "s"}`}
                  />
                );
              }),
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-2 flex items-center justify-end gap-1 text-[11px] text-muted">
        <span className="mr-1">Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <div key={l} className={`lvl-${l} h-[11px] w-[11px] rounded-[2px]`} />
        ))}
        <span className="ml-1">More</span>
      </div>
    </div>
  );
}

const WEEKS = 53;
const DAYS = 7;
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateLevels(): number[] {
  const rand = mulberry32(20260610);
  const cells: number[] = [];
  for (let i = 0; i < WEEKS * DAYS; i++) {
    const r = rand();
    let level = 0;
    if (r > 0.55) level = 1;
    if (r > 0.72) level = 2;
    if (r > 0.86) level = 3;
    if (r > 0.95) level = 4;
    cells.push(level);
  }
  return cells;
}
