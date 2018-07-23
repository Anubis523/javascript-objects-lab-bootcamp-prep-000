var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
  let tempObj = {...object}
  tempObj[key] = value
  return tempObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}