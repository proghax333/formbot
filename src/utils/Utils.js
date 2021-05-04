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

export function join(array, separator, filter)
{
  let result = array;
  if(filter)
  {
    result = array.filter(filter);
  }
  result = result.filter(str => {
    return str !== null && str != '';
  });
  return result.join(separator);
}

export function getPostParam(key, value) {
  return `entry.${key}=${value}`;
}

export function getMultipleChoiceList(component) {
  const componentData = component.componentData;
  return componentData[0][1].map((option) => {
    return {
      title: option[0],
      isTicked: false,
    };
  });
}

export function getGridChoiceList(component) {
  const componentData = component.componentData;
  const choices = [];

  componentData.forEach((option) => {
    const title = option[3][0];
    const postId = option[0];
    const subChoices = option[1];

    choices.push({
      postId: postId,
      title: title,
      choices: subChoices.map((choice) => {
        return {
          title: choice[0],
          isTicked: false,
        };
      }),
    });
  });

  return choices;
}

export function getTextChoiceList(component)
{
  return {
    value: ""
  };
}
