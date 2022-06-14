const jestPreset = require("jest-preset-angular/jest-preset");

const { globals } = jestPreset;
const tsjest = globals["ts-jest"];

const tsjestOverride = {
  ...tsjest,
  tsconfig: "<rootDir>/tsconfig.spec.json",
};

const globalOverrides = {
  ...globals,
  "ts-jest": { ...tsjestOverride },
};

module.exports = {
  ...jestPreset,
  globals: { ...globalOverrides },
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
};
