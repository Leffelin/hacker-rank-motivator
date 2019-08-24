"use strict";

// The src folder is being inserted by the serverless framework.
// This code is intended to run on a lambda, not locally.
const app = require("./src/index");

module.exports.sendOutChallenge = async event => {
  app.run();
};
