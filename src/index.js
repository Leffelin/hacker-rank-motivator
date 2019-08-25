require("dotenv").config();
const debug = require("debug")("index");
const hackerrankService = require("./hackerrankService");
const randomizationService = require("./randomizationService");
const emailService = require("./emailService");
const config = require("./config");

/**
 * Transforms a decimal value to a percentage string.
 * E.g 0.9854 becomes "98.54%"
 *
 * @param {*} decimal
 */
const calculatePercentage = decimal => Math.round(decimal * 10000) / 100;

/**
 * Runs the application logic. Platform independent entrypoint.
 * Is used by both local execution and lambda execution.
 */
const run = async () => {
  debug(`Starting a new run`);

  const exerciseModels = await hackerrankService.getExercises(
    "algorithms",
    config.hackerrank.NUMBER_OF_CHALLENGES_TO_RETRIEVE
  );

  debug(
    `Asked for ${
      config.hackerrank.NUMBER_OF_CHALLENGES_TO_RETRIEVE
    } challenges. Got ${exerciseModels.length} back.`
  );

  const randomExercise = randomizationService.pickRandomExercise(
    exerciseModels
  );

  const exerciseUrl = hackerrankService.getChallengeUrl(randomExercise);

  const today = new Date();
  const formattedDate = today.toDateString();

  const message = `Here is your hackerrank challenge for ${formattedDate}!
  
The name of the challenge is "${randomExercise.name.trim()}" and it is deemed "${
    randomExercise.difficulty_name
  }" to solve.
In fact.. ${calculatePercentage(
    randomExercise.success_ratio
  )}% of the users that has tried this challenge, succeeded.

You can find the challenge at this url: ${exerciseUrl}

Good luck!

/HeadCraft`;

  console.log(message);

  await emailService.sendEmail(
    message,
    `Your daily hackerrank challenge - ${formattedDate} `
  );

  debug("Done!");
};

module.exports = {
  run
};
