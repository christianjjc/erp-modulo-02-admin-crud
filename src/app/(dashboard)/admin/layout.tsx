import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) return redirect('/');

  if (session?.user.role === 'user') redirect('/');

  if (session?.user.role === 'client') redirect('/');

  return <>{children}</>;
}
