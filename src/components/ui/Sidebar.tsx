'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  IoApps,
  IoArchive,
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCloseOutline,
  IoCodeWorkingOutline,
  IoConstructOutline,
  IoListOutline,
  IoPeople,
  IoPersonOutline,
} from 'react-icons/io5';
import { LogOutButton, Separator, SidebarItem } from '@/components';
import { useSession } from 'next-auth/react';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleSideMenu } from '@/store/sidebar-slice';
import clsx from 'clsx';

const menuItems = [
  {
    tipo: 'm',
    icon: <IoConstructOutline />,
    path: '/config',
    title: 'Configuración',
    permisos: ['super'],
  },
  {
    tipo: 's',
    icon: <div className="w-full h-px bg-gray-200" />,
    path: '',
    title: '',
    permisos: ['super'],
  },
  {
    tipo: 'm',
    icon: <IoCalendarOutline />,
    path: '/admin',
    title: 'Admin Dashboard',
    permisos: ['super', 'admin'],
  },
  {
    tipo: 'm',
    icon: <IoPersonOutline />,
    path: '/admin/profile',
    title: 'Perfil',
    permisos: ['super', 'admin'],
  },
  {
    tipo: 's',
    icon: <div className="w-full h-px bg-gray-200" />,
    path: '',
    title: '',
    permisos: ['super', 'admin'],
  },
  {
    tipo: 't',
    icon: <IoListOutline />,
    path: '',
    title: 'Mantenimientos',
    permisos: ['super', 'admin'],
  },
  {
    tipo: 'm',
    icon: <IoPeople />,
    path: '/admin/users',
    title: 'Usuarios',
    permisos: ['super'],
  },
  {
    tipo: 'm',
    icon: <IoApps />,
    path: '/admin/enterprises',
    title: 'Empresas',
    permisos: ['super', 'admin'],
  },
  {
    tipo: 'm',
    icon: <IoArchive />,
    path: '/admin/products',
    title: 'Productos',
    permisos: ['super', 'admin'],
  },
  {
    tipo: 's',
    icon: <div className="w-full h-px bg-gray-200" />,
    path: '',
    title: '',
    permisos: ['super', 'admin'],
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

  return (
    <>
      {isSideMenuOpen && (
        <>
          <div className="bg-black fixed top-0 left-0 w-screen h-screen z-40 opacity-30" />
          <div onClick={fnCloseMenu} className="fade-in fixed top-0 left-0 w-screen h-screen z-40 backdrop-filter backdrop-blur-sm" />
        </>
      )}

      <nav
        //todo: efecto de slide
        className={clsx('fixed w-full p-5 left-0 top-0 md:w-[400px] h-screen bg-white z-50 shadow-2xl transform transition-all duration-300', {
          '-translate-x-full': !isSideMenuOpen,
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
          <div>
            <ul className="space-y-2 tracking-wide mt-8">
              {menuItems.map((el, i = 0) => (
                <SidebarItem key={i++} {...el} onclick={fnCloseMenu} />
              ))}
            </ul>
          </div>
          <div className="px-6 -mx-6 pt-4 flex justify-between items-center">
            <LogOutButton />
          </div>
        </div>
      </nav>
    </>
  );
};
