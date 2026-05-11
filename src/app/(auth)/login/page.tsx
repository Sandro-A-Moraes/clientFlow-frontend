import { CloudCheck } from 'lucide-react';
import LoginForm from './components/LoginForm';

const page = () => {
  return (
    <div className='flex flex-col items-center gap-10 w-full max-w-100'>
      {/* Logo Header */}
      <div className='flex flex-col items-center gap-2'>
        <div className='py-1.5 bg-bg-soft w-12 flex items-center justify-center h-8 rounded-xl'>
          <CloudCheck className=' text-text-link' />
        </div>
        <h1 className='text-neutral-100 text-3xl font-extrabold'>ClientFlow</h1>
        <p className='text-neutral-300 text-sm font-medium'>
          Streamline your professional workflow.
        </p>
      </div>

      {/* Login Card */}
      <div className='w-full flex flex-col items-center bg-[#14171E] rounded-2xl p-8'>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
