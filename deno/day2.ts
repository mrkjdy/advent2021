import { readlines } from "./support.ts";

enum CommandName {
  FORWARD = "forward",
  DOWN = "down",
  UP = "up",
}

const isCommandName = (n: unknown): n is CommandName =>
  Object.values(CommandName).includes(n as CommandName);

type Command = [command: CommandName, distance: number];

const _part1 = (commands: Command[]): number => {
  let x = 0;
  let y = 0;
  for (const command of commands) {
    switch (command[0]) {
      case "forward":
        x += command[1];
        break;
      case "down":
        y += command[1];
        break;
      case "up":
        y -= command[1];
        break;
    }
  }
  return x * y;
};

const part2 = (commands: Command[]): number => {
  let x = 0;
  let depth = 0;
  let aim = 0;
  for (const command of commands) {
    switch (command[0]) {
      case "forward":
        x += command[1];
        depth += aim * command[1];
        break;
      case "down":
        aim += command[1];
        break;
      case "up":
        aim -= command[1];
        break;
    }
  }
  return x * depth;
};

const parseline = (line: string): Command => {
  const words = line.split(" ", 2);
  if (words.length !== 2 || !isCommandName(words[0])) {
    throw new Error(`Unable to parse line: "${line}"`);
  }
  return [words[0], Number.parseInt(words[1])];
};

console.log(part2((await readlines()).map(parseline)));
