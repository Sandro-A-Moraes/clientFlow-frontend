import cn from '@/shared/lib/utils/cn';
import Modal from '@/shared/components/ui/Modal';

const TermsAcceptance = () => {
  return (
    <div className='py-1 flex gap-3'>
      <input
        type='checkbox'
        className='appearance-none w-4 h-4 border border-neutral-600 rounded-sm'
      />
      <p className='text-xs'>
        I agree to the{' '}
        <Modal
          className='border-brand-600 bg-neutral-800'
          title='Terms of Service'
          trigger={
            <span className={cn('text-brand-400')}>Terms of Service</span>
          }
        >
          Terms of Service
        </Modal>{' '}
        and{' '}
        <Modal
          className=''
          title='Privacy Policy'
          trigger={<span className={cn('text-brand-400')}>Privacy Policy</span>}
        >
          Privacy Policy
        </Modal>
      </p>
    </div>
  );
};

export default TermsAcceptance;
