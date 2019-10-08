const { transform } = require('@babel/core');

module.exports = {
  process(src, filename) {
    const result = transform(src, {
      filename,
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    });
    return result ? result.code : src;
  },
};
