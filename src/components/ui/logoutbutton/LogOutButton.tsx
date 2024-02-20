'use client';

import { logout } from '@/actions';
import React from 'react';

export const LogOutButton = () => {
  const cerrarSession = async () => {
    await logout();
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={cerrarSession}>
      Cerrar Sesión
    </button>
  );
};
