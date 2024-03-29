import { RegisterForm, Title } from '@/components';
import { globalFont } from '@/config/fonts';

export default function NewAccount() {
  return (
    <section>
      <div className="flex flex-col pt-32 sm:pt-52">
        <div className="mb-16">
          <Title title="Registro de Usuarios" subtitle="" classname="text-center" />
        </div>
        <div className="border-2 rounded p-3 shadow">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
