const debug = require("debug")("randomizationService");

const pickRandomIndex = arrayLength => Math.floor(Math.random() * arrayLength);

const pickRandomExercise = exerciseModels => {
  const randomIndex = pickRandomIndex(exerciseModels.length);
  debug(`Picking an exercise with a random index of ${randomIndex}`);
  return exerciseModels[randomIndex];
};

module.exports = {
  pickRandomExercise
};
