const AWS = require("aws-sdk");
const sns = new AWS.SNS({
  apiVersion: "2010-03-31",
  region: process.env.AWS_REGION
});

const debug = require("debug")("emailService");
const config = require("./config");

/**
 * Uses SNS to trigger a topic and send out an email to the subscribers.
 *
 * @param {*} body
 * @param {*} subject
 */
const sendEmail = (body, subject) => {
  const params = {
    Message: body,
    Subject: subject || config.email.SUBJECT,
    TopicArn: config.SNS.TOPIC_ARN
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
