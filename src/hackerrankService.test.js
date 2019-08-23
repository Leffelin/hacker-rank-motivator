const hackerrankService = require("./hackerrankService");

test("Should be able to construct a url to get a list of problems", () => {
  const url = hackerrankService.createHackerrankUrl("algorithms", 20);

  expect(url).toBe(
    "https://www.hackerrank.com/rest/contests/master/tracks/algorithms/challenges?offset=0&limit=20"
  );
});

test("Should recognize 'algorithms' as valid challenge type", () => {
  const isValid = hackerrankService.isValidHackerrankChallengeType(
    "algorithms"
  );

  expect(isValid).toBeTruthy();
});

test("Should recognize 'data-structures' as valid challenge type", () => {
  const isValid = hackerrankService.isValidHackerrankChallengeType(
    "data-structures"
  );

  expect(isValid).toBeTruthy();
});

test("Should be able to get a list of challenges", () => {
  return hackerrankService.getExercises().then(exercises => {
    expect(exercises).toBeDefined();
  });
});

test("Should be able to create a challenge url from an exerciseModel", () => {
  const exerciseModel = {
    slug: "some-slug"
  };

  const challengeUrl = hackerrankService.getChallengeUrl(exerciseModel);
  expect(challengeUrl).toBe(
    `https://www.hackerrank.com/challenges/some-slug/problem`
  );
});
