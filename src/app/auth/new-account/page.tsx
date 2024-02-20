import { RegisterForm } from '@/components';
import { globalFont } from '@/config/fonts';

export default function NewAccount() {
  return (
    <section>
      <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
        <h1 className={`${globalFont.className} text-4xl mb-5`}>Nueva cuenta</h1>
        <RegisterForm />
      </div>
    </section>
  );
}
