import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {
  await prisma.user.deleteMany();
  const { users } = initialData;
  console.log(initialData);
  await prisma.user.createMany({ data: users });
  console.log('Seed ejecutado satisfactoriamente');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();
