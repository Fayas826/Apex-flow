import { motion } from 'framer-motion';
import { CheckCircle, Shield, Lock, Eye, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Security() {
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

  const certifications = [
    { name: 'SOC 2 Type II', icon: '✓', description: 'Security, availability, and confidentiality controls' },
    { name: 'ISO 27001', icon: '✓', description: 'Information security management system' },
    { name: 'GDPR Compliant', icon: '✓', description: 'EU data protection regulation' },
    { name: 'HIPAA Ready', icon: '✓', description: 'Healthcare data protection' },
    { name: 'SOX Compliant', icon: '✓', description: 'Financial reporting security' },
    { name: 'PCI DSS', icon: '✓', description: 'Payment card industry standards' },
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data encrypted in transit and at rest using AES-256 encryption.',
    },
    {
      icon: Shield,
      title: 'DDoS Protection',
      description: 'Advanced DDoS mitigation with global threat intelligence.',
    },
    {
      icon: Eye,
      title: 'Audit Trails',
      description: 'Complete audit logs for all user actions and system events.',
    },
    {
      icon: Zap,
      title: 'Penetration Testing',
      description: 'Regular third-party security assessments and penetration tests.',
    },
    {
      icon: CheckCircle,
      title: 'Access Control',
      description: 'Role-based access control (RBAC) with fine-grained permissions.',
    },
    {
      icon: Shield,
      title: 'Multi-Factor Auth',
      description: 'Support for TOTP, SMS, and hardware security keys.',
    },
  ];

  const dataProtection = [
    {
      title: 'Data Residency',
      description: 'Choose where your data is stored: US, EU, or Asia-Pacific regions.',
      features: ['Regional data centers', 'No cross-border transfers', 'Compliance with local laws'],
    },
    {
      title: 'Backup & Recovery',
      description: 'Automated daily backups with point-in-time recovery capabilities.',
      features: ['Automated backups', 'Multi-region replication', '99.99% recovery SLA'],
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive disaster recovery plan with regular testing.',
      features: ['RTO < 1 hour', 'RPO < 15 minutes', 'Failover automation'],
    },
  ];

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
              Security & Compliance
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Enterprise-grade security with compliance certifications. Your data is protected with industry-leading standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
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
              Certifications & Compliance
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 text-center"
              >
                <div className="text-5xl text-accent mb-4">{cert.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {cert.name}
                </h3>
                <p className="text-foreground/70">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 md:py-32">
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
              Security Features
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {securityFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Data Protection */}
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
              Data Protection
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {dataProtection.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Incident Response */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <motion.div
            className="bg-white rounded-xl border border-border p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold text-primary mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Security Incident Response
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              We maintain a comprehensive security incident response plan with 24/7 monitoring and rapid response capabilities. Our security team is trained to handle incidents quickly and transparently.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">Response Time</h3>
                <p className="text-foreground/70">Critical security incidents are addressed within 15 minutes of detection.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Transparency</h3>
                <p className="text-foreground/70">Customers are notified immediately of any security incidents affecting their data.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Continuous Improvement</h3>
                <p className="text-foreground/70">Post-incident reviews ensure we continuously improve our security posture.</p>
              </div>
            </div>
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
              Trust ApexFlow with Your Data
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Enterprise-grade security, compliance, and reliability. Your data is in safe hands.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 active:scale-95">
              Request Security Report
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
