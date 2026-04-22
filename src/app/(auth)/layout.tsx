import React from 'react';
import cn from '@/shared/lib/utils/cn';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        'w-full min-h-screen flex items-center px-6 justify-center',
        'bg-register-mobile',
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
