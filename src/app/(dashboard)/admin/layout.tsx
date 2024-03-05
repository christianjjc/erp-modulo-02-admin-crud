import { auth } from '@/auth.config';
import { Sidebar } from '@/components';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) return redirect('/');

  /* if (session?.user.role === 'user') redirect('/admin/profile');
  if (session?.user.role === 'client') redirect('/admin/profile'); */

  return (
    <>
      <Sidebar />
      {/* <div className="ml-auto mb-1 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen"> */}
      <div className="px-0 md:px-5">
        <div className="px-1 pt-1 bg-white m-1 rounded">{children}</div>
      </div>
    </>
  );
}
