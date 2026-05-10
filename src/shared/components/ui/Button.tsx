import cn from '@/shared/lib/utils/cn';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type?: ButtonType;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type, className, children, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'bg-linear-to-r from-brand-600 to-brand-400 rounded-xl py-3.5 text-sm text-brand-900 font-bold text-center',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
