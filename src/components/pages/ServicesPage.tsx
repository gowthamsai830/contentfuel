import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Video, TrendingUp, Rocket } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { Image } from '@/components/ui/image';

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const { items } = await BaseCrudService.getAll<Services>('services');
      setServices(items);
    };
    fetchServices();
  }, []);

  const processSteps = [
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'We analyze your audience, platform trends, and competition to craft a data-driven content strategy.',
    },
    {
      icon: Video,
      title: 'Production',
      description: 'Our team creates high-quality, platform-native content designed for maximum engagement.',
    },
    {
      icon: TrendingUp,
      title: 'Optimization',
      description: 'We continuously test, refine, and optimize content based on performance metrics.',
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'Scale your reach with proven growth systems and consistent content delivery.',
    },
  ];

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
              What We Create
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 leading-relaxed">
              We don't just edit content — we engineer it for reach, retention, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1E1E1E] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
              >
                {service.previewImage && (
                  <div className="h-64 overflow-hidden">
                    <Image src={service.previewImage} alt={service.serviceName || 'Service'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {service.serviceName}
                  </h3>
                  {service.tagline && (
                    <p className="font-paragraph text-lg text-primary mb-4">
                      {service.tagline}
                    </p>
                  )}
                  {service.description && (
                    <p className="font-paragraph text-foreground/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  )}

                  {/* Process Details */}
                  {(service.processStrategyDescription ||
                    service.processProductionDescription ||
                    service.processOptimizationDescription ||
                    service.processGrowthDescription) && (
                    <div className="space-y-4 mt-6 pt-6 border-t border-primary/20">
                      {service.processStrategyDescription && (
                        <div>
                          <h4 className="font-heading text-sm font-semibold text-primary mb-1">
                            Strategy
                          </h4>
                          <p className="font-paragraph text-sm text-foreground/70">
                            {service.processStrategyDescription}
                          </p>
                        </div>
                      )}
                      {service.processProductionDescription && (
                        <div>
                          <h4 className="font-heading text-sm font-semibold text-primary mb-1">
                            Production
                          </h4>
                          <p className="font-paragraph text-sm text-foreground/70">
                            {service.processProductionDescription}
                          </p>
                        </div>
                      )}
                      {service.processOptimizationDescription && (
                        <div>
                          <h4 className="font-heading text-sm font-semibold text-primary mb-1">
                            Optimization
                          </h4>
                          <p className="font-paragraph text-sm text-foreground/70">
                            {service.processOptimizationDescription}
                          </p>
                        </div>
                      )}
                      {service.processGrowthDescription && (
                        <div>
                          <h4 className="font-heading text-sm font-semibold text-primary mb-1">
                            Growth
                          </h4>
                          <p className="font-paragraph text-sm text-foreground/70">
                            {service.processGrowthDescription}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {service.ctaButtonText && service.ctaButtonUrl && (
                    <a
                      href={service.ctaButtonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-6 px-6 py-3 bg-primary text-primary-foreground font-paragraph font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
                    >
                      {service.ctaButtonText}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              A proven framework that transforms ideas into viral content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#1E1E1E] rounded-xl p-8 hover:bg-[#252525] transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="text-primary" size={28} />
                  </div>
                  <div className="absolute top-8 -right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="font-paragraph text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get a Content Plan
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Let's discuss your goals and create a custom content strategy designed for growth.
            </p>
            <a
              href="https://wa.me/918500871360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-paragraph font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
            >
              Chat on WhatsApp
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
