import React from 'react';

const ClientHealth = () => {
  return (
    <section className='rounded-[10px] border border-neutral-600/20 bg-neutral-850 p-5.25'>
      <h2 className='text-sm leading-5 font-semibold text-neutral-100'>
        Client Health Index
      </h2>

      <div className='flex justify-center py-4'>
        <div className='size-32 rounded-full border-4 border-neutral-750 p-1'>
          <div
            className='size-full rounded-full flex items-center justify-center'
            style={{
              background:
                'conic-gradient(from 180deg, #6063ee 0deg, #a3a6ff 320deg, rgba(35,38,46,0.9) 320deg)',
            }}
          >
            <div className='size-27 rounded-full bg-neutral-850 flex flex-col items-center justify-center'>
              <span className='font-mono text-4xl leading-7 text-neutral-100'>
                92
              </span>
              <span className='mt-1 text-[10px] leading-3.75 tracking-[1px] text-neutral-300 uppercase'>
                Index Score
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 pt-2'>
        <div className='rounded-lg bg-black p-3 text-center'>
          <p className='text-xs leading-4 text-neutral-300'>Critical Issues</p>
          <p className='mt-1 font-mono text-[18px] leading-7 text-[#ff6e84]'>
            2
          </p>
        </div>
        <div className='rounded-lg bg-black p-3 text-center'>
          <p className='text-xs leading-4 text-neutral-300'>Warnings</p>
          <p className='mt-1 font-mono text-[18px] leading-7 text-[#ffa5d9]'>
            14
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientHealth;
