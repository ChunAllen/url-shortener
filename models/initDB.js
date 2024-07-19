'use strict';

const dynamoose = require('dynamoose');

module.exports.init = () => {
  if (process.env.STAGE == 'local') {
    const ddb = new dynamoose.aws.ddb.DynamoDB({
      "region": process.env.REGION
    });

    dynamoose.aws.ddb.set(ddb);

    dynamoose.aws.ddb.local("http://localhost:8000");
  }
  return dynamoose;
}
