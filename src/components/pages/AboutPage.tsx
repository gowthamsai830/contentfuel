import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Heart, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Growth-Focused',
      description: 'Every piece of content we create is engineered with one goal: measurable growth for our clients.',
    },
    {
      icon: Sparkles,
      title: 'Creator-First',
      description: 'We understand the creator economy because we live it. Your success is our success.',
    },
    {
      icon: Eye,
      title: 'Platform-Native',
      description: 'We don\'t just repurpose content. We create platform-specific content that algorithms love.',
    },
    {
      icon: Heart,
      title: 'Partnership Mindset',
      description: 'We\'re not just a service provider. We\'re your growth partner, invested in your long-term success.',
    },
  ];

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
              About Content Fuels
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 leading-relaxed">
              We're a creative content & growth studio on a mission to help creators, startups, and
              brands win on social media.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Brand Story */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-paragraph text-foreground/70 leading-relaxed">
                <p>
                  Content Fuels was born from a simple observation: most content creators and brands
                  struggle not because they lack ideas, but because they lack the right execution and
                  strategy.
                </p>
                <p>
                  We saw talented creators spending hours editing when they should be creating. We saw
                  brands posting content that looked good but didn't convert. We saw startups burning
                  budgets on content that didn't move the needle.
                </p>
                <p>
                  So we built Content Fuels — a growth lab where content isn't just created, it's
                  engineered. Where every frame, every hook, every transition is designed with data,
                  tested for performance, and optimized for growth.
                </p>
                <p>
                  Today, we're proud to partner with creators, startups, and brands across India,
                  helping them scale their social presence and turn content into a growth engine.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="font-heading text-6xl md:text-8xl font-bold text-primary mb-4">
                    100+
                  </div>
                  <p className="font-paragraph text-xl text-foreground/80 mb-8">
                    Projects Delivered
                  </p>
                  <p className="font-paragraph text-xl text-foreground/80">{"Collaborated with"}</p>
                <div className="font-heading text-4xl md:text-6xl font-bold text-secondary mb-4">{"50"}</div>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Vision & Values */}
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
              Our Values
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1E1E1E] rounded-xl p-8 hover:bg-[#252525] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-paragraph text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Founder Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Meet the Founder
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#1E1E1E] rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="https://static.wixstatic.com/media/0ae06e_2676e59d1b7d4f10bfc0400ddf17b4a1~mv2.jpg"
                      className="w-full h-full object-cover"
                      originWidth={1999}
                      originHeight={1999}
                      focalPointX={43.373493975903614}
                      focalPointY={28.313253012048197} />
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Gowtham Sai
                  </h3>
                  <p className="font-paragraph text-lg text-primary mb-6">
                    Founder & Creative Director
                  </p>
                  <div className="space-y-4 font-paragraph text-foreground/70 leading-relaxed">
                    <p>
                      Gowtham started Content Fuels with a vision to bridge the gap between creative
                      content and data-driven growth. With years of experience in video editing,
                      content strategy, and social media growth, he's helped dozens of creators and
                      brands scale their presence.
                    </p>
                    <p>
                      His approach combines creative storytelling with performance marketing,
                      ensuring every piece of content not only looks great but also drives real
                      results.
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://www.instagram.com/gowtham_sai_30/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-paragraph font-medium"
                    >
                      Follow on Instagram
                      <ArrowRight className="ml-2" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Ready to transform your content into a growth engine? Let's start the conversation.
            </p>
            <a
              href="https://wa.me/918500871360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-paragraph font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
            >
              Start a Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
