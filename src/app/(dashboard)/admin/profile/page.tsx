import { auth } from '@/auth.config';
import { LogOutButton, Title } from '@/components';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await auth();

  /*   if (!session?.user) {
    redirect('/');
  } */

  return (
    <section>
      <Title title="Perfil de Usuario" />
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
    </section>
  );
}
