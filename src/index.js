
require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});
require("@babel/register")
require("babel-polyfill");

const { main } = require('./main.js');
main();
