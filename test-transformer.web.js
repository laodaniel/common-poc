const { transform } = require('@babel/core');
const presetEnv = require('@babel/preset-env');
const presetReact = require('@babel/preset-react');

module.exports = {
  process(src, filename) {
    const result = transform(src, {
      filename,
      presets: [presetEnv, presetReact],
    });
    return result ? result.code : src;
  },
};
