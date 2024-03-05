'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCloseOutline,
  IoCodeWorkingOutline,
  IoListOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { LogOutButton, SidebarItem } from '@/components';
import { useSession } from 'next-auth/react';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleSideMenu } from '@/store/sidebar-slice';
import { useEffect } from 'react';
import clsx from 'clsx';

const menuItems = [
  {
    icon: <IoCalendarOutline />,
    path: '/admin',
    title: 'Dashboard',
  },
  {
    icon: <IoPersonOutline />,
    path: '/admin/profile',
    title: 'Perfil',
  },
  {
    icon: <IoCheckboxOutline />,
    path: '/admin/users',
    title: 'Usuarios',
  },
];

export const Sidebar = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name ?? 'No Name';
  const avatarUrl = session?.user?.image ? session?.user?.image : 'https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp';
  const userRoles = session?.user?.role ?? ['client'];

  const isSideMenuOpen = useAppSelector((state) => state.sidebarOpen.isSideMenuOpen);
  const dispatch = useAppDispatch();

  const fnCloseMenu = () => {
    dispatch(toggleSideMenu(false));
  };

  //useEffect(() => {}, [isSideMenuOpen]);

  //{/* <nav className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"> */}

  return (
    <>
      {isSideMenuOpen && (
        <>
          <div className="bg-black fixed top-0 left-0 w-screen h-screen z-10 opacity-30" />
          <div onClick={fnCloseMenu} className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
        </>
      )}

      <nav
        //todo: efecto de slide
        className={clsx('w-full fixed p-5 right-0 top-0 md:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300', {
          'translate-x-full': !isSideMenuOpen,
        })}>
        <IoCloseOutline size={50} className="absolute top-5 right-5 cursor-pointer" onClick={fnCloseMenu} />
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link href="#" title="home">
              <Image
                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                className="w-32"
                alt="tailus logo"
                width={32}
                height={200}
              />
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Image src={avatarUrl} alt="" className="w-28 h-28 m-auto rounded-full object-cover " width={100} height={100} />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userName}</h5>
            <span className="hidden text-gray-400 lg:block">{userRoles}</span>
          </div>
          <ul className="space-y-2 tracking-wide mt-8">
            {menuItems.map((el) => (
              <SidebarItem key={el.path} {...el} />
            ))}
          </ul>
          <button className="btn-primary " onClick={fnCloseMenu}>
            cerrar menu
          </button>
        </div>
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <LogOutButton />
        </div>
      </nav>
    </>
  );
};
