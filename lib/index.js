/**
 * Created by tony on 3/18/17.
 */
'use strict'

/**
 * split the query parameters into query and options
 * query has the attributes not starts with "$"
 * options has the attributes starts with "$"
 * this helper method is used to create CRUD method or other user customized function for hanbao model
 * @param creteria
 * @returns {{query: {}, options: {}}}
 */
function splitCriteria(criteria){
  let query = {}
  let options = {}
  
  for (let key in creteria) {
    if(key.startsWith("$")){
      options[key] = creteria[key]
    }
    else{
      query[key] = creteria[key]
    }
  }
  
  return {
    query,
    options
  }
}

module.exports = {
  splitCriteria
}