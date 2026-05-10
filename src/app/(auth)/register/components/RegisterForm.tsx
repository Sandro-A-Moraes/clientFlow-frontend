'use client';

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
  const [values, setValues] = useState<Record<fieldKey, string>>({
    name: '',
    email: '',
    password: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { mutate, isPending } = useRegister();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(
      { ...values, termsAccepted },
      {
        onSuccess: () => {
          toast.success('Account created successfully!');
        },
      },
    );
  };

  return (
    <form className='flex flex-col w-full' onSubmit={handleSubmit}>
      <div className='flex flex-col w-full gap-1'>
        <h2 className='text-neutral-100 text-xl font-bold'>Create Account</h2>
        <p className='text-neutral-300 text-sm font-normal'>
          Start managing your clients today
        </p>
      </div>

      {/* Inputs */}
      <div className='pt-7 flex flex-col gap-5'>
        {fields.map((field) => (
          <Input
            key={field.key}
            type={field.type}
            label={field.label}
            placeholder={field.placeholder}
            leftIcon={field.icon}
            value={values[field.key]}
            onChange={(e) =>
              setValues({ ...values, [field.key]: e.target.value })
            }
          />
        ))}

        <TermsAcceptance
          termsContent={termsContent}
          privacyContent={privacyContent}
          accepted={termsAccepted}
          onAcceptChange={setTermsAccepted}
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
