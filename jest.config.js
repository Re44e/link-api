// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  bail: true,
  clearMocks: true,
  coverageDirectory: "__tests__coverage",
  coverageProvider: "v8",
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*test.ts?(x)",
  ],
  preset: 'ts-jest',
  
};
