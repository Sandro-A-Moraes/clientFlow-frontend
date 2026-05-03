import { ReactNode } from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  placeholder,
  leftIcon,
  rightIcon,
  label,
  value,
  onChange,
}: IInputProps) => {
  return (
    <div className='flex flex-col gap-1.5 w-full'>
      {label && (
        <label className='text-neutral-300 text-xs font-bold uppercase'>
          {label}
        </label>
      )}
      <div className='relative'>
        {leftIcon && (
          <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className='bg-[#171921] text-neutral-300 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#251847] w-full pl-10 pr-4 py-3 rounded-lg'
          value={value}
          onChange={onChange}
        />
        {rightIcon && (
          <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
