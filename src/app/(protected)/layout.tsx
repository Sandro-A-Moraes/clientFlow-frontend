import BottomNavbar from '@/shared/components/ui/BottomNavbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='relative bg-linear-to-b from-neutral-950 to-neutral-800 w-full min-h-screen overflow-x-hidden'>
      <div className='w-full max-w-105 mx-auto min-h-screen pb-28'>
        {children}
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Layout;
