require("dotenv").config();
const debug = require("debug")("index");
const hackerrankService = require("./hackerrankService");
const randomizationService = require("./randomizationService");

const run = async () => {
  debug(`Starting a new run`);

  const exerciseModels = await hackerrankService.getExercises(
    "algorithms",
    100
  );

  const randomExercise = randomizationService.pickRandomExercise(
    exerciseModels
  );

  debug("Done!");
};

run();
