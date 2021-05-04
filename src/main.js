
import App from './App';

export async function main() {
  const argc = process.argv.length;
  const argv = process.argv;

  await App(argv[2], process.argv[3]);
}
