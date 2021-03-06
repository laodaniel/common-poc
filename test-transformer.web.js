const { transform } = require('@babel/core');

module.exports = {
  process(src, filename) {
    const result = transform(src, {
      filename,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    });
    return result ? result.code : src;
  },
};
