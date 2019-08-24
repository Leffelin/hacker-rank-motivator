"use strict";

// The src folder is being inserted by the serverless framework.
// That is why the path to the src directory does not seem to make sense here.
// This code is intended to run on a lambda, not locally.
// Locally, the entry point is src/main.js
const app = require("./src/index");

module.exports.sendOutChallenge = async event => {
  await app.run();
};
