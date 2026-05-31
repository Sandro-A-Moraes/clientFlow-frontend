'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/shared/components/ui/Input';
import { Lock, Mail } from 'lucide-react';
import { ReactNode } from 'react';
import Button from '@/shared/components/ui/Button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LoginFormData, loginSchema } from '../schemas/login.schema';
import { useLogin } from '../hooks/useLogin';

type fieldKey = 'email' | 'password';

type fieldConfig = {
  key: fieldKey;
  label: string;
  placeholder: string;
  type: string;
  icon: ReactNode;
  errorMessage?: string;
};

const fields: fieldConfig[] = [
  {
    key: 'email',
    label: 'Email Address',
    placeholder: 'Your email',
    type: 'email',
    icon: <Mail width={18} height={18} className='text-neutral-500' />,
    errorMessage: 'Please enter a valid email address',
  },
  {
    key: 'password',
    label: 'Password',
    placeholder: 'Your password',
    type: 'password',
    icon: <Lock width={18} height={18} className='text-neutral-500' />,
    errorMessage: 'Password must be at least 8 characters long',
  },
];

const LoginForm = () => {
  const router = useRouter();
  const { mutate, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const TOAST_DURATION = 2000;

  async function onSubmit(data: LoginFormData) {
    mutate(data, {
      onSuccess: async () => {
        toast.success('Logged in successfully!', {
          duration: TOAST_DURATION,
        });

        setTimeout(() => {
          router.push('/dashboard');
        }, TOAST_DURATION);
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      },
    });
  }

  return (
    <form className='flex flex-col w-full' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col w-full gap-1'>
        <h2 className='text-neutral-100 text-xl font-bold'>Welcome Back</h2>
        <p className='text-neutral-300 text-sm font-normal'>
          We&apos;re excited to have you back!
        </p>
      </div>

      {/* Inputs */}
      <div className='pt-7 flex flex-col gap-5'>
        {fields.map((field) => (
          <div key={field.key} className='flex flex-col gap-2'>
            <Input
              type={field.type}
              label={field.label}
              placeholder={field.placeholder}
              leftIcon={field.icon}
              {...register(field.key)}
            />
            {errors[field.key] && (
              <p className='text-red-500 text-xs mt-1'>
                {field.errorMessage || errors[field.key]?.message?.toString()}
              </p>
            )}
          </div>
        ))}
      </div>

      <Button
        type='submit'
        className='mt-5'
        disabled={isPending}
        isLoading={isPending}
      >
        Log In
      </Button>

      <p className='text-sm text-neutral-300 mt-6 text-center'>
        <span>Don&apos;t have an account? </span>
        <Link href='/register' className='text-brand-400 hover:underline'>
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
