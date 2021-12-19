import { range, readlines } from "./support.ts";

const part1 = (measurements: number[]): number => {
  let count = 0;
  for (const i of range(0, measurements.length - 1)) {
    if (measurements[i + 1] > measurements[i]) count++;
  }
  return count;
};

const part2 = (measurements: number[]): number =>
  part1(
    measurements
      .map((_, i, ms) => ms[i] + (ms[i + 1] ?? 0) + (ms[i + 2] ?? 0))
      .slice(0, measurements.length - 1),
  );

const parselines = (lines: string[]) =>
  lines.map((l) => Number.parseInt(l, 10));

console.log(part2(parselines(await readlines())));
