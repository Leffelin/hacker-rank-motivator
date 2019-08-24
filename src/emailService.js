const AWS = require("aws-sdk");
const sns = new AWS.SNS({
  apiVersion: "2010-03-31",
  region: process.env.AWS_REGION
});
const debug = require("debug")("emailService");

const EMAIL_SUBJECT = "Your daily hackerrank challenge!";
const TOPIC_ARN = process.env.TOPIC_ARN;

const sendEmail = (body, subject) => {
  const params = {
    Message: body,
    Subject: subject || EMAIL_SUBJECT,
    TopicArn: TOPIC_ARN
  };

  return sns
    .publish(params)
    .promise()
    .then(data => debug(data))
    .catch(err => debug(err, err.stack));
};

module.exports = {
  sendEmail
};
