const AWS = require("aws-sdk");
const sns = new AWS.SNS({
  apiVersion: "2010-03-31",
  region: process.env.AWS_REGION
});

const EMAIL_SUBJECT = "Your daily hackerrank challenge!";
const TOPIC_ARN = process.env.TOPIC_ARN;

const sendEmail = (body, recepients) => {
  const params = {
    Message: body,
    Subject: EMAIL_SUBJECT,
    TopicArn: TOPIC_ARN
  };

  return sns
    .publish(params)
    .promise()
    .then(data => console.log(data))
    .catch(err => console.log(err, err.stack));
};

module.exports = {
  sendEmail
};
