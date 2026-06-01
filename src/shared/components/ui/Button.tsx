import cn from '@/shared/lib/utils/cn';
import { LoaderCircle } from 'lucide-react';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'bg-linear-to-r from-brand-600 to-brand-400 rounded-xl  text-sm text-brand-900 ',
  secondary:
    'border border-neutral-600/20 bg-neutral-800 text-neutral-100 hover:bg-neutral-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

interface ButtonProps {
  type?: ButtonType;
  className?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  rightIcon?: React.ReactNode;
}

const Button = ({
  type,
  className,
  children,
  variant,
  onClick,
  disabled,
  isLoading,
  rightIcon,
}: ButtonProps) => {
  return (
    <div className='w-full flex items-center justify-center'>
      <button
        type={type}
        className={cn(
          ' rounded-xl py-3.5 text-sm font-bold text-center cursor-pointer w-full flex items-center justify-center',
          disabled && 'opacity-50 cursor-not-allowed',
          buttonVariants[variant || 'primary'],
          className,
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
        {isLoading && (
          <LoaderCircle
            className='animate-spin ml-2 text-brand-700'
            size={18}
          />
        )}
        {rightIcon && <span className='ml-2'>{rightIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
