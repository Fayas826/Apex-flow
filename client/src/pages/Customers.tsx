import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Customers() {
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

  const caseStudies = [
    {
      company: 'TechFlow',
      industry: 'Software Development',
      logo: '🚀',
      challenge: 'Deployment bottleneck causing 2-week release cycles',
      solution: 'Implemented ApexFlow automation platform',
      results: [
        '85% reduction in deployment time',
        'Daily deployments instead of bi-weekly',
        '$2M annual savings',
        '50+ engineers onboarded',
      ],
      testimonial: 'ApexFlow transformed how our team ships features. We went from 2-week sprints to daily deployments.',
      author: 'Sarah Chen, CTO',
    },
    {
      company: 'DataSync',
      industry: 'Data Analytics',
      logo: '📊',
      challenge: 'Scaling infrastructure for 1M+ users',
      solution: 'Migrated to ApexFlow cloud infrastructure',
      results: [
        '10x user growth in 6 months',
        '99.99% uptime achieved',
        '40% cost reduction',
        'Zero downtime migrations',
      ],
      testimonial: 'The reliability and support are unmatched. Our uptime improved from 99.5% to 99.99%.',
      author: 'Marcus Johnson, VP Engineering',
    },
    {
      company: 'CloudScale',
      industry: 'Cloud Services',
      logo: '☁️',
      challenge: 'Complex compliance requirements (HIPAA, SOX)',
      solution: 'Deployed ApexFlow enterprise security suite',
      results: [
        'Full HIPAA compliance achieved',
        'SOX audit passed first time',
        '100% data encryption',
        'Automated compliance reporting',
      ],
      testimonial: 'Best investment we made. ROI was immediate, and the team adoption was effortless.',
      author: 'Emma Rodriguez, Founder',
    },
    {
      company: 'FinanceHub',
      industry: 'Financial Services',
      logo: '💰',
      challenge: 'Real-time transaction processing at scale',
      solution: 'Implemented ApexFlow real-time analytics',
      results: [
        '100M+ transactions/day processed',
        '99.99% transaction success rate',
        'Sub-100ms latency achieved',
        '3x revenue increase',
      ],
      testimonial: 'ApexFlow enabled us to process transactions at scale we never thought possible.',
      author: 'David Park, CTO',
    },
    {
      company: 'HealthCare+',
      industry: 'Healthcare',
      logo: '🏥',
      challenge: 'HIPAA compliance and patient data security',
      solution: 'Deployed ApexFlow healthcare-grade security',
      results: [
        'HIPAA Level 3 compliance',
        '10M+ patient records secured',
        'Zero security incidents',
        '24/7 monitoring & support',
      ],
      testimonial: 'ApexFlow gave us the confidence to handle sensitive patient data securely.',
      author: 'Dr. Lisa Wong, Chief Medical Officer',
    },
    {
      company: 'RetailMax',
      industry: 'E-commerce',
      logo: '🛍️',
      challenge: 'Black Friday traffic spike handling',
      solution: 'Auto-scaling with ApexFlow infrastructure',
      results: [
        '10x traffic spike handled',
        'Zero downtime during peak',
        '200% revenue increase',
        'Customer satisfaction up 45%',
      ],
      testimonial: 'ApexFlow handled our Black Friday surge perfectly. No crashes, no issues.',
      author: 'James Chen, VP Operations',
    },
  ];

  const stats = [
    { label: 'Active Customers', value: '5,000+' },
    { label: 'Transactions Processed', value: '100B+' },
    { label: 'Uptime SLA', value: '99.99%' },
    { label: 'Average ROI', value: '340%' },
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
              Customer Success Stories
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              See how leading companies use ApexFlow to transform their business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-xl border border-border p-8 md:p-12 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{study.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{study.company}</h3>
                        <p className="text-foreground/70">{study.industry}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-foreground/80">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-foreground/80">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8 mb-6">
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-accent" />
                        Results
                      </h4>
                      <ul className="space-y-3">
                        {study.results.map((result, j) => (
                          <li key={j} className="flex items-start gap-3 text-foreground/80">
                            <span className="text-accent font-bold mt-1">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-accent pl-4">
                      <p className="text-foreground/80 italic mb-2">"{study.testimonial}"</p>
                      <p className="font-semibold text-primary">{study.author}</p>
                    </blockquote>
                  </div>
                </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies transforming their business with ApexFlow.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2 group">
              Schedule a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
