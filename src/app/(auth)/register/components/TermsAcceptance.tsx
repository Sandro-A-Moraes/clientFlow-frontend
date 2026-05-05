import { TermsModal } from './TermsModal';
import { getLegalContent } from '../utils/getLegalContent';

const TermsAcceptance = ({
  termsContent,
  privacyContent,
}: {
  termsContent: string;
  privacyContent: string;
}) => {
  return (
    <div className='py-1 flex gap-3'>
      <input
        type='checkbox'
        className='appearance-none w-4 h-4 border border-neutral-600 rounded-sm'
      />
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
