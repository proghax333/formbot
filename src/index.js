import fs from 'fs';
import got from 'got';
import { JSDOM } from 'jsdom';
import * as xpath from 'xpath';

import FormComponentFactory from './factory/FormComponentFactory.js';

export async function main() {
  console.log(process.argv);
  const url =
    process.argv[2] ||
    'https://docs.google.com/forms/d/e/1FAIpQLScn76mvJvXabga8xYr4Ydyx5PGXggDkNcJJACtO5JtzHccJtA/viewform?usp=sf_link';
  const response = await got(url);

  let dom = undefined;
  try {
    dom = new JSDOM(response.body);
  } catch(e) {
    console.error(e)
  }
  const window = dom.window;
  const document = window.document;

  const elements = document.querySelectorAll(
    '.freebirdFormviewerViewNumberedItemContainer'
  );
  const components = [];

  for (const element of elements) {
    const heading = element.querySelector('div[role="heading"]');
    const dataParams = element.children[0].getAttribute('data-params');

    if (dataParams) {
      const dataString = dataParams.slice(4, dataParams.length);
      const jsonData = JSON.parse(`[${dataString}`)[0];
      const componentData = jsonData[4];

      //console.log(dataString);
      let postSubmitIds = componentData.map((x) => x[0]);
      let inputTypeId = jsonData[3];

      const data = {
        title: heading.textContent,
        type: inputTypeId,
        postSubmitIds,
        jsonData,
        componentData,
      };

      components.push(FormComponentFactory(data));
      //console.log(data);
    }
  }
  fs.writeFileSync('data.json', JSON.stringify(components, null, 2));
  

  //fs.writeFileSync('./response.html', response.body);
  //console.log(components);
}
