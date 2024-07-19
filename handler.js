'use strict';

const Url = require('./models/urls').Url
const uuidv4 = require('uuid/v4')
const helper = require('./helper')

module.exports.list = async (event) => {
  let urls = await Url.scan().exec()

  console.log(urls)
};


module.exports.generate = async (event) => {
  const body = JSON.parse(event.body)

  const originalUrl = body.original_url
  const id = uuidv4()

  const params = {
    id: id,
    original_url: originalUrl,
    shortened_url: `${process.env.BASE_URL}/${process.env.STAGE}/s-link/${id}`,
    createdAt: helper.timestamp(),
    updatedAt: helper.timestamp()
  }

  console.log(params)
}

module.exports.redirect = async (event) => {

}

