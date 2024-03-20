'user server';

import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {
  await prisma.company.deleteMany();
  console.log('Tabla Empresa (Company) eliminada');

  await prisma.industryType.deleteMany();
  console.log('Tabla Rubros (IndustryType) eliminada');

  await prisma.user.deleteMany();
  console.log('Tabla Usuarios (User) eliminada');

  const { users, industryTypes, companies } = initialData;

  await prisma.user.createMany({ data: users });

  const user = await prisma.user.findFirst({
    where: {
      email: 'admin@erp.com',
    },
  });
  if (!user) {
    throw new Error('No se puede culminar la traza');
  } else {
    console.log('Obteniendo el id del primer usuario');
  }

  await prisma.industryType.createMany({ data: industryTypes });

  const industryType = await prisma.industryType.findFirst({
    where: {
      name: 'Construcción',
    },
  });
  if (!industryType) {
    throw new Error('No se puede culminar la traza');
  } else {
    console.log('Obteniendo el id del rubro');
  }

  for (const company of companies) {
    await prisma.company.create({
      data: {
        companyName: company.name,
        ruc: company.ruc,
        industryTypeId: industryType.id,
        userId: user.id,
      },
    });
  }

  console.log('Seed ejecutado satisfactoriamente');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();
