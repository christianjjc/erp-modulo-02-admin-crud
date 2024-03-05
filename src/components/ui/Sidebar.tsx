import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/auth.config';
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPersonOutline } from 'react-icons/io5';
import { LogOutButton, SidebarItem } from '@/components';

const menuItems = [
  {
    icon: <IoCalendarOutline />,
    path: '/admin',
    title: 'Dashboard',
  },
  {
    icon: <IoPersonOutline />,
    path: '/admin/profile',
    title: 'Perfil',
  },
  {
    icon: <IoCheckboxOutline />,
    path: '/admin/users',
    title: 'Usuarios',
  },
];

export const Sidebar = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  const userName = session?.user?.name ?? 'No Name';
  const avatarUrl = session?.user?.image ? session?.user?.image : 'https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp';
  const userRoles = session?.user?.role ?? ['client'];

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="#" title="home">
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="w-32"
              alt="tailus logo"
              width={32}
              height={200}
            />
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Image src={avatarUrl} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" width={100} height={100} />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userName}</h5>
          <span className="hidden text-gray-400 lg:block">{userRoles}</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.map((el) => (
            <SidebarItem key={el.path} {...el} />
          ))}
        </ul>
      </div>
      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogOutButton />
      </div>
    </aside>
  );
};
