'use client';

import { useAppDispatch } from '@/store';
import { toggleSideMenu } from '@/store/sidebar-slice';
import { useSession } from 'next-auth/react';
import React from 'react';
import { IoMenuSharp } from 'react-icons/io5';

export const MainMenu = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const isSuper = session?.user.role === 'super';

  const dispatch = useAppDispatch();

  const fnOpenMenu = () => {
    dispatch(toggleSideMenu(true));
  };

  return (
    <nav className="flex">
      {/*       {!isAuthenticated && (
        <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
          <IoHomeOutline size={15} />
          <span className="ml-3 text-xl">Home</span>
        </Link>
      )} */}

      <button onClick={fnOpenMenu} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
        <IoMenuSharp size={25} />
      </button>
    </nav>
  );
};
