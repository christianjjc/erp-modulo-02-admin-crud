import { initialData } from './seed';

async function main() {
  console.log(initialData);

  console.log('seed correcto');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();
