'use client';

import { logout } from '@/actions';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';

export const MainMenu = () => {
  const { data: session } = useSession();

  const isAutehnticated = !!session?.user;

  const isSuper = session?.user.role === 'super';

  const isAdmin = session?.user.role === 'admin';

  const isUser = session?.user.role === 'user';

  const isClient = session?.user.role === 'client';

  return (
    <nav className="flex justify-center">
      {isAutehnticated && (
        <Link href="/profile" className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoPersonOutline size={15} />
          <span className="ml-3 text-xl">Perfil</span>
        </Link>
      )}

      {isSuper && (
        <Link href="/admin/users" className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoPersonOutline size={15} />
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>
      )}

      {isAutehnticated && (
        <button onClick={() => logout()} className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoPersonOutline size={15} />
          <span className="ml-3 text-xl">Salir</span>
        </button>
      )}

      {!isAutehnticated && (
        <Link href="/auth/login" className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoPersonOutline size={15} />
          <span className="ml-3 text-xl">LogIn</span>
        </Link>
      )}
    </nav>
  );
};
