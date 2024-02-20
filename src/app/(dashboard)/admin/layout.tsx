import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  //if (!session?.user) return redirect('/auth/login');
  if (session?.user.role !== 'super') {
    redirect('/auth/login');
  }

  return <>{children}</>;
}
