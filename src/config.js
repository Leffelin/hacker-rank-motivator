module.exports = {
  hackerrank: {
    NUMBER_OF_CHALLENGES_TO_RETRIEVE: 100,
    HACKERRANK_BASE_URL:
      "https://www.hackerrank.com/rest/contests/master/tracks",
    HACKERRANK_CHALLENGE_TYPES: ["algorithms", "data-structures"]
  },
  email: {
    SUBJECT: "Your daily hackerrank challenge!"
  },
  SNS: {
    TOPIC_ARN: process.env.TOPIC_ARN
  }
};
