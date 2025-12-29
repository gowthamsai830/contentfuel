import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { PricingPlans } from '@/entities';

const WHATSAPP_PHONE = '918500871360';

const planMessages: Record<string, { button: string; message: string }> = {
  'Creator Ignite': {
    button: 'Ignite My Content',
    message: "Hi 👋 I'm reaching out to Content Fuel. I'm a creator and interested in the Creator Ignite plan. Can you please share the next steps?"
  },
  'Brand Accelerator': {
    button: 'Accelerate My Brand',
    message: "Hi 👋 I'm reaching out to Content Fuel. I'm interested in the Brand Accelerator plan and would like to understand scope and next steps."
  },
  'Startup Scale': {
    button: 'Scale My Startup',
    message: "Hi 👋 I'm reaching out to Content Fuel. I'm interested in the Startup Scale plan and would like to discuss growth and execution."
  }
};

const getWhatsAppLink = (planName: string): string => {
  const config = planMessages[planName];
  if (!config) return `https://wa.me/${WHATSAPP_PHONE}`;
  
  const encodedMessage = encodeURIComponent(config.message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
};

const getButtonText = (planName: string): string => {
  return planMessages[planName]?.button || 'Get Started';
};

export default function PricingPage() {
  const [plans, setPlans] = useState<PricingPlans[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const { items } = await BaseCrudService.getAll<PricingPlans>('pricingplans');
      setPlans(items);
    };
    fetchPlans();
  }, []);

  // Update pricing plans with new deliverables and outcome lines
  useEffect(() => {
    const updatePricingPlans = async () => {
      try {
        const creatorIgnite = plans.find(plan => plan.planName === 'Creator Ignite');
        const brandAccelerator = plans.find(plan => plan.planName === 'Brand Accelerator');
        const startupScale = plans.find(plan => plan.planName === 'Startup Scale');

        const disclaimerText = 'Exact content mix, duration, and execution may vary based on strategy and business goals.';

        if (creatorIgnite) {
          await BaseCrudService.update<PricingPlans>('pricingplans', {
            _id: creatorIgnite._id,
            deliverables: '8 high-impact short-form videos (up to 60 seconds each)\nContent script refinement tailored to the creator\'s personality\nViral hook and retention design for each video\nGuided or assisted video shooting support\nProfessional editing (cuts, captions, pacing)',
            outcomeLine: 'Built for consistency, discovery, and creator clarity.',
            disclaimerText: disclaimerText
          });
        }

        if (brandAccelerator) {
          await BaseCrudService.update<PricingPlans>('pricingplans', {
            _id: brandAccelerator._id,
            deliverables: '12 short-form videos (60–90 seconds each)\nBrand-aligned content scripting and positioning\nConversion-focused hook and engagement design\nOn-ground or guided shooting support\nPremium editing optimized for brand recall and engagement',
            outcomeLine: 'Designed to build trust, engagement, and brand authority.',
            disclaimerText: disclaimerText
          });
        }

        if (startupScale) {
          await BaseCrudService.update<PricingPlans>('pricingplans', {
            _id: startupScale._id,
            deliverables: '20 monthly content assets including short-form videos and selected mid-form videos (up to 8–10 minutes where required)\nDeep script refinement and narrative storytelling\nAdvanced hook, retention, and CTA strategy\nStrategic shooting plan with execution support\nHigh-end editing optimized for growth and scalability',
            outcomeLine: 'Focused on authority, inbound leads, and scalable visibility.',
            disclaimerText: disclaimerText
          });
        }

        // Refresh the plans
        const { items } = await BaseCrudService.getAll<PricingPlans>('pricingplans');
        setPlans(items);
      } catch (error) {
        console.error('Error updating pricing plans:', error);
      }
    };

    if (plans.length > 0) {
      updatePricingPlans();
    }
  }, [plans.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Fuel Your Content Growth
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Choose the plan that fits your growth goals. From creators to startups, we've got the right content strategy for you.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Pricing Cards */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          {plans.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-foreground/70 mb-8">
                Custom pricing plans are being prepared. Contact us for a personalized quote.
              </p>
              <a
                href="https://wa.me/918500871360"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-paragraph font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.slice(0, 3).map((plan, index) => (
                <motion.div
                  key={plan._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-[#1E1E1E] rounded-xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative flex flex-col ${
                    index === 1 ? 'lg:scale-105 border-2 border-primary' : ''
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-paragraph font-medium rounded-full">
                      Most Popular
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {plan.planName}
                    </h3>
                    {plan.targetAudience && (
                      <p className="font-paragraph text-sm text-primary mb-4">
                        {plan.targetAudience}
                      </p>
                    )}
                    {plan.price && (
                      <p className="font-heading text-3xl font-bold text-primary">
                        ₹{plan.price.toLocaleString('en-IN')} / month
                      </p>
                    )}
                  </div>

                  {/* Platform Focus */}
                  {plan.platformFocus && (
                    <div className="mb-6">
                      <h4 className="font-heading text-sm font-semibold text-foreground/80 mb-2">
                        Platform Focus
                      </h4>
                      <p className="font-paragraph text-foreground/70 text-sm">
                        {plan.platformFocus}
                      </p>
                    </div>
                  )}

                  {/* Deliverables */}
                  {plan.deliverables && (
                    <div className="mb-6">
                      <h4 className="font-heading text-sm font-semibold text-foreground/80 mb-3">
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {plan.deliverables.split('\n').map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                            <span className="font-paragraph text-foreground/70 text-sm">{item.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Outcome Line */}
                  {plan.outcomeLine && (
                    <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="font-paragraph text-sm text-primary font-medium italic">
                        {plan.outcomeLine}
                      </p>
                    </div>
                  )}

                  {/* Disclaimer */}
                  {plan.disclaimerText && (
                    <div className="mb-6 p-3 bg-foreground/5 rounded-lg border border-foreground/10">
                      <p className="font-paragraph text-xs text-foreground/60">
                        {plan.disclaimerText}
                      </p>
                    </div>
                  )}

                  {/* Early Collaboration Benefits */}
                  {plan.whatsIncluded && (
                    <div className="mb-8 pt-6 border-t border-primary/20">
                      <h4 className="font-heading text-sm font-semibold text-foreground/80 mb-3">
                        Early Collaboration Benefits
                      </h4>
                      <ul className="space-y-2">
                        {plan.whatsIncluded.split('\n').map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                            <span className="font-paragraph text-foreground/70 text-sm">{item.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA */}
                  {plan.planName && (
                    <a
                      href={getWhatsAppLink(plan.planName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center px-6 py-3 font-paragraph font-medium rounded-lg transition-all duration-300 hover:scale-105 mt-auto ${
                        index === 1
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'bg-transparent text-primary border border-primary hover:bg-primary/10'
                      }`}
                    >
                      {getButtonText(plan.planName)}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Custom Plans Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="font-paragraph text-lg text-foreground/70 mb-6">
              Need something custom? We create tailored plans for unique requirements.
            </p>
            <a
              href="https://wa.me/918500871360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-transparent text-primary border border-primary font-paragraph font-medium rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Discuss Custom Plan
            </a>
          </motion.div>
        </div>
      </section>
      {/* FAQ or Additional Info */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Not Sure Which Plan to Choose?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Let's chat about your goals, audience, and content needs. We'll recommend the perfect
              plan for your growth journey.
            </p>
            <a
              href="https://wa.me/918500871360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-paragraph font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
