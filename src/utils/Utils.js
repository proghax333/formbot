export function collect(object, mapper, separator) {
  let keys = Object.keys(object);
  let values = Object.values(object);
  let result = '';

  if (keys.length !== 0) {
    result += mapper(keys[0], values[0]);
    for (let i = 1; i < keys.length; ++i) {
      result += separator + mapper(keys[i], values[i]);
    }
  }

  return result;
}

export function getPostParam(key, value)
{
  return `entry.${key}=${value}`;
}
