'use server';

import { signIn } from '@/auth.config';
import { sleep } from '@/utils';
import { AuthError } from 'next-auth';

// ...

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await sleep(3);
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    //console.log({ formData555: Object.fromEntries(formData) });

    return 'Success';
  } catch (error) {
    console.log({ error });
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Usuario y/o contraseña no existen.';
        default:
          return 'Algo salió mal.';
      }
    }
  }
}
