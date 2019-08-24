# Hackerrank motivator

## Background

After talking to a friend, we concluded that it would be nice to be able to get a daily reminder to do a hackerrank challenge.  
This way, it would be easier to build up a routine of solving challenges.  
As a bonus, the challenge could be already selected by random, so that you didn't have to do a choice by yourself, if you didn't want to.

The result is this repository.  
I am sure that this kind of service probably already exist somewhere, but I thought it would be a fun project to do myself.

## Decription

This project can be run locally, or put on AWS lambda to run at a schedule.

It makes a request to hackerrank to get a set of challenges. Then it chooses an exercise by random and sends out a mail.

## Links

[Goal](documentation/goal.md) - Describes the goal of the project and tries to do a breakdown of the problem. This was the first file that I created.

[Hackerrank api info](documentation/hackerrank.md) - Describes a way of getting hold of information from Hackerrank.

## Installation

### AWS Preparation

This project is using AWS SNS (Simple notification service) to send out the mails.  
Before being able to run the project, you need an AWS account.  
Then you need to create an SNS topic and an email subscription to that topic.  
(I will try to automate this part later, with the help of a CloudFormation template).

You need to have an AWS profile locally in your `[homefolder]/.aws`.  
(Use the AWS cli and follow the steps in this link: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html).

### Run locally

```
npm install

cp .env.examples .env

# Then modify values inside of .env
#
# DEBUG isn't that important. Read about how it works here `https://www.npmjs.com/package/debug`
# TOPIC_ARN should be the ARN to your created topic
# AWS_PROFILE should be the name of your AWS profile (in sync with what is in your `.aws/credentials` file)
# AWS_REGION should be the AWS region where your topic is located

npm start
```

### Run on AWS Lambda

```
npm install -g serverless

npm install
cd serverless
serverless deploy
```

## Testing

This project is using Jest for testing (https://jestjs.io/).

```
npm run test
```
