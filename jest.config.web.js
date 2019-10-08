module.exports = {
  setupFiles: ['enzyme-react-16-adapter-setup'],
  testRegex: '\\.web\\.test\\.js$',
  transform: {
    '^.*.js(x)?$': '<rootDir>/test-transformer.web.js',
  },
};
