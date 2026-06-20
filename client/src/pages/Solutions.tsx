import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Solutions() {
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

  const solutions = [
    {
      title: 'Enterprise Resource Planning',
      description: 'Streamline operations with integrated ERP capabilities designed for modern enterprises.',
      benefits: ['Real-time inventory management', 'Financial planning & analysis', 'Supply chain optimization'],
      icon: '📊',
    },
    {
      title: 'Customer Relationship Management',
      description: 'Build stronger customer relationships with our comprehensive CRM platform.',
      benefits: ['Sales pipeline management', 'Customer analytics', 'Marketing automation'],
      icon: '👥',
    },
    {
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights with advanced analytics and reporting.',
      benefits: ['Custom dashboards', 'Predictive analytics', 'Real-time reporting'],
      icon: '📈',
    },
    {
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline business processes.',
      benefits: ['Process automation', 'Approval workflows', 'Task management'],
      icon: '⚙️',
    },
    {
      title: 'Collaboration Platform',
      description: 'Enable seamless team collaboration with integrated communication tools.',
      benefits: ['Team messaging', 'File sharing', 'Project management'],
      icon: '💼',
    },
    {
      title: 'Security & Compliance',
      description: 'Meet regulatory requirements with enterprise-grade security and compliance tools.',
      benefits: ['Access control', 'Audit trails', 'Compliance reporting'],
      icon: '🔐',
    },
  ];

  const industries = [
    { name: 'Financial Services', description: 'Secure, compliant solutions for banking and insurance' },
    { name: 'Healthcare', description: 'HIPAA-compliant platforms for healthcare providers' },
    { name: 'Manufacturing', description: 'Production optimization and supply chain management' },
    { name: 'Retail', description: 'Omnichannel retail and inventory management' },
    { name: 'Technology', description: 'DevOps and software development solutions' },
    { name: 'Education', description: 'Campus management and student information systems' },
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
              Solutions for Every Business
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Industry-specific solutions designed to solve your unique business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {solution.title}
                </h3>
                <p className="text-foreground/70 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.benefits.map((benefit, j) => (
                    <li key={j} className="text-sm text-foreground/70">
                      ✓ {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
                >
                  <a>Learn More <ArrowRight className="w-4 h-4" /></a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industry Solutions
            </h2>
            <p className="text-xl text-foreground/70">
              Tailored solutions for your industry
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {industry.name}
                </h3>
                <p className="text-foreground/70 mb-4">{industry.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
                >
                  <a>Explore <ArrowRight className="w-4 h-4" /></a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
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
              Customer Success Stories
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  Case Study
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                TechFlow: 10x Faster Deployments
              </h3>
              <p className="text-foreground/70 mb-6">
                How TechFlow reduced deployment time from 2 weeks to 2 days using ApexFlow's automation platform.
              </p>
              <div className="space-y-2 mb-6 text-sm text-foreground/70">
                <p>📊 Result: 85% reduction in deployment time</p>
                <p>💰 Savings: $2M annually</p>
                <p>👥 Team: 50+ engineers</p>
              </div>
              <Link
                href="/customers"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                <a>Read Full Case Study <ArrowRight className="w-4 h-4" /></a>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  Case Study
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                DataSync: Scaling to 1M Users
              </h3>
              <p className="text-foreground/70 mb-6">
                How DataSync scaled from 100K to 1M users in 6 months with ApexFlow's infrastructure.
              </p>
              <div className="space-y-2 mb-6 text-sm text-foreground/70">
                <p>📊 Growth: 10x user increase</p>
                <p>⚡ Performance: 99.99% uptime</p>
                <p>💵 Cost: 40% reduction</p>
              </div>
              <Link
                href="/customers"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                <a>Read Full Case Study <ArrowRight className="w-4 h-4" /></a>
              </Link>
            </motion.div>
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
              Find Your Solution
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how ApexFlow can solve your specific business challenges.
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-4 bg-accent text-primary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 active:scale-95">
                Schedule a Demo
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
