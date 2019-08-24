const debug = require("debug")("hackerrankService");
const axios = require("axios");

const HACKERRANK_BASE_URL =
  "https://www.hackerrank.com/rest/contests/master/tracks";

const HACKERRANK_CHALLENGE_TYPES = new Set(["algorithms", "data-structures"]);

const createHackerrankUrl = (type, numberOfResults) => {
  const url = `${HACKERRANK_BASE_URL}/${type}/challenges?offset=0&limit=${numberOfResults}`;

  debug(
    `Type: "${type}", numbersOfResults: "${numberOfResults}" - Results in created url: "${url}"`
  );
  return url;
};

const isValidHackerrankChallengeType = type =>
  HACKERRANK_CHALLENGE_TYPES.has(type);

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
      debug(`Received: "${listOfChallenges}"`);

      return listOfChallenges;
    })
    .catch(error => debug(error));
};

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
