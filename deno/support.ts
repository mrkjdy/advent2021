/**
 * Reads a line from the terminal
 *
 * @param message Text to start the line with
 * @returns a string
 */
export const readline = async (message = "") => {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(message));
  const n = <number> await Deno.stdin.read(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
};

/**
 * Reads lines until the sentinel line is found
 * @param sentinel string to stop at
 * @returns a string array
 */
export const readlines = async (sentinel = ""): Promise<string[]> => {
  const lines = [];
  let line = await readline();
  while (line !== sentinel) {
    lines.push(line);
    line = await readline();
  }
  return lines;
};

/**
 * Returns a series of numbers from start to end
 * @param start the number to start at
 * @param end the number to stop before
 * @param step amount to increase by
 */
export function* range(start: number, end: number, step = 1) {
  for (let i = start; i < end; i += step) yield i;
}
