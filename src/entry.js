require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});
require("babel-core/register");
require("babel-polyfill");

const { main } = require('./index');
main();