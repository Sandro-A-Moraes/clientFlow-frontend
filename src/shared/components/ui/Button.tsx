import cn from '@/shared/lib/utils/cn';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type?: ButtonType;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  type,
  className,
  children,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'bg-linear-to-r from-brand-600 to-brand-400 rounded-xl py-3.5 text-sm text-brand-900 font-bold text-center cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
