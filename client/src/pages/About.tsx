import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
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

  const team = [
    { name: 'Alex Chen', role: 'Founder & CEO', initials: 'AC', color: 'bg-primary' },
    { name: 'Sarah Williams', role: 'VP Engineering', initials: 'SW', color: 'bg-accent' },
    { name: 'Marcus Johnson', role: 'VP Product', initials: 'MJ', color: 'bg-primary' },
    { name: 'Emma Rodriguez', role: 'VP Design', initials: 'ER', color: 'bg-accent' },
  ];

  const values = [
    {
      title: 'Customer First',
      description: 'Everything we do is driven by our customers needs and success.',
    },
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.',
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication and honest partnerships.',
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every detail of our product and service.',
    },
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
              About ApexFlow
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              We're building the future of enterprise software—one customer at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2
                className="text-4xl font-bold text-primary mb-4"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Our Mission
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To empower enterprises with intelligent, scalable, and user-friendly software that transforms how they operate. We believe that great technology should be accessible to businesses of all sizes, enabling them to compete globally and innovate fearlessly.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2
                className="text-4xl font-bold text-primary mb-4"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Our Vision
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                A world where enterprise software is intuitive, reliable, and delightful to use. We envision a future where businesses can focus on their core mission instead of wrestling with complex tools, where innovation happens at the speed of thought.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-foreground/70">
              Experienced leaders building the future
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-foreground/70">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">5,000+</div>
              <p className="text-primary-foreground/80">Active Customers</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">99.99%</div>
              <p className="text-primary-foreground/80">Uptime SLA</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-primary-foreground/80">Team Members</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-5xl font-bold mb-2">$50M+</div>
              <p className="text-primary-foreground/80">ARR</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Join Our Mission
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              We're hiring talented people to help us build the future of enterprise software.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95">
              View Open Positions
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
