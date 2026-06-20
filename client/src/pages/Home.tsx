import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Users, Gauge, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';
import { useLocation, Link } from 'wouter';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardView from '@/components/DashboardView';

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [location, setLocation] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  if (isAuthenticated) {
    return (
      <DashboardLayout>
        {location === '/some-path' ? (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Settings & Collaborators</h2>
              <p className="text-muted-foreground">Manage your workspace members and team access levels.</p>
            </div>
            <div className="border border-dashed rounded-lg h-[400px] flex flex-col items-center justify-center gap-2 text-muted-foreground bg-muted/20">
              <span className="font-semibold text-lg">Settings & Collaborator Panel</span>
              <span>This is a sandbox placeholder for Page 2.</span>
            </div>
          </div>
        ) : (
          <DashboardView />
        )}
      </DashboardLayout>
    );
  }

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
      title: 'Lightning Fast',
      description: 'Sub-millisecond response times with global CDN infrastructure.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified with end-to-end encryption.',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Analytics',
      description: 'Instant insights with customizable dashboards and reports.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in workflows for seamless team coordination.',
    },
    {
      icon: Gauge,
      title: 'Auto-Scaling',
      description: 'Handles millions of requests without manual intervention.',
    },
    {
      icon: Lock,
      title: 'Compliance Ready',
      description: 'GDPR, HIPAA, and SOX compliant out of the box.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663598993646/B7hMghKeCb62aeXWNeoHbA/avatar-sarah-chen-EQUicjfCyyfo3ReSztQGd6.webp',
      quote: 'ApexFlow transformed how our team ships features. We went from 2-week sprints to daily deployments.',
    },
    {
      name: 'Marcus Johnson',
      role: 'VP Engineering, DataSync',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663598993646/B7hMghKeCb62aeXWNeoHbA/avatar-marcus-johnson-BviVVyi6AW3Lf48nfNaD5y.webp',
      quote: 'The reliability and support are unmatched. Our uptime improved from 99.5% to 99.99%.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Founder, CloudScale',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663598993646/B7hMghKeCb62aeXWNeoHbA/avatar-emma-rodriguez-Ag7LBQCyyrEtqupok32nRj.webp',
      quote: 'Best investment we made. ROI was immediate, and the team adoption was effortless.',
    },
  ];

  const faqs = [
    {
      question: 'How does ApexFlow compare to competitors?',
      answer: 'ApexFlow combines enterprise-grade reliability with developer-friendly APIs. We offer 3x faster deployment, 99.99% uptime SLA, and 24/7 premium support—all at competitive pricing.',
    },
    {
      question: 'What security certifications do you have?',
      answer: 'We maintain SOC 2 Type II, ISO 27001, GDPR, HIPAA, and SOX compliance. All data is encrypted in transit and at rest using AES-256.',
    },
    {
      question: 'Can I migrate from my current provider?',
      answer: 'Yes! Our migration team handles everything at no cost. Most customers migrate in 48 hours with zero downtime. We support all major platforms.',
    },
    {
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.99% uptime with automatic failover across multiple regions. If we miss this, you receive service credits.',
    },
    {
      question: 'How does pricing work?',
      answer: 'Transparent, usage-based pricing with no hidden fees. You pay only for what you use, with volume discounts and custom enterprise plans available.',
    },
  ];

  const blogPosts = [
    {
      title: 'The Future of Enterprise SaaS',
      excerpt: 'Exploring emerging trends and what they mean for your business.',
      date: 'Jun 15, 2024',
      category: 'Insights',
    },
    {
      title: 'Scaling to 1M Users: A Case Study',
      excerpt: 'How we helped a startup scale from 0 to 1 million users in 6 months.',
      date: 'Jun 10, 2024',
      category: 'Case Study',
    },
    {
      title: 'API Best Practices for 2024',
      excerpt: 'Essential patterns for building robust, scalable APIs.',
      date: 'Jun 5, 2024',
      category: 'Tutorial',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 relative overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, oklch(0.3 0.01 0 / 0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/20 -z-10" />

        <div className="container">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
                ✨ Trusted by 5,000+ Companies
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Enterprise-Grade Simplicity
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-2xl"
            >
              Empower your team to ship faster, scale infinitely, and focus on what matters. Built for modern enterprises.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <a className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
                    Go to Dashboard
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>
              ) : (
                <Link href="/dashboard">
                  <a className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>
              )}
              <Link href="/contact">
                <a className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary/5 transition-all duration-300 text-center flex items-center justify-center">
                  Watch Demo
                </a>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-6 text-sm text-foreground/70"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 md:py-20 bg-white border-y border-border">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">Trusted by Leading Companies</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: 'TechCorp', icon: '🏢' },
              { name: 'DataFlow', icon: '📊' },
              { name: 'CloudPeak', icon: '☁️' },
              { name: 'Innovate', icon: '💡' },
            ].map((company) => (
              <motion.div
                key={company.name}
                variants={itemVariants}
                className="opacity-50 hover:opacity-90 transition-opacity flex items-center gap-2 cursor-default select-none"
              >
                <span className="text-2xl">{company.icon}</span>
                <span className="font-bold text-lg text-primary tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {company.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Metrics */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '5,000+', label: 'Active Customers', icon: '👥' },
              { number: '100B+', label: 'Transactions Processed', icon: '💰' },
              { number: '99.99%', label: 'Uptime SLA', icon: '⚡' },
              { number: '340%', label: 'Average ROI', icon: '📈' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-foreground/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-white flex flex-col md:flex-row h-[500px]"
          >
            {/* Sidebar Mock */}
            <div className="w-full md:w-64 bg-primary text-primary-foreground p-6 flex flex-col justify-between shrink-0">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>ApexFlow</span>
                </div>
                <div className="space-y-1">
                  <div className="px-3 py-2 bg-accent/20 text-accent rounded-lg font-medium text-sm flex items-center gap-2 cursor-pointer">
                    <TrendingUp className="w-4 h-4" /> Overview
                  </div>
                  <div className="px-3 py-2 hover:bg-white/5 rounded-lg text-primary-foreground/70 font-medium text-sm flex items-center gap-2 cursor-pointer">
                    <Zap className="w-4 h-4" /> Analytics
                  </div>
                  <div className="px-3 py-2 hover:bg-white/5 rounded-lg text-primary-foreground/70 font-medium text-sm flex items-center gap-2 cursor-pointer">
                    <Users className="w-4 h-4" /> Customers
                  </div>
                  <div className="px-3 py-2 hover:bg-white/5 rounded-lg text-primary-foreground/70 font-medium text-sm flex items-center gap-2 cursor-pointer">
                    <Shield className="w-4 h-4" /> Security
                  </div>
                </div>
              </div>
              <div className="text-xs text-primary-foreground/50 border-t border-white/10 pt-4">
                Interactive Preview Mode
              </div>
            </div>

            {/* Dashboard Body Mock */}
            <div className="flex-1 bg-secondary/30 p-6 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold text-lg text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>Good morning, Operator</h3>
                  <p className="text-xs text-muted-foreground">Here is what is happening with ApexFlow today.</p>
                </div>
                <div className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                  Demo
                </div>
              </div>

              {/* Cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <div className="bg-white p-4 rounded-xl border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase">Total Revenue</p>
                  <p className="text-xl font-bold text-primary mt-1">$2.45M</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase">Uptime</p>
                  <p className="text-xl font-bold text-emerald-600 mt-1">99.99%</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-border">
                  <p className="text-xs text-muted-foreground font-semibold uppercase">Response Time</p>
                  <p className="text-xl font-bold text-amber-500 mt-1">18ms</p>
                </div>
              </div>

              {/* Mini Chart Mock */}
              <div className="flex-1 bg-white p-4 rounded-xl border border-border flex flex-col items-center justify-center text-center">
                <TrendingUp className="w-8 h-8 text-accent mb-2 animate-bounce" />
                <p className="text-sm font-semibold text-primary">Interactive Dashboard Connected</p>
                <Link href="/dashboard">
                  <a className="mt-2 text-xs px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-primary transition-all">
                    Sign in to View Real Telemetry
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
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
              Powerful Features
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale enterprise applications.
            </p>
          </motion.div>

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
                  className="p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
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

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-secondary/40">
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
              Loved by Industry Leaders
            </h2>
            <p className="text-xl text-foreground/70">
              See what our customers are saying
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-primary text-left">
                    {faq.question}
                  </span>
                  <span
                    className={`text-accent transition-transform ${
                      expandedFaq === i ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 bg-secondary/30 border-t border-border text-foreground/80"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
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
              Latest from Our Blog
            </h2>
            <p className="text-xl text-foreground/70">
              Insights, tutorials, and best practices
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-foreground/60">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using ApexFlow to accelerate growth.
            </p>
            {isAuthenticated ? (
              <button className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2 group">
                Go to Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <a
                href={getLoginUrl()}
                className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2 group"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
