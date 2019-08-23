require("dotenv").config();
const debug = require("debug")("index");
const hackerrankService = require("./hackerrankService");
const randomizationService = require("./randomizationService");
const emailService = require("./emailService");

const run = async () => {
  debug(`Starting a new run`);

  const exerciseModels = await hackerrankService.getExercises(
    "algorithms",
    100
  );

  const randomExercise = randomizationService.pickRandomExercise(
    exerciseModels
  );

  const exerciseUrl = hackerrankService.getChallengeUrl(randomExercise);

  await emailService.sendEmail(exerciseUrl);

  debug("Done!");
};

run();
