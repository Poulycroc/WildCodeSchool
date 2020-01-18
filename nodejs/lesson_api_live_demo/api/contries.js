const { get } = require('../helpers/api')

module.exports = {
  name: (string, callback) => {
    const name = string.replace('/', '')
    const path = 'name/' + name
    get(path, (res) => callback(res))
  }
}
