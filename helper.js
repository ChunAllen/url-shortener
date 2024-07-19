const moment = require('moment-timezone')

module.exports.timestamp = () => {
  return Number(moment.tz(new Date(), "Asia/Singapore"))
}