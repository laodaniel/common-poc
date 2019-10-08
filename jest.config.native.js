module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/setup-tests.js',
  ],
  testRegex: '\\.native\\.test\\.js$',
  transform: {
    '^.*.js(x)?$': '<rootDir>/test-transformer.native.js',
  },
};
