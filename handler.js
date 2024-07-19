'use strict';

const Url = require('./models/urls').Url
const uuidv4 = require('uuid/v4')
const helper = require('./helper')

module.exports.list = async (event) => {
  try {
    let urls = await Url.scan().exec()

    return helper.respondCollection(urls)
  } catch (error) {
    return helper.genericErrorMessage(error.message)
  }
};


module.exports.generate = async (event) => {
  try {
    const body = JSON.parse(event.body)

    const originalUrl = body.original_url
    const id = uuidv4()

    const params = {
      id: id,
      original_url: originalUrl,
      shortened_url: `${process.env.BASE_URL}/s/${id}`,
      createdAt: helper.timestamp(),
      updatedAt: helper.timestamp()
    }

    const url = new Url(params)

    await url.save()

    return helper.respondObject(params)
  } catch (error) {
    return helper.genericErrorMessage(error.message)
  }
}

module.exports.redirect = async (event) => {
  try {
    const id = (event.pathParameters) ? event.pathParameters.id : event.path.id

    let url = await Url.query({
      id: id
    }, {
      condition: 'attribute_exists(id)'
    }).exec()

    if (url[0]) {
      return helper.respondObject(url[0].original_url)
    } else {
      return helper.respondNotFound()
    }
  } catch (error) {
    return helper.genericErrorMessage(error.message)
  }
}

module.exports.genericErrorMessage = (message) => {
  return {
    statusCode: 422,
    body: JSON.stringify({
      status: {
        'code': 422,
        'errorDetail': message,
        'message': 'UNPROCESSABLE ENTITY'
      }
    })
  };
}