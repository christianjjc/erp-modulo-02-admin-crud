'use client';

import { logout } from '@/actions';
import { redirect } from 'next/navigation';
import React from 'react';
import { CiLogout } from 'react-icons/ci';

export const LogOutButton = () => {
  const cerrarSession = async () => {
    await logout();
  };

  return (
    <>
      <button onClick={() => cerrarSession()} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <CiLogout />
        <span className="group-hover:text-gray-700">Salir</span>
      </button>
    </>
  );
};

{
  /* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={cerrarSession}>
      Cerrar Sesión
    </button> */
}
