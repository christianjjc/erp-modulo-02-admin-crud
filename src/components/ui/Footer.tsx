import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="pie-pagina flex w-full justify-center bg-slate-200 py-2">
      <span className="font-bold antialiased">ERP | Laboral</span>
      <span>© {new Date().getFullYear()} Todos los derechos reservados | Desarrollado por</span> {/* alt + 0169 */}
      <a href="https://cjjc.pe" className="mx-3" target="_blank">
        CJJC
      </a>
    </footer>
  );
};
