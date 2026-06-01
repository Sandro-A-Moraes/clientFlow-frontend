import {
  Activity,
  BellRing,
  Database,
  Server,
  ShieldCheck,
  UserRound,
} from 'lucide-react';

import MetricCards from './components/MetricCards';
import ActivityItem from './components/ActivityItem';
import ClientHealth from './components/ClientHealth';
import Button from '@/shared/components/ui/Button';

type StatCard = {
  id: number;
  label: string;
  value: string;
  trend: string;
  trendColor: string;
};

type ActivityItem = {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: React.ElementType;
};

const topStats: StatCard[] = [
  {
    id: 1,
    label: 'TOTAL CLIENTS',
    value: '1,284',
    trend: '+12%',
    trendColor: 'text-emerald-400',
  },
  {
    id: 2,
    label: 'MONTHLY GROWTH',
    value: '184',
    trend: '+8%',
    trendColor: 'text-emerald-400',
  },
  {
    id: 3,
    label: 'ACTIVE RECORDS',
    value: '42',
    trend: 'k',
    trendColor: 'text-neutral-300',
  },
  {
    id: 4,
    label: 'RETENTION RATE',
    value: '98',
    trend: '%',
    trendColor: 'text-neutral-300',
  },
];

const recentActivity: ActivityItem[] = [
  {
    id: 1,
    title: 'Julian Thorne',
    description: 'Updated system architecture docs',
    time: '10m ago',
    icon: UserRound,
  },
  {
    id: 2,
    title: 'Astra Dynamics',
    description: 'Deployed new microservice cluster',
    time: '1h ago',
    icon: Database,
  },
  {
    id: 3,
    title: 'Security Audit',
    description: 'Completed routine compliance check',
    time: '3h ago',
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: 'Data Migration',
    description: 'Successfully transferred 5TB',
    time: '5h ago',
    icon: Activity,
  },
  {
    id: 5,
    title: 'System Maintenance',
    description: 'Scheduled downtime concluded',
    time: '1d ago',
    icon: BellRing,
  },
];

const infrastructureRows = [
  { label: 'Core Servers', status: 'Operational', tone: 'ok', icon: Server },
  {
    label: 'Database Clusters',
    status: 'Operational',
    tone: 'ok',
    icon: Database,
  },
  { label: 'API Gateways', status: 'Degraded', tone: 'warn', icon: Activity },
] as const;

export default function Dashboard() {
  return (
    <main className='w-full px-4 pt-20 pb-4'>
      <div className='flex flex-col gap-6'>
        <section className='space-y-1'>
          <h1 className='text-2xl leading-8 tracking-[-0.6px] font-bold text-neutral-100'>
            Architecture Dashboard
          </h1>
          <p className='text-sm leading-5 text-neutral-300'>
            System overview and client health metrics.
          </p>
        </section>

        <section className='grid grid-cols-2 gap-4'>
          {topStats.map((stat) => (
            <MetricCards
              key={stat.id}
              label={stat.label}
              value={stat.value}
              trend={stat.trend}
              trendColor={stat.trendColor}
            />
          ))}
        </section>

        <section className='rounded-[10px] border border-neutral-600/20 bg-neutral-850 p-5.25'>
          <div className='mb-3 flex items-center justify-between'>
            <h2 className='text-sm leading-5 font-semibold text-neutral-100'>
              Recent Activity
            </h2>
            <button className='text-xs leading-4 font-medium text-brand-400 hover:text-brand-300 transition-colors'>
              View All
            </button>
          </div>

          <div className='flex flex-col gap-3'>
            {recentActivity.map((item) => {
              const Icon = item.icon;
              return (
                <ActivityItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  time={item.time}
                  icon={Icon}
                />
              );
            })}
          </div>
        </section>

        <ClientHealth />

        <section className='rounded-[10px] border border-neutral-600/20 bg-neutral-850 p-5.25'>
          <div className='mb-2 flex items-center justify-between'>
            <h2 className='text-sm leading-5 font-semibold text-neutral-100'>
              Infrastructure Status
            </h2>
            <div className='flex items-center gap-2'>
              <span className='size-2 rounded-full bg-emerald-400' />
              <span className='font-mono text-xs leading-4 text-emerald-400 animate-pulse'>
                99.998% Uptime
              </span>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            {infrastructureRows.map((row) => {
              const Icon = row.icon;
              const isOperational = row.tone === 'ok';

              return (
                <article
                  key={row.label}
                  className='rounded-lg bg-neutral-750 p-3 flex items-center justify-between gap-3'
                >
                  <div className='flex items-center gap-3 min-w-0'>
                    <Icon size={18} className='text-neutral-300 shrink-0' />
                    <p className='text-sm leading-5 text-neutral-100 truncate'>
                      {row.label}
                    </p>
                  </div>

                  <span
                    className={`rounded px-2 py-1 font-mono text-xs leading-4 ${
                      isOperational
                        ? 'bg-emerald-400/10 text-emerald-400'
                        : 'bg-[#ffa5d9]/10 text-[#ffa5d9]'
                    }`}
                  >
                    {row.status}
                  </span>
                </article>
              );
            })}
          </div>
        </section>

        <section className='pt-4 flex flex-col gap-4'>
          <Button variant='primary'>New Report</Button>

          <div className='grid grid-cols-2 gap-3'>
            <Button variant='secondary'>Broadcast</Button>
            <Button variant='secondary'>Audit Full Logs</Button>
          </div>
        </section>
      </div>
    </main>
  );
}
