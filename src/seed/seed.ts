import bcryptjs from 'bcryptjs';
interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'super' | 'admin' | 'user' | 'client';
}

interface SeedData {
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [
    {
      name: 'super-user',
      email: 'super@erp.com',
      password: bcryptjs.hashSync('123456'),
      role: 'super',
    },
    {
      name: 'admin-user',
      email: 'admin@erp.com',
      password: bcryptjs.hashSync('123456'),
      role: 'admin',
    },
    {
      name: 'user1',
      email: 'user1@erp.com',
      password: bcryptjs.hashSync('123456'),
      role: 'user',
    },
    {
      name: 'client1',
      email: 'client1@erp.com',
      password: bcryptjs.hashSync('123456'),
      role: 'client',
    },
  ],
};
