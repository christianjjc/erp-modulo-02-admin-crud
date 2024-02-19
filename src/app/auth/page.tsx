import { redirect } from 'next/navigation';

export default function Login() {
  redirect('auth/login');

  return <h1>auth main</h1>;
}
