import got from 'got';
import { JSDOM } from 'jsdom';
import { getComponents } from './ComponentParser';

export async function FormParser(url) {
  try {
    const response = await got(url);

    let dom = new JSDOM(response.body);
    const window = dom.window;
    const document = window.document;

    const scriptXPath = '/html/body/script[1]/text()';
    const scriptElement = document.evaluate(
      scriptXPath,
      document,
      null,
      0,
      null
    );
    const script = scriptElement.iterateNext().textContent;

    let getAllData = new Function(script + '; return FB_PUBLIC_LOAD_DATA_; ');
    let allData = getAllData();
    let componentDataArray = allData[1][1];

    const components = getComponents(componentDataArray).map((component) => {
      return component.model;
    });
    return components;
  } catch (e) {
    console.error(e);
  }
  return [];
}
