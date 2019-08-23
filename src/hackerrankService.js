const axios = require("axios");

const HACKERRANK_BASE_URL =
  "https://www.hackerrank.com/rest/contests/master/tracks";

const HACKERRANK_CHALLENGE_TYPES = new Set(["algorithms", "data-structures"]);

const createHackerrankUrl = (type, numberOfResults) =>
  `${HACKERRANK_BASE_URL}/${type}/challenges?offset=0&limit=${numberOfResults}`;

const isValidHackerrankChallengeType = type =>
  HACKERRANK_CHALLENGE_TYPES.has(type);

const getExercises = async (type = "algorithms", numberOfResults = 100) => {
  const isValidType = isValidHackerrankChallengeType(type);

  if (!isValidType) {
    throw new Error(
      `Someone asked for a list of exercises of an unknown type: "${type}"`
    );
  }

  const listOfChallengesUrl = createHackerrankUrl(type, numberOfResults);

  const listOfChallenges = await axios.get(listOfChallengesUrl);
  return listOfChallenges;
};

const getChallengeUrl = () => {};

module.exports = {
  getExercises,
  getChallengeUrl,
  createHackerrankUrl,
  isValidHackerrankChallengeType
};
