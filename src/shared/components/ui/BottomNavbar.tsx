'use client';

import {
  Calendar,
  LayoutDashboard,
  LucideIcon,
  UsersRound,
} from 'lucide-react';
import Link from 'next/link';
import cn from '@/shared/lib/utils/cn';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'pt-3 pb-6 bg-neutral-900/80 w-full flex items-center justify-center px-11 absolute bottom-0 text-xs text-neutral-300',
      )}
    >
      <nav className='w-full flex items-center justify-between'>
        {navbarItems.map((item) => {
          const isActive =
            item.href === '/'
              ? pathname === item.href
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 hover:text-brand-400 transition-colors py-1 px-4 active:bg-brand-500/10 rounded-md',
                isActive && 'text-brand-400',
              )}
            >
              <Icon width={18} height={18} />
              <span className='font-medium uppercase tracking-[1px]'>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNavbar;
