const debug = require("debug")("hackerrankService");
const axios = require("axios");
const config = require("./config");

/**
 * Constructs a hackerrank challenge url, which can be used to get hold of a list of exercises.
 *
 * @param {*} type
 * @param {*} numberOfResults
 */
const createHackerrankUrl = (type, numberOfResults) => {
  const url = `${
    config.hackerrank.HACKERRANK_BASE_URL
  }/${type}/challenges?offset=0&limit=${numberOfResults}`;

  debug(
    `Type: "${type}", numbersOfResults: "${numberOfResults}" - Results in created url: "${url}"`
  );

  return url;
};

/**
 * Checks if a supplied challenge type is allowed.
 *
 * @param {*} type
 */
const isValidHackerrankChallengeType = type => {
  const allowedTypes = new Set(config.hackerrank.HACKERRANK_CHALLENGE_TYPES);
  return allowedTypes.has(type);
};

/**
 * Makes a request to hackerrank and returns a list of exerciseModels.
 *
 * @param {*} type
 * @param {*} numberOfResults
 */
const getExercises = (type = "algorithms", numberOfResults = 100) => {
  const isValidType = isValidHackerrankChallengeType(type);

  if (!isValidType) {
    throw new Error(
      `Someone asked for a list of exercises of an unknown type: "${type}"`
    );
  }

  const listOfChallengesUrl = createHackerrankUrl(type, numberOfResults);

  debug(`Getting hold of exercises from: "${listOfChallengesUrl}"`);

  return axios
    .get(listOfChallengesUrl)
    .then(result => {
      const listOfChallenges = result.data.models;
      return listOfChallenges;
    })
    .catch(error => debug(error));
};

/**
 * Calculates a specific challenge's url, from an exerciseModel.
 *
 * @param {*} exerciseModel
 */
const getChallengeUrl = exerciseModel => {
  const slug = exerciseModel.slug;
  return `https://www.hackerrank.com/challenges/${slug}/problem`;
};

module.exports = {
  getExercises,
  getChallengeUrl,
  createHackerrankUrl,
  isValidHackerrankChallengeType
};
