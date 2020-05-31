function getTypeString(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function isString(o) {
  return getTypeString(o) === 'String';
}

function isNumber(o) {
  return getTypeString(o) === 'Number';
}

function isBoolean(o) {
  return getTypeString(o) === 'Boolean';
}

function isUndefined(o) {
  return getTypeString(o) === 'Undefined';
}

function isNull(o) {
  return getTypeString(o) === 'Null';
}

function isObject(o) {
  return getTypeString(o) === 'Object';
}

function isArray(o) {
  return getTypeString(o) === 'Array';
}

function isFunction(o) {
  return getTypeString(o) === 'Function';
}

function isSymbol(o) {
  return getTypeString(o) === 'Symbol';
}

function isSet(o) {
  return getTypeString(o) === 'Set';
}

function isDate(o) {
  return getTypeString(o) === 'Date';
}

function isRegExp(o) {
  return getTypeString(o) === 'RegExp';
}

function isPromise (o) {
  return getTypeString(o) === 'Promise';
}

function isError(o) {
  return getTypeString(o) === 'Error';
}