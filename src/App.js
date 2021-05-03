
import fs from 'fs';
import got from 'got';
import { JSDOM } from 'jsdom';
import { getComponents } from './ComponentParser'

export default async function App(argc, argv) {
  const url =
    argv[2] ||
    'https://docs.google.com/forms/d/e/1FAIpQLScn76mvJvXabga8xYr4Ydyx5PGXggDkNcJJACtO5JtzHccJtA/viewform?usp=sf_link';
    
  const response = await got(url);

  let dom = new JSDOM(response.body);
  const window = dom.window;
  const document = window.document;
  
  const scriptXPath = '/html/body/script[1]/text()';
  const scriptElement = document.evaluate(scriptXPath, document, null, 0, null);
  const script = scriptElement.iterateNext().textContent;

  let getAllData = new Function(script + '; return FB_PUBLIC_LOAD_DATA_; ');
  let allData = getAllData();
  let componentDataArray = allData[1][1];

  const components = getComponents(componentDataArray);

  // Print post param data of all components
  /*
  console.log(components.map(component => {
    return component.getPostData();
  }).filter(str => str != null && str.length > 0).join("&"));*/

  fs.writeFileSync('output.json', JSON.stringify(components.map(component => {
    return component.getComponentObject();
  }), null, 2));
}
