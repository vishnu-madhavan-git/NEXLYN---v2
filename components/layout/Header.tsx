// components/layout/Header.tsx
'use client';
import { useState } from 'react';
import { WhatsAppIcon, PhoneIcon, EmailIcon } from '@/components/icons';

export const Header = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const navItems = ['Overview', 'Products', 'Solutions', 'Partners', 'Support'];
  
  return (
    <header 
      className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl"
      style={{ background: 'oklch(15% 0.05 260 / 0.8)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[oklch(65%_0.18_190)] to-[oklch(65%_0.15_240)] 
                            flex items-center justify-center shadow-lg">
              {/* Network/Globe Icon SVG */}
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight" style={{ color: 'oklch(95% 0.02 260)' }}>NEXLYN</h1>
              <p className="text-xs" style={{ color: 'oklch(60% 0.01 260)' }}>
                MikroTik Distribution UAE
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-white/10 text-[oklch(95%_0.02_260)]'
                    : 'text-[oklch(60%_0.01_260)] hover:text-[oklch(95%_0.02_260)] hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/971502474482" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all
                         bg-[oklch(65%_0.18_190/0.1)] border-[oklch(65%_0.18_190/0.2)]
                         hover:bg-[oklch(65%_0.18_190/0.2)] text-[oklch(65%_0.18_190)]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
            </a>
            
            <a 
              href="tel:+971502474482"
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <PhoneIcon className="w-5 h-5" style={{ color: 'oklch(60% 0.01 260)' }} />
            </a>
            
            <a 
              href="mailto:info@nexlyn.ae"
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <EmailIcon className="w-5 h-5" style={{ color: 'oklch(60% 0.01 260)' }} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
