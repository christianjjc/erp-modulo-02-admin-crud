import { auth } from '@/auth.config';
import { Title } from '@/components';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();

  /*  if (session?.user) {
    //redirect('/auth/login');
    redirect('/admin');
  } */

  return (
    <section className="flex flex-col center items-center">
      <Title title="Página de Inicio" subtitle="Esta será la pantalla inicial del WebSite o de la WebApp" />
      <div className="mt-5 flex flex-col gap-2">
        <span className="text-xl">Ahora, lo que debes hacer es iniciar sesión.</span>
        <p>Los usuarios iniciales (incluídos en el SEED) son:</p>
        <table className="w-[600px]">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Password
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Rol
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">admin@erp.com</td>
              <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">123456</td>
              <td className="text-sm text-gray-900 font-light px-6 ">admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
