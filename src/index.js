import fs from 'fs';
import got from 'got';
import { JSDOM } from 'jsdom';

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
  } catch (e) {
    console.error(e);
  }

  const window = dom.window;
  const document = window.document;

  const scriptXPath = '/html/body/script[1]/text()';
  const scriptElement = document.evaluate(scriptXPath, document, null, 0, null);
  const script = scriptElement.iterateNext().textContent;

  let getAllData = new Function(script + '; return FB_PUBLIC_LOAD_DATA_; ');
  let allData = getAllData();
  let componentDataArray = allData[1][1];

  const components = [];

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
    //console.log(data);
  }
  fs.writeFileSync('data.json', JSON.stringify(components, null, 2));

  //fs.writeFileSync('./response.html', response.body);
  //console.log(components);
}
