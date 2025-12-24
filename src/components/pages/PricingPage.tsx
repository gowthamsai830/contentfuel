import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { PricingPlans } from '@/entities';

export default function PricingPage() {
  const [plans, setPlans] = useState<PricingPlans[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const { items } = await BaseCrudService.getAll<PricingPlans>('pricingplans');
      setPlans(items);
    };
    fetchPlans();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Growth Plans
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Choose the plan that fits your growth goals. All plans include our signature content
              engineering approach.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Pricing Cards */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
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
                  className={`bg-[#1E1E1E] rounded-xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative ${
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
                        ₹{plan.price.toLocaleString('en-IN')}
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

                  {/* What's Included */}
                  {plan.whatsIncluded && (
                    <div className="mb-6">
                      <h4 className="font-heading text-sm font-semibold text-foreground/80 mb-3">
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {plan.whatsIncluded.split('\n').map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />

                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Deliverables */}
                  {plan.deliverables && (
                    <div className="mb-8 pt-6 border-t border-primary/20">
                      <h4 className="font-heading text-sm font-semibold text-foreground/80 mb-2">
                        Deliverables
                      </h4>
                      <p className="font-paragraph text-foreground/70 text-sm">
                        {plan.deliverables}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  {plan.callToActionText && plan.callToActionUrl && (
                    <a
                      href={plan.callToActionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center px-6 py-3 font-paragraph font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                        index === 1
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'bg-transparent text-primary border border-primary hover:bg-primary/10'
                      }`}
                    >
                      {plan.callToActionText}
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
