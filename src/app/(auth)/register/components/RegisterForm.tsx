'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormData } from '../schemas/register.schema';
import Input from '@/shared/components/ui/Input';
import { Lock, Mail, UserIcon } from 'lucide-react';
import { ReactNode, useState } from 'react';
import TermsAcceptance from './TermsAcceptance';
import Button from '@/shared/components/ui/Button';
import { toast } from 'sonner';
import { useRegister } from '@/shared/hooks/use-register';

type fieldKey = 'name' | 'email' | 'password';

type fieldConfig = {
  key: fieldKey;
  label: string;
  placeholder: string;
  type: string;
  icon: ReactNode;
};

const fields: fieldConfig[] = [
  {
    key: 'name',
    label: 'Name',
    placeholder: 'Your name',
    type: 'text',
    icon: <UserIcon width={18} height={18} className='text-neutral-500' />,
  },
  {
    key: 'email',
    label: 'Email Address',
    placeholder: 'Your email',
    type: 'email',
    icon: <Mail width={18} height={18} className='text-neutral-500' />,
  },
  {
    key: 'password',
    label: 'Password',
    placeholder: 'Your password',
    type: 'password',
    icon: <Lock width={18} height={18} className='text-neutral-500' />,
  },
];

const RegisterForm = ({
  termsContent,
  privacyContent,
}: {
  termsContent: string;
  privacyContent: string;
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { mutate, isPending } = useRegister();
  const {
    register,
    handleSubmit,
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
                {errors[field.key]?.message}
              </p>
            )}
          </div>
        ))}

        <TermsAcceptance
          termsContent={termsContent}
          privacyContent={privacyContent}
          accepted={termsAccepted}
          onAcceptChange={setTermsAccepted}
          {...register('termsAccepted')}
        />
      </div>

      <Button
        type='submit'
        className='mt-5'
        disabled={!termsAccepted || isPending}
      >
        Create Account
      </Button>
    </form>
  );
};

export default RegisterForm;
