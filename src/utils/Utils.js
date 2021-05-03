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

export function getPostParam(key, value) {
  return `entry.${key}=${value}`;
}

export function getMultipleChoiceList(componentData) {
  return componentData[0][1].map((option) => {
    return {
      title: option[0],
      isTicked: false,
    };
  });
}

export function getGridChoiceList(componentData) {
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
          isTicked: false,
          value: choice[0],
        };
      }),
    });
  });

  return choices;
}

export function getTextChoiceList(componentData)
{
  return {
    value: ""
  };
}
