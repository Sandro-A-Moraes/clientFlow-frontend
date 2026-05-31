import {
  Calendar,
  LayoutDashboard,
  LucideIcon,
  UsersRound,
} from 'lucide-react';
import React from 'react';
import Link from 'next/link';

type navbarItem = {
  id: number;
  label: string;
  href: string;
  icon: LucideIcon;
};

const navbarItems: navbarItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    id: 2,
    label: 'Clients',
    href: '/clients',
    icon: UsersRound,
  },
  {
    id: 3,
    label: 'Schedule',
    href: '/schedule',
    icon: Calendar,
  },
];

const BottomNavbar = () => {
  return (
    <div className='pt-3 pb-6 bg-neutral-900/80 w-full flex items-center justify-center px-11 absolute bottom-0 text-xs text-neutral-300'>
      <nav className='w-full flex items-center justify-between'>
        {navbarItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className='flex flex-col items-center gap-1'
          >
            <item.icon width={18} height={18} />
            <span className='font-medium uppercase tracking-[1px]'>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default BottomNavbar;
