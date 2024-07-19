'use strict';

const dynamoose = require('./initDB')

const Schema = dynamoose.init().Schema;

const schemaDefinition = {
  id: {
    type: String,
    hashKey: true
  },
  original_url: {
    type: String,
    required: true
  },
  shortened_url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number
  },
  updatedAt: {
    type: Number
  }
}

const urlSchema = new Schema(schemaDefinition, { saveUnknown: true });

const Url = dynamoose.init().model('urls', urlSchema, { create: false, update: false });

exports.Url = Url;