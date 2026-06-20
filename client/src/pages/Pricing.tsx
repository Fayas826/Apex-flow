import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
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

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('4242 4242 4242 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('123');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCheckoutOpen(false);
      toast.success(`Subscription to ${selectedPlan?.name} (${billingPeriod}) activated successfully!`);
    }, 1200);
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

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and projects',
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'API access',
        'Community forum',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Up to 50 team members',
        '500GB storage',
        'Advanced analytics',
        'Priority email & chat support',
        'Advanced API',
        'Custom integrations',
        'SSO & SAML',
        'Advanced security',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      monthlyPrice: null,
      annualPrice: null,
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Custom analytics',
        '24/7 phone & chat support',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security & compliance',
        'On-premise deployment',
        'SLA guarantee',
      ],
      highlighted: false,
      custom: true,
    },
  ];

  const comparison = [
    { feature: 'Team Members', starter: 'Up to 5', professional: 'Up to 50', enterprise: 'Unlimited' },
    { feature: 'Storage', starter: '10GB', professional: '500GB', enterprise: 'Unlimited' },
    { feature: 'API Rate Limit', starter: '1K/min', professional: '10K/min', enterprise: 'Custom' },
    { feature: 'Support', starter: 'Email', professional: 'Priority', enterprise: '24/7 Phone' },
    { feature: 'SLA', starter: '99.5%', professional: '99.9%', enterprise: '99.99%' },
    { feature: 'SSO/SAML', starter: false, professional: true, enterprise: true },
    { feature: 'Custom Integrations', starter: false, professional: true, enterprise: true },
    { feature: 'Dedicated Manager', starter: false, professional: false, enterprise: true },
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Choose the perfect plan for your needs. Always flexible to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container flex justify-center">
          <motion.div
            className="inline-flex bg-secondary rounded-lg p-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Annual
              <span className="ml-2 text-accent font-bold">Save 17%</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`rounded-xl border transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-accent bg-gradient-to-br from-white to-accent/5 shadow-2xl scale-105 md:scale-110'
                    : 'border-border bg-white hover:shadow-lg'
                }`}
              >
                <div className="p-8">
                  {plan.highlighted && (
                    <div className="mb-4 inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-foreground/70 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    {plan.custom ? (
                      <div>
                        <p className="text-foreground/70 mb-4">Custom pricing based on your needs</p>
                        <button
                          onClick={() => {
                            setSelectedPlan(plan);
                            setIsCheckoutOpen(true);
                          }}
                          className="w-full px-6 py-3 h-12 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                        >
                          Book a Demo
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-4xl font-bold text-primary">
                            ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                          </span>
                          <span className="text-foreground/70">
                            /{billingPeriod === 'monthly' ? 'month' : 'year'}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedPlan(plan);
                            setIsCheckoutOpen(true);
                          }}
                          className={`w-full px-6 py-3 h-12 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                            plan.highlighted
                              ? 'bg-accent text-primary hover:shadow-lg hover:shadow-accent/30'
                              : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20'
                          }`}
                        >
                          Start Free Trial
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="border-t border-border pt-8">
                    <p className="font-semibold text-primary mb-4">What's included:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3 text-foreground/80">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
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
              Detailed Comparison
            </h2>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-semibold text-primary">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-white/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-foreground/70">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-foreground/40">—</span>
                        )
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-foreground/70">
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-foreground/40">—</span>
                        )
                      ) : (
                        row.professional
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-foreground/70">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-foreground/40">—</span>
                        )
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Pricing FAQ
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-primary mb-2">Can I change plans anytime?</h3>
              <p className="text-foreground/70">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-primary mb-2">Do you offer discounts for annual billing?</h3>
              <p className="text-foreground/70">Yes! Annual plans save you 17% compared to monthly billing.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-border">
              <h3 className="font-semibold text-primary mb-2">Is there a free trial?</h3>
              <p className="text-foreground/70">Yes, all plans include a 14-day free trial. No credit card required.</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Start your free 14-day trial today. No credit card required.
            </p>
            <button className="px-8 py-4 h-12 bg-accent text-primary rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center">
              Start Free Trial
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stripe Sandbox Checkout Dialog */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Stripe Checkout Sandbox</DialogTitle>
            <DialogDescription>
              {selectedPlan?.custom
                ? `Requesting custom demo and sandbox setup for ${selectedPlan?.name} plan.`
                : `Activate your 14-day trial of the ${selectedPlan?.name} (${billingPeriod}) plan.`}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCheckoutSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Selected Plan</label>
              <div className="p-3 bg-muted rounded-md flex justify-between items-center">
                <span className="font-bold text-primary">{selectedPlan?.name}</span>
                <span className="text-sm text-muted-foreground">
                  {selectedPlan?.custom
                    ? 'Custom Quote'
                    : `$${billingPeriod === 'monthly' ? selectedPlan?.monthlyPrice : selectedPlan?.annualPrice}/${billingPeriod === 'monthly' ? 'mo' : 'yr'}`}
                </span>
              </div>
            </div>

            {!selectedPlan?.custom && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Card Number (Demo Mock)</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Expires</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      value={expiry}
                      onChange={e => setExpiry(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">CVC</label>
                    <input
                      type="text"
                      required
                      placeholder="CVC"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      value={cvc}
                      onChange={e => setCvc(e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}

            <DialogFooter>
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 h-12 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent hover:text-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-primary-foreground flex items-center justify-center gap-2 mt-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Processing Payment...
                  </>
                ) : selectedPlan?.custom ? (
                  'Book Demo & Sandbox'
                ) : (
                  'Pay & Subscribe'
                )}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
