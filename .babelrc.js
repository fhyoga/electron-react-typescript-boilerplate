module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { electron: require("electron/package.json").version }
      }
    ]
  ],
  plugins: ["@babel/plugin-transform-runtime"]
};
