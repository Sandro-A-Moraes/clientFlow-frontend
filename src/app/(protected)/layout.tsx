import BottomNavbar from '@/shared/components/ui/BottomNavbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className='bg-linear-to-b from-neutral-950 to-neutral-800 w-full min-h-screen flex flex-col items-center justify-center'>
      <div>{children}</div>
      <BottomNavbar />
    </div>
  );
};

export default layout;
