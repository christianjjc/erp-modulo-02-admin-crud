import React from 'react';
import { MainMenu } from './MainMenu';

export const Header = () => {
  return (
    <header className="pie-pagina flex w-full justify-start bg-slate-200 py-2">
      <MainMenu />
    </header>
  );
};
