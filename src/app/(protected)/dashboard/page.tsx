import {
  Activity,
  BellRing,
  Database,
  Server,
  ShieldCheck,
  UserRound,
} from 'lucide-react';

type StatCard = {
  label: string;
  value: string;
  trend: string;
  trendColor: string;
};

type ActivityItem = {
  title: string;
  description: string;
  time: string;
  icon: React.ElementType;
};

const topStats: StatCard[] = [
  {
    label: 'TOTAL CLIENTS',
    value: '1,284',
    trend: '+12%',
    trendColor: 'text-emerald-400',
  },
  {
    label: 'MONTHLY GROWTH',
    value: '184',
    trend: '+8%',
    trendColor: 'text-emerald-400',
  },
  {
    label: 'ACTIVE RECORDS',
    value: '42',
    trend: 'k',
    trendColor: 'text-neutral-300',
  },
  {
    label: 'RETENTION RATE',
    value: '98',
    trend: '%',
    trendColor: 'text-neutral-300',
  },
];

const recentActivity: ActivityItem[] = [
  {
    title: 'Julian Thorne',
    description: 'Updated system architecture docs',
    time: '10m ago',
    icon: UserRound,
  },
  {
    title: 'Astra Dynamics',
    description: 'Deployed new microservice cluster',
    time: '1h ago',
    icon: Database,
  },
  {
    title: 'Security Audit',
    description: 'Completed routine compliance check',
    time: '3h ago',
    icon: ShieldCheck,
  },
  {
    title: 'Data Migration',
    description: 'Successfully transferred 5TB',
    time: '5h ago',
    icon: Activity,
  },
  {
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
            <article
              key={stat.label}
              className='rounded-xl border border-neutral-600/20 bg-neutral-850 p-4.25 flex flex-col'
            >
              <p className='text-xs leading-4 tracking-[1.2px] text-neutral-300 uppercase'>
                {stat.label}
              </p>
              <div className='mt-auto flex items-end justify-between'>
                <p className='font-mono text-3xl leading-8 text-neutral-100'>
                  {stat.value}
                </p>
                <p className={`font-mono text-xs leading-4 ${stat.trendColor}`}>
                  {stat.trend}
                </p>
              </div>
            </article>
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

          <div className='space-y-3'>
            {recentActivity.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={`${item.title}-${item.time}`}
                  className='flex items-center gap-3 rounded-lg p-3'
                >
                  <div className='size-10 rounded-full bg-neutral-750 flex items-center justify-center shrink-0'>
                    <Icon size={14} className='text-brand-300' />
                  </div>

                  <div className='min-w-0 flex-1'>
                    <p className='text-sm leading-5 font-medium text-neutral-100'>
                      {item.title}
                    </p>
                    <p className='text-xs leading-4 text-neutral-300'>
                      {item.description}
                    </p>
                  </div>

                  <span className='text-xs leading-4 text-neutral-500 font-mono'>
                    {item.time}
                  </span>
                </article>
              );
            })}
          </div>
        </section>

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
              <p className='text-xs leading-4 text-neutral-300'>
                Critical Issues
              </p>
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

        <section className='rounded-[10px] border border-neutral-600/20 bg-neutral-850 p-5.25'>
          <div className='mb-2 flex items-center justify-between'>
            <h2 className='text-sm leading-5 font-semibold text-neutral-100'>
              Infrastructure Status
            </h2>
            <div className='flex items-center gap-2'>
              <span className='size-2 rounded-full bg-emerald-400' />
              <span className='font-mono text-xs leading-4 text-emerald-400'>
                99.998% Uptime
              </span>
            </div>
          </div>

          <div className='space-y-3'>
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

        <section className='pt-4 space-y-3'>
          <button className='w-full rounded-lg bg-linear-to-r from-brand-600 to-brand-400 py-3 text-sm leading-5 font-semibold text-brand-900'>
            New Report
          </button>

          <div className='grid grid-cols-2 gap-3'>
            <button className='w-full rounded-lg border border-neutral-600/20 bg-neutral-800 py-3.25 text-sm leading-5 font-medium text-neutral-100'>
              Broadcast
            </button>
            <button className='w-full rounded-lg border border-neutral-600/20 bg-neutral-800 py-3.25 text-sm leading-5 font-medium text-neutral-100'>
              Audit Full Logs
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
