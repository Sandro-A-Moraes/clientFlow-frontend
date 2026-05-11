'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormData } from '../schemas/register.schema';
import Input from '@/shared/components/ui/Input';
import { Lock, Mail, UserIcon } from 'lucide-react';
import { ReactNode } from 'react';
import TermsAcceptance from './TermsAcceptance';
import Button from '@/shared/components/ui/Button';
import { toast } from 'sonner';
import { useRegister } from '@/shared/hooks/use-register';
import { Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type fieldKey = 'name' | 'email' | 'password';

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
    key: 'name',
    label: 'Name',
    placeholder: 'Your name',
    type: 'text',
    icon: <UserIcon width={18} height={18} className='text-neutral-500' />,
    errorMessage:
      'Name must be between 2 and 100 characters and can only contain letters and spaces',
  },
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

const RegisterForm = ({
  termsContent,
  privacyContent,
}: {
  termsContent: string;
  privacyContent: string;
}) => {
  const { mutate, isPending } = useRegister();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      termsAccepted: false,
    },
    mode: 'onChange',
  });
  const termsAccepted = watch('termsAccepted');

  async function onSubmit(data: RegisterFormData) {
    mutate(data, {
      onSuccess: () => {
        toast.success('Account created successfully! Please log in.');
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          toast.error(error.message);
          return;
        }
      },
    });
  }

  return (
    <form className='flex flex-col w-full' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col w-full gap-1'>
        <h2 className='text-neutral-100 text-xl font-bold'>Create Account</h2>
        <p className='text-neutral-300 text-sm font-normal'>
          Start managing your clients today
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

        <Controller
          control={control}
          name='termsAccepted'
          render={({ field }) => (
            <TermsAcceptance
              termsContent={termsContent}
              privacyContent={privacyContent}
              accepted={field.value}
              onAcceptChange={field.onChange}
            />
          )}
        />
      </div>

      <Button
        type='submit'
        className='mt-5'
        disabled={!termsAccepted || isPending}
        isLoading={isPending}
      >
        Create Account
      </Button>

      <p className='text-sm text-neutral-300 mt-6 text-center'>
        Already have an account?{' '}
        <Link href='/login' className='text-brand-400 hover:underline'>
          Log in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
