import { LoginForm } from '@/components/auth';
import { globalFont } from '@/config/fonts';

export default function Login() {
  return (
    <section>
      <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
        <h1 className={`${globalFont.className} text-4xl mb-5`}>Ingresar</h1>
        <LoginForm />
      </div>
    </section>
  );
}
