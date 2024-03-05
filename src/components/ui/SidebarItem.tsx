'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface Props {
  tipo: string;
  icon: React.ReactNode;
  path: string;
  title: string;
  permisos: string[];
  onclick: () => void;
}

export const SidebarItem = ({ tipo, icon, path, title, permisos, onclick }: Props) => {
  const pathName = usePathname();

  const { data: session } = useSession();
  const userRoles = session?.user?.role ?? 'client';

  if (tipo === 't') {
    return (
      <li>
        <div className="px-4 py-3 flex items-center space-x-4 rounded-xl ">
          {icon}
          <span className="-mr-1 font-medium">{title}</span>
        </div>
      </li>
    );
  } else if (tipo === 's') {
    return (
      <li>
        <div className="px-4 py-3 flex items-center space-x-4 rounded-xl ">
          {icon} <span className="-mr-1 font-medium">{title}</span>
        </div>
      </li>
    );
  } else if (tipo === 'm') {
    if (permisos.includes(userRoles)) {
      return (
        <li>
          <Link
            onClick={onclick}
            href={path}
            className={`px-4 py-3 flex items-center space-x-4 rounded-xl 
              hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white 
              ${path === pathName ? `text-white bg-gradient-to-r from-sky-600 to-cyan-400` : ''}
              `}>
            {icon}
            <span className="-mr-1 font-medium">{title}</span>
          </Link>
        </li>
      );
    }
  }
};
