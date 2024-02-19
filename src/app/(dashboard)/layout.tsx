import { Footer } from '@/components/ui';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>LAyout Dashboard</header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
