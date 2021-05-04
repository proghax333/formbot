
import FormParser from './FormParser';
export default async function App(formUrl, outputFile) {
  const url =
    formUrl ||
    'https://docs.google.com/forms/d/e/1FAIpQLScn76mvJvXabga8xYr4Ydyx5PGXggDkNcJJACtO5JtzHccJtA/viewform?usp=sf_link';
  
  console.log(await FormParser(url));
}
