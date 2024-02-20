import React from 'react';
import { MainMenu } from '../mainmenu/MainMenu';

export const Header = () => {
  return (
    <header className="pie-pagina flex w-full justify-center bg-slate-200 py-2">
      <MainMenu />
    </header>
  );
};
