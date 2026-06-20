import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Integrations() {
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

  const integrations = [
    {
      name: 'Slack',
      description: 'Send notifications and alerts directly to your Slack channels.',
      category: 'Communication',
      icon: '💬',
      features: ['Real-time notifications', 'Custom workflows', 'Bot commands'],
    },
    {
      name: 'GitHub',
      description: 'Sync repositories and automate deployment workflows.',
      category: 'Development',
      icon: '🐙',
      features: ['CI/CD integration', 'Code review automation', 'Release management'],
    },
    {
      name: 'Jira',
      description: 'Manage projects and track issues seamlessly.',
      category: 'Project Management',
      icon: '📋',
      features: ['Issue tracking', 'Sprint planning', 'Agile workflows'],
    },
    {
      name: 'Salesforce',
      description: 'Sync customer data and manage CRM workflows.',
      category: 'CRM',
      icon: '💼',
      features: ['Contact sync', 'Deal tracking', 'Sales automation'],
    },
    {
      name: 'Stripe',
      description: 'Process payments and manage billing.',
      category: 'Payments',
      icon: '💳',
      features: ['Payment processing', 'Subscription management', 'Invoice automation'],
    },
    {
      name: 'AWS',
      description: 'Deploy and scale on Amazon Web Services.',
      category: 'Cloud',
      icon: '☁️',
      features: ['EC2 integration', 'S3 storage', 'Lambda functions'],
    },
    {
      name: 'Google Cloud',
      description: 'Leverage Google Cloud Platform services.',
      category: 'Cloud',
      icon: '🌐',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery'],
    },
    {
      name: 'Azure',
      description: 'Build on Microsoft Azure infrastructure.',
      category: 'Cloud',
      icon: '🔷',
      features: ['Virtual Machines', 'App Service', 'SQL Database'],
    },
    {
      name: 'Datadog',
      description: 'Monitor and analyze application performance.',
      category: 'Monitoring',
      icon: '📊',
      features: ['APM monitoring', 'Log management', 'Alerting'],
    },
    {
      name: 'PagerDuty',
      description: 'Incident response and on-call management.',
      category: 'Incident Management',
      icon: '🚨',
      features: ['Alert routing', 'On-call scheduling', 'Incident tracking'],
    },
    {
      name: 'Zapier',
      description: 'Connect with 5000+ apps without coding.',
      category: 'Automation',
      icon: '⚡',
      features: ['No-code automation', 'Multi-app workflows', 'Data sync'],
    },
    {
      name: 'HubSpot',
      description: 'Manage marketing, sales, and customer service.',
      category: 'Marketing',
      icon: '🎯',
      features: ['Email marketing', 'Lead scoring', 'CRM integration'],
    },
  ];

  const categories = ['All', 'Communication', 'Development', 'CRM', 'Cloud', 'Monitoring', 'Automation', 'Marketing'];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Integrations
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Connect ApexFlow with your favorite tools and services. Automate workflows and streamline operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {integrations.map((integration, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4">{integration.icon}</div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {integration.name}
                </h3>
                <p className="text-sm text-accent font-semibold mb-3">
                  {integration.category}
                </p>
                <p className="text-foreground/70 mb-6">{integration.description}</p>
                <ul className="space-y-2 mb-6">
                  {integration.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <a className="block text-center w-full px-4 py-2 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all group-hover:bg-accent group-hover:text-primary">
                    Learn More
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Integration Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Need a Custom Integration?
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Our API is powerful and flexible. Build custom integrations tailored to your specific needs.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95 group">
                View API Documentation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
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
              Start Integrating Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Connect your tools and automate your workflows in minutes.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 active:scale-95">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
