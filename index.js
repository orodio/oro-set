var update = require("oro-update")

module.exports = function set (cursor, value) {
  return update(cursor, function _set () { return value })
}
