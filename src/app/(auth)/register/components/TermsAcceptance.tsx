import { TermsModal } from './TermsModal';

const TermsAcceptance = ({
  termsContent,
  privacyContent,
}: {
  termsContent: string;
  privacyContent: string;
}) => {
  return (
    <div className='py-1 flex gap-3'>
      <span className='relative inline-flex h-4 w-4 items-center justify-center'>
        <input
          type='checkbox'
          className='peer appearance-none h-4 w-4 border border-neutral-600 rounded-sm checked:bg-brand-500 checked:border-brand-500 focus:outline-none'
        />
        <svg
          viewBox='0 0 16 16'
          className='pointer-events-none absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100'
          aria-hidden='true'
        >
          <path
            d='M3.5 8.5L6.5 11.5L12.5 5.5'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </span>
      <p className='text-xs flex flex-wrap gap-1 text-white'>
        I agree to the{' '}
        <span className='flex items-center gap-1'>
          <TermsModal title='Terms of Service' content={termsContent} />
        </span>
        and
        <span className='flex items-center gap-1'>
          <TermsModal title='Privacy Policy' content={privacyContent} />
        </span>
      </p>
    </div>
  );
};

export default TermsAcceptance;
