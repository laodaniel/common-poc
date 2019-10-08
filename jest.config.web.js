module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/setup-tests.js',
  ],
  testRegex: '\\.web\\.test\\.js$',
  transform: {
    '^.*.js(x)?$': '<rootDir>/test-transformer.web.js',
  },
};
