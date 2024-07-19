const moment = require('moment-timezone')

module.exports.timestamp = () => {
  return Number(moment.tz(new Date(), "Asia/Singapore"))
}

module.exports.respondCollection = (objects) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        results: objects
      },
      status: {
        'code': 200,
        'errorDetail': '',
        'message': 'OK',
      }
    })
  }
}

module.exports.respondObject = (object) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        result: object
      },
      status: {
        'code': 200,
        'errorDetail': '',
        'message': 'OK',
      }
    })
  }
}

module.exports.respondNotFound = () => {
  return {
    statusCode: 404,
    body: JSON.stringify({
      data: {
        message: "Record Not Found"
      },
      status: {
        'code': 404,
        'errorDetail': '',
        'message': 'OK',
      }
    })
  }
}