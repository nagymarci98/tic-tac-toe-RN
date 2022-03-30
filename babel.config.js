module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver", {
        alias: {
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@config": "./src/config",
          "@utils": "./src/utils",
          "@hooks": "./src/hooks",
          "@store": "./src/store",
          "@models": "./src/models",
          "@assets": "./assets",
        }
      }
    ]
  ]
};
