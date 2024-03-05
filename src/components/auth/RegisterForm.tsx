'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { login, registerUser } from '@/actions';
import clsx from 'clsx';
import { Spinner } from '..';

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setPending(true);
    setErrorMessage('');
    const { name, email, password } = data;
    // Server Action
    const resp = await registerUser(name, email, password);
    if (!resp.ok) {
      setErrorMessage(resp.message);
      return;
    }
    await login(email.toLowerCase(), password);
    window.location.replace('/admin/profile');
  };

  //useEffect(() => {}, [pending]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="nombre">Nombre completo</label>
      <input
        className={clsx('px-5 py-2 border bg-gray-200 rounded mb-5', {
          'border-red-500': errors.name,
        })}
        type="text"
        autoFocus
        {...register('name', { required: true })}
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        className={clsx('px-5 py-2 border bg-gray-200 rounded mb-5', {
          'border-red-500': errors.email,
        })}
        type="email"
        autoComplete="username"
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className={clsx('px-5 py-2 border bg-gray-200 rounded mb-5', {
          'border-red-500': errors.password,
        })}
        type="password"
        autoComplete="current-password"
        {...register('password', { required: true, minLength: 6 })}
      />
      <span className="text-red-500">{errorMessage} </span>
      {pending ? <Spinner /> : ''}
      <button className="btn-primary">Crear cuenta</button>
      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Volver al login
      </Link>
    </form>
  );
};
