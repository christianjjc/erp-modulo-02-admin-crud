import { Footer } from '@/components';
import { MainMenu } from '@/components/ui/mainmenu/MainMenu';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        LAyout Dashboard
        <MainMenu />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
