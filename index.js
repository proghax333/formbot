require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});
const { main } = require('./src/index');
main();