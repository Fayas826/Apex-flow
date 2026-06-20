import { Link } from 'wouter';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Security', href: '/security' },
      { label: 'Integrations', href: '/integrations' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Customers', href: '/customers' },
    ],
    Resources: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'API Reference', href: '/contact' },
      { label: 'Documentation', href: '/contact' },
      { label: 'Support', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy', href: '/security' },
      { label: 'Terms', href: '/contact' },
      { label: 'Cookies', href: '/contact' },
      { label: 'Compliance', href: '/security' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@apexflow.com', label: 'Email' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-24">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-primary-foreground/20">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest news, features, and insights delivered to your inbox.
            </p>
            <form className="flex gap-3 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 h-12 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap flex items-center justify-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-primary-foreground">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => {
                  const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto');
                  return (
                    <li key={link.href}>
                      {isExternal ? (
                        <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href}>
                          <a className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                            {link.label}
                          </a>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-primary-foreground/20">
          <div className="flex items-center gap-3">
            <img
              src="/apexflow_logo.png"
              alt="ApexFlow"
              className="h-6"
            />
            <div>
              <p className="font-semibold">ApexFlow</p>
              <p className="text-sm text-primary-foreground/70">
                © {currentYear} ApexFlow Inc. All rights reserved.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}                  className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
