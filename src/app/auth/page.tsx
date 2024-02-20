import { redirect } from 'next/navigation';

export default function Login() {
  //redirect('/auth/login');
  redirect('/');

  return <h1>auth main</h1>;
}
