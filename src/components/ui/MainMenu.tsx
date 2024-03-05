'use client';

import { logout } from '@/actions';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleSideMenu } from '@/store/sidebar-slice';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { IoBookOutline, IoHomeOutline, IoLogInOutline, IoLogOutOutline, IoPersonOutline } from 'react-icons/io5';

export const MainMenu = () => {
  const { data: session } = useSession();
  const isAutehnticated = !!session?.user;
  const isSuper = session?.user.role === 'super';

  const dispatch = useAppDispatch();

  const fnOpenMenu = () => {
    dispatch(toggleSideMenu(true));
  };

  return (
    <nav className="flex justify-center">
      <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
        <IoHomeOutline size={15} />
        <span className="ml-3 text-xl">Home</span>
      </Link>

      {isSuper && (
        <Link href="/admin/users" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
          <IoBookOutline size={15} />
          <span className="ml-3 text-xl">Usuarios</span>
        </Link>
      )}

      {!isAutehnticated && (
        <Link href="/auth/login" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
          <IoLogInOutline size={15} />
          <span className="ml-3 text-xl">LogIn</span>
        </Link>
      )}

      <button onClick={fnOpenMenu} className="m-2 p-2 rounded-md trnasition-all hover:bg-gray-100">
        Menú
      </button>
    </nav>
  );
};
