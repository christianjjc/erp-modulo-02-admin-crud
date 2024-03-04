import { LoginForm, Title } from '@/components';
import { globalFont } from '@/config/fonts';

export default function Login() {
  return (
    <section>
      <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
        <div className="mb-16">
          <Title title="Inicio de Sesión" subtitle="" classname="text-center" />
        </div>
        <div className="border-2 rounded p-3 shadow">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
