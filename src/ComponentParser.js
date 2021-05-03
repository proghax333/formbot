
import FormComponentFactory from './factory/FormComponentFactory.js';

export function getComponents(componentDataArray)
{
  const components = []

  for (const component of componentDataArray) {
    const type = component[3];
    const componentData = component[4];
    const jsonData = component;

    if (componentData) {
      const data = {
        type,
        jsonData,
        componentData
      };

      components.push(FormComponentFactory(data));
    }
  }

  return components;
}
