module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.ts"],
  collectCoverage: true, // 生成测试覆盖率
  coverageDirectory: "coverage",
};
