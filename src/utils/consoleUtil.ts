/* eslint-disable @typescript-eslint/no-explicit-any */

const ENABLE_CONSOLE = true;

export const consoleUtil = {
  log: (...args: any[]) => {
    if (!ENABLE_CONSOLE) return;
    console.log(...args);
  },
  warn: (...args: any[]) => {
    if (!ENABLE_CONSOLE) return;
    console.warn(...args);
  },
};
