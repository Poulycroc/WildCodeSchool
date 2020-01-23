/**
 * @author Maxime Bartier <maxime@wildcodeshool.be>
 */

/**
 * Build a string from object 
 * @param {Object} obj - object to convert 
 * @return {String}
 */
const rendSqlQuery = (obj) => {
  let columns = [] 
  let values = []

  Object.keys(obj).forEach((key) => {
    columns.push(key)
    values.push(obj[key])
  })

  return `INSERT INTO table_name (${joinKeys(columns)}) VALUES (${joinKeys(values)});`
}

/**
 * Helpers for joins table in the query string
 * @param {Array} array - Array to join
 */
const joinKeys = (array) => {
  return array.join(', ')
}

rendSqlQuery({
  column1: 'value1',
  column2: 'value2',
  column3: 'value3',
  column4: 'value4'
})