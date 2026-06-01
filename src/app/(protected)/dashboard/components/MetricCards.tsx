import React from 'react';

interface MetricCardsProps {
  label: string;
  value: string;
  trend: string;
  trendColor: string;
}

const MetricCards = (props: MetricCardsProps) => {
  return (
    <article className='rounded-xl border border-neutral-600/20 bg-neutral-850 p-4.25 flex flex-col'>
      <p className='text-xs leading-4 tracking-[1.2px] text-neutral-300 uppercase'>
        {props.label}
      </p>
      <div className='mt-auto flex items-end justify-between'>
        <p className='font-mono text-3xl leading-8 text-neutral-100'>
          {props.value}
        </p>
        <p className={`font-mono text-xs leading-4 ${props.trendColor}`}>
          {props.trend}
        </p>
      </div>
    </article>
  );
};

export default MetricCards;
