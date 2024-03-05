import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) return redirect('/');

  /* if (session?.user.role === 'user') redirect('/admin/profile');
  if (session?.user.role === 'client') redirect('/admin/profile'); */

  return (
    <>
      {/* <div className="ml-auto mb-1 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen"> */}
      <div className="">
        <div className="pt-1 bg-white m-1 rounded">{children}</div>
      </div>
    </>
  );
}
