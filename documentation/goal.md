# The goal of this project

## User story

> As a user, I want to get daily problems from hackerrank, so that I can get into a routine of solving exercises.

## Problem description

I want to get daily emails with a link to a random hackerrank problem.  
The email should be sent at 07.00 and the same problem should never be sent twice.

## Problem breakdown

The sub problems that needs to be solved are:

- Being able to get information from the hackerrank site.  
  E.g asking for a random problem or getting a list of problems and then picking a problem at random ourselves.
  _ Get problems from hackerrank
  _ Randomizing a selected problem \* Find the url to the selected problem
- Construct or choose an email mechanism
- Email the problem url to a set of users
- Automate the process to occur every day at 07.00

## Technologies

I will try to solve this problem with the help of AWS technologies.  
This is because I want to get better at creating solutions with AWS and it feels like a quick way to get something up and running.

### AWS - system design

Services that can be used:

- lambda  
  Can be triggered by a cron job, and run all of the code necessary to getting hold of and choosing a problem. Can then trigger the email mechanism.
- SES - Simple email service  
  Can be used to send the email to a set of addresses.
- S3 (Extra)  
  Can be used to store state in a simple file. No need for a database at the start.
- Cloud formation (Extra)  
  Can be used to automate the setup of the AWS technologies.
