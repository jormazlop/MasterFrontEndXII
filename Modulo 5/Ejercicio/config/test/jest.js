module.exports = {
  rootDir: '../../',
  moduleDirectories: ["node_modules", "src"],
  verbose: true,
  restoreMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts']
};
