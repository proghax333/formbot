
import App from './App';

export async function main() {
  console.log("Starting Parser...");
  await App(process.argv.length, process.argv);
  console.log("Done parsing.");
}
