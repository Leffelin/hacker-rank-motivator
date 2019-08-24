const debug = require("debug")("randomizationService");

/**
 * Given a number, this function will pick a new random number between 0 and the input.
 *
 * @param {*} arrayLength
 */
const pickRandomIndex = arrayLength => Math.floor(Math.random() * arrayLength);

/**
 * Given a list of exerciseModels, this function will pick one random exerciseModel and return it.
 *
 * @param {*} exerciseModels
 */
const pickRandomExercise = exerciseModels => {
  const randomIndex = pickRandomIndex(exerciseModels.length);
  debug(`Picking an exercise with a random index of ${randomIndex}`);
  return exerciseModels[randomIndex];
};

module.exports = {
  pickRandomExercise
};
