module.exports = {
  preset: 'react-native',
  setupFiles: ['enzyme-react-16-adapter-setup'],
  testRegex: '\\.native\\.test\\.js$',
  transform: {
    '^.*.js(x)?$': '<rootDir>/test-transformer.native.js',
  },
};
