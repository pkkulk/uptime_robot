import React from 'react';

interface FooterLinksProps {
  title: string;
  links: string[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
  <div className="space-y-4">
    <h3 className="text-white font-semibold">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-sm hover:text-white transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
        <footer className="bg-[#0b121f] text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="text-white text-xl font-bold flex items-center gap-2">
              <div className="w-6 h-6 bg-emerald-500 rounded-sm" /> UptimeRobot
            </div>
            <p className="text-sm leading-relaxed">
              Monitoring websites since 2010. One of the most popular monitoring services in the world.
            </p>
          </div>
          <FooterLinks title="Product" links={["Features", "Integrations", "Pricing", "Status Pages"]} />
          <FooterLinks title="Support" links={["Help Center", "API Docs", "System Status", "Contact"]} />
          <FooterLinks title="Legal" links={["Terms", "Privacy", "GDPR", "Cookies"]} />
        </div>
      </footer>
        </div>
    );
};