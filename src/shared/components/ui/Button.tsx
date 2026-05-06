import cn from '@/shared/lib/utils/cn';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type?: ButtonType;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ type, className, children }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'bg-linear-to-r from-brand-600 to-brand-400 rounded-xl py-3.5 text-sm text-brand-900 font-bold text-center',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
