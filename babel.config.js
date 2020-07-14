module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "es2015", "react"],
  };
};
