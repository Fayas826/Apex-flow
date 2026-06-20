import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, TrendingUp, Users, Gauge, Lock, Cpu, Database, Cloud } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Sub-millisecond response times with global CDN infrastructure and edge computing.',
      benefits: ['99.99% uptime SLA', 'Global edge nodes', 'Auto-scaling'],
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified with end-to-end encryption and advanced threat detection.',
      benefits: ['AES-256 encryption', 'DDoS protection', 'Penetration tested'],
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Analytics',
      description: 'Instant insights with customizable dashboards, reports, and predictive analytics.',
      benefits: ['Custom dashboards', 'Real-time metrics', 'Predictive AI'],
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in workflows, commenting, and permissions for seamless team coordination.',
      benefits: ['Role-based access', 'Activity logs', 'Team workspaces'],
    },
    {
      icon: Gauge,
      title: 'Auto-Scaling Infrastructure',
      description: 'Automatically handles millions of requests without manual intervention or downtime.',
      benefits: ['Horizontal scaling', 'Load balancing', 'Zero downtime'],
    },
    {
      icon: Lock,
      title: 'Compliance & Governance',
      description: 'GDPR, HIPAA, and SOX compliant with audit trails and data residency options.',
      benefits: ['GDPR compliant', 'HIPAA ready', 'Audit trails'],
    },
    {
      icon: Cpu,
      title: 'Advanced API',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and SDKs.',
      benefits: ['REST & GraphQL', 'Webhooks', 'Rate limiting'],
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Flexible data storage with backup, replication, and disaster recovery.',
      benefits: ['Automated backups', 'Multi-region replication', 'Point-in-time recovery'],
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Support',
      description: 'Deploy on AWS, Azure, GCP, or on-premise with unified management.',
      benefits: ['Multi-cloud', 'Hybrid deployment', 'Vendor agnostic'],
    },
  ];

  const integrations = [
    'Slack',
    'GitHub',
    'Jira',
    'Salesforce',
    'HubSpot',
    'Stripe',
    'AWS',
    'Azure',
    'Google Cloud',
    'Datadog',
    'PagerDuty',
    'Zapier',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Powerful Features for Every Use Case
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Discover the comprehensive feature set that makes ApexFlow the choice for enterprise teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Integrations
            </h2>
            <p className="text-xl text-foreground/70">
              Connect with your favorite tools and services
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {integrations.map((integration, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 bg-white rounded-lg border border-border hover:shadow-md hover:border-accent/50 transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🔗</div>
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {integration}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Experience the power of ApexFlow with a free 14-day trial.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 active:scale-95">
              Start Free Trial
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
