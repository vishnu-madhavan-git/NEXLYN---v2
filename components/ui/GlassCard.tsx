// components/ui/GlassCard.tsx
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <div 
      className={`relative rounded-3xl border border-white/10 p-6 backdrop-blur-xl ${className}`}
      style={{
        background: 'oklch(20% 0.08 260 / 0.65)',
        boxShadow: `
          0 8px 32px -4px oklch(0% 0 0 / 0.4),
          inset 0 1px 0 0 oklch(100% 0 0 / 0.1)
        `,
        borderTopColor: 'oklch(100% 0 0 / 0.15)',
        borderLeftColor: 'oklch(100% 0 0 / 0.08)',
        borderBottomColor: 'oklch(0% 0 0 / 0.2)',
        borderRightColor: 'oklch(0% 0 0 / 0.2)',
      }}
    >
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
          backgroundSize: '128px',
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
