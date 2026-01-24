// components/layout/Footer.tsx
import { WhatsAppIcon, PhoneIcon, EmailIcon, LocationIcon } from '@/components/icons';

export const Footer = () => {
  return (
    <footer 
      className="border-t border-white/5 backdrop-blur-xl mt-24"
      style={{ background: 'oklch(15% 0.05 260 / 0.9)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[oklch(65%_0.18_190)] to-[oklch(65%_0.15_240)] 
                              flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'oklch(95% 0.02 260)' }}>NEXLYN</h3>
            </div>
            <p className="text-sm mb-6" style={{ color: 'oklch(60% 0.01 260)' }}>
              Authorized MikroTik distributor serving UAE, GCC, and MENA regions with enterprise networking solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" 
                style={{ color: 'oklch(80% 0.02 260)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Products', 'Solutions', 'Partners', 'Support', 'About Us'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} 
                     className="text-sm hover:text-[oklch(65%_0.18_190)] transition-colors"
                     style={{ color: 'oklch(60% 0.01 260)' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" 
                style={{ color: 'oklch(80% 0.02 260)' }}>
              Products
            </h4>
            <ul className="space-y-3">
              {['Routers', 'Switches', 'Wireless', 'LTE/5G', 'Accessories'].map(product => (
                <li key={product}>
                  <a href={`#${product.toLowerCase()}`} 
                     className="text-sm hover:text-[oklch(65%_0.18_190)] transition-colors"
                     style={{ color: 'oklch(60% 0.01 260)' }}>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" 
                style={{ color: 'oklch(80% 0.02 260)' }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0 mt-0.5" 
                              style={{ color: 'oklch(65% 0.18 190)' }} />
                <div>
                  <p className="text-sm" style={{ color: 'oklch(80% 0.02 260)' }}>
                    WhatsApp
                  </p>
                  <a href="https://wa.me/971502474482" 
                     className="text-sm hover:text-[oklch(65%_0.18_190)] transition-colors"
                     style={{ color: 'oklch(60% 0.01 260)' }}>
                    +971 50 247 4482
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 flex-shrink-0 mt-0.5" 
                           style={{ color: 'oklch(65% 0.18 190)' }} />
                <div>
                  <p className="text-sm" style={{ color: 'oklch(80% 0.02 260)' }}>
                    Phone
                  </p>
                  <a href="tel:+971502474482" 
                     className="text-sm hover:text-[oklch(65%_0.18_190)] transition-colors"
                     style={{ color: 'oklch(60% 0.01 260)' }}>
                    +971 50 247 4482
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <EmailIcon className="w-5 h-5 flex-shrink-0 mt-0.5" 
                           style={{ color: 'oklch(65% 0.18 190)' }} />
                <div>
                  <p className="text-sm" style={{ color: 'oklch(80% 0.02 260)' }}>
                    Email
                  </p>
                  <a href="mailto:info@nexlyn.ae" 
                     className="text-sm hover:text-[oklch(65%_0.18_190)] transition-colors"
                     style={{ color: 'oklch(60% 0.01 260)' }}>
                    info@nexlyn.ae
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <LocationIcon className="w-5 h-5 flex-shrink-0 mt-0.5" 
                              style={{ color: 'oklch(65% 0.18 190)' }} />
                <div>
                  <p className="text-sm" style={{ color: 'oklch(80% 0.02 260)' }}>
                    Address
                  </p>
                  <p className="text-sm" style={{ color: 'oklch(60% 0.01 260)' }}>
                    Dubai Silicon Oasis<br />
                    Dubai, UAE
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'oklch(60% 0.01 260)' }}>
            © 2026 NEXLYN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-sm hover:text-[oklch(65%_0.18_190)] transition-colors"
               style={{ color: 'oklch(60% 0.01 260)' }}>
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm hover:text-[oklch(65%_0.18_190)] transition-colors"
               style={{ color: 'oklch(60% 0.01 260)' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
