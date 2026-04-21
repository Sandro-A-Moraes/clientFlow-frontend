import React from 'react';
import cn from '@/shared/lib/utils/cn';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        'w-full min-h-screen flex items-center justify-center px-6 py-14',
        'bg-register-mobile',
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
