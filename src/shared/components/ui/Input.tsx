'use client';

import { forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react';
import { Eye, EyeClosed } from 'lucide-react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ leftIcon, rightIcon, label, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const inputType =
      props.type === 'password'
        ? showPassword
          ? 'text'
          : 'password'
        : props.type;

    return (
      <div className='flex flex-col gap-1.5 w-full'>
        {label && (
          <label className='text-neutral-300 text-xs font-bold uppercase'>
            {label}
          </label>
        )}

        <div className='relative'>
          {leftIcon && (
            <div className='absolute left-3 top-1/2 -translate-y-1/2'>
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={`
              bg-[#171921]
              text-neutral-300
              placeholder:text-neutral-500
              focus:outline-none
              focus:ring-2
              focus:ring-[#251847]
              w-full
              pl-10
              pr-4
              py-3
              rounded-lg
              ${className || ''}
            `}
            {...props}
            type={inputType}
          />

          {rightIcon && (
            <div className='absolute right-3 top-1/2 -translate-y-1/2'>
              {rightIcon}
            </div>
          )}
          {props.type === 'password' && (
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 cursor-pointer'
            >
              {showPassword ? <EyeClosed /> : <Eye />}
            </button>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
