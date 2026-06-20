import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [appForm, setAppForm] = useState({
    name: '',
    email: '',
    resumeUrl: '',
    message: '',
  });

  const applicationMutation = trpc.applications.submit.useMutation();

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;
    try {
      await applicationMutation.mutateAsync({
        jobId: String(selectedJob.id),
        jobTitle: selectedJob.title,
        name: appForm.name,
        email: appForm.email,
        resumeUrl: appForm.resumeUrl,
        message: appForm.message,
      });
      toast.success(`Application for ${selectedJob.title} submitted successfully!`);
      setIsDialogOpen(false);
      setAppForm({ name: '', email: '', resumeUrl: '', message: '' });
    } catch (err: any) {
      toast.error(err?.message || 'Failed to submit application. Please try again.');
    }
  };

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

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$180K - $240K',
      description: 'Lead backend development for our core platform. Work with Go, Kubernetes, and cloud infrastructure.',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      salary: '$150K - $200K',
      description: 'Drive product strategy and roadmap. Work cross-functionally with engineering and design teams.',
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$160K - $220K',
      description: 'Build and maintain our cloud infrastructure. Experience with AWS, Terraform, and CI/CD pipelines.',
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130K - $180K',
      description: 'Design beautiful and intuitive interfaces. Work with Figma and conduct user research.',
    },
    {
      id: 5,
      title: 'Sales Executive',
      department: 'Sales',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120K + Commission',
      description: 'Build relationships with enterprise customers. Target accounts and close deals.',
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100K - $140K',
      description: 'Ensure customer success and satisfaction. Manage accounts and drive renewals.',
    },
    {
      id: 7,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$170K - $230K',
      description: 'Build ML models and analytics pipelines. Work with Python, TensorFlow, and BigQuery.',
    },
    {
      id: 8,
      title: 'Frontend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$150K - $210K',
      description: 'Build responsive web applications with React. Focus on performance and accessibility.',
    },
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Top-tier compensation packages' },
    { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical, dental, vision' },
    { icon: '🏠', title: 'Remote Work', description: 'Work from anywhere in the world' },
    { icon: '📚', title: 'Learning Budget', description: '$5K annual professional development' },
    { icon: '🎉', title: 'Equity', description: 'Stock options for all employees' },
    { icon: '🏖️', title: 'Unlimited PTO', description: 'Take time off when you need it' },
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
              Join Our Team
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              We're hiring talented people to help us build the future of enterprise software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Work at ApexFlow?
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-white rounded-xl border border-border hover:shadow-lg hover:border-accent/50 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-xl text-foreground/70">
              {jobs.length} positions available across all departments
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {jobs.map(job => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{job.department}</p>
                    <p className="text-foreground/80">{job.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-foreground/70">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/70">
                      <Briefcase className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/70">
                      <DollarSign className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{job.salary}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedJob(job);
                        setIsDialogOpen(true);
                      }}
                      className="w-full mt-4 px-4 py-2 h-10 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all group-hover:bg-accent group-hover:text-primary flex items-center justify-center"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Dialog Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              Submit your details to start the interview loop for the {selectedJob?.department} team.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleApplySubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="John Doe"
                value={appForm.name}
                onChange={e => setAppForm(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="john.doe@example.com"
                value={appForm.email}
                onChange={e => setAppForm(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Resume URL</label>
              <input
                type="url"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="https://example.com/resume.pdf"
                value={appForm.resumeUrl}
                onChange={e => setAppForm(prev => ({ ...prev, resumeUrl: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Cover Message / Notes</label>
              <textarea
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                rows={3}
                placeholder="Tell us why you are interested in this position..."
                value={appForm.message}
                onChange={e => setAppForm(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>
            <DialogFooter>
              <button
                type="submit"
                disabled={applicationMutation.isPending}
                className="w-full py-3 h-12 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent hover:text-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-primary-foreground flex items-center justify-center gap-2 mt-2"
              >
                {applicationMutation.isPending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Culture Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container max-w-3xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Our Culture
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              At ApexFlow, we believe in building a culture of innovation, collaboration, and excellence. We value diverse perspectives, encourage continuous learning, and celebrate wins together. Our team is passionate about solving hard problems and building software that matters.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We're committed to creating an inclusive workplace where everyone can do their best work. We offer flexible schedules, remote work options, and a supportive environment that values work-life balance.
            </p>
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
              Don't See Your Role?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and let's talk!
            </p>
            <button className="px-8 py-4 h-12 bg-accent text-primary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center">
              Send Your Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
