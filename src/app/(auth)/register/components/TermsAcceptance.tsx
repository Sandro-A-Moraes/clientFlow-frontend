import cn from '@/shared/lib/utils/cn';
import React from 'react';

const TermsAcceptance = () => {
  return (
    <div className='py-1 flex gap-3'>
      <input
        type='checkbox'
        className='appearance-none w-4 h-4 border border-neutral-600 rounded-sm'
      />
      <p className='text-xs'>
        I agree to the{' '}
        <span className={cn('text-brand-400')}>Terms of Service</span> and{' '}
        <span className={cn('text-brand-400')}>Privacy Policy</span>
      </p>
    </div>
  );
};

export default TermsAcceptance;
