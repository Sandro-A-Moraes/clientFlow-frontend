import cn from '@/shared/lib/utils/cn';
import { LoaderCircle } from 'lucide-react';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type?: ButtonType;
  className?: string;
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
          'bg-linear-to-r from-brand-600 to-brand-400 rounded-xl py-3.5 text-sm text-brand-900 font-bold text-center cursor-pointer w-full flex items-center justify-center',
          disabled && 'opacity-50 cursor-not-allowed',
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
