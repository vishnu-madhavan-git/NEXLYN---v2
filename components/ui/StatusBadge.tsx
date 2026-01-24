// components/ui/StatusBadge.tsx
type StatusType = 'delivered' | 'pending' | 'in-transit' | 'delayed';

interface StatusBadgeProps {
  status: StatusType;
  label: string;
}

const statusStyles = {
  delivered: 'bg-[oklch(70%_0.18_140/0.1)] text-[oklch(70%_0.18_140)] border-[oklch(70%_0.18_140/0.2)]',
  pending: 'bg-[oklch(65%_0.15_240/0.1)] text-[oklch(65%_0.15_240)] border-[oklch(65%_0.15_240/0.2)]',
  'in-transit': 'bg-[oklch(65%_0.18_190/0.1)] text-[oklch(65%_0.18_190)] border-[oklch(65%_0.18_190/0.2)]',
  delayed: 'bg-[oklch(60%_0.2_25/0.1)] text-[oklch(60%_0.2_25)] border-[oklch(60%_0.2_25/0.2)]',
};

export const StatusBadge = ({ status, label }: StatusBadgeProps) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-current" />
    {label}
  </span>
);
