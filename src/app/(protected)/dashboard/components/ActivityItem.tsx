import React from 'react';

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  icon: React.ElementType;
}

const ActivityItem = (props: ActivityItemProps) => {
  return (
    <article className='flex items-center gap-3 rounded-lg p-3'>
      <div className='size-10 rounded-full bg-neutral-750 flex items-center justify-center shrink-0'>
        <props.icon size={14} className='text-brand-300' />
      </div>

      <div className='min-w-0 flex-1'>
        <p className='text-sm leading-5 font-medium text-neutral-100'>
          {props.title}
        </p>
        <p className='text-xs leading-4 text-neutral-300'>
          {props.description}
        </p>
      </div>

      <span className='text-xs leading-4 text-neutral-500 font-mono'>
        {props.time}
      </span>
    </article>
  );
};

export default ActivityItem;
