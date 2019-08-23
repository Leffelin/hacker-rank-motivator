require("dotenv").config();
const debug = require("debug")("index");
const hackerrankService = require("./hackerrankService");
const randomizationService = require("./randomizationService");
const emailService = require("./emailService");

const calculatePercent = decimal => Math.round(decimal * 10000) / 100;

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

  const today = new Date();
  const formattedDate = today.toDateString();

  const message = `Here is your hackerrank challenge for ${formattedDate}!
  
The name of the challenge is "${randomExercise.name.trim()}" and it is deemed "${
    randomExercise.difficulty_name
  }" to solve.
In fact.. ${calculatePercent(
    randomExercise.success_ratio
  )}% of the users that has tried this challenge, succeeded.

You can find the challenge at this url: ${exerciseUrl}

Good luck!

/HeadCraft`;

  await emailService.sendEmail(
    message,
    `Your daily hackerrank challenge - ${formattedDate} `
  );

  debug("Done!");
};

run();
