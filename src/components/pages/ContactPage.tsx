import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    goal: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I'm ${formData.name}. ${formData.goal}`;
    const whatsappUrl = `https://wa.me/918500871360?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', goal: '' });
      setIsSubmitted(false);
    }, 3000);
  };

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
              Let's Connect
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Have a project in mind? Want to discuss your content goals? We're just a message away.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Methods */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/918500871360"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1E1E1E] rounded-xl p-8 hover:bg-[#252525] transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 rounded-lg bg-whatsapp-green/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-whatsapp-green/20 transition-colors">
                <MessageCircle className="text-whatsapp-green" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="font-paragraph text-foreground/70 text-sm mb-4">
                Fastest way to reach us
              </p>
              <p className="font-paragraph text-whatsapp-green font-medium">
                Chat Now
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:gscreations830@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#1E1E1E] rounded-xl p-8 hover:bg-[#252525] transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Email
              </h3>
              <p className="font-paragraph text-foreground/70 text-sm mb-4">
                For detailed inquiries
              </p>
              <p className="font-paragraph text-primary font-medium text-sm break-all">
                gscreations830@gmail.com
              </p>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/contentfuel.live/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1E1E1E] rounded-xl p-8 hover:bg-[#252525] transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <Instagram className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Instagram
              </h3>
              <p className="font-paragraph text-foreground/70 text-sm mb-4">
                Follow our work
              </p>
              <p className="font-paragraph text-secondary font-medium">{"@gowtham_g_"}</p>
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-[#1E1E1E] rounded-xl p-8 md:p-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Quick Contact Form
              </h2>
              <p className="font-paragraph text-foreground/70 text-center mb-8">
                Tell us about your project and we'll get back to you on WhatsApp
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-paragraph text-foreground/70">
                    Opening WhatsApp to continue the conversation...
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-paragraph text-sm font-medium text-foreground/80 mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-primary/20 focus:border-primary text-foreground"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="goal"
                      className="block font-paragraph text-sm font-medium text-foreground/80 mb-2"
                    >
                      Your Goal
                    </label>
                    <Textarea
                      id="goal"
                      placeholder="Tell us about your project, goals, or what you need help with..."
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      required
                      rows={5}
                      className="bg-background border-primary/20 focus:border-primary text-foreground resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph font-medium py-6 text-base"
                  >
                    Send Message via WhatsApp
                    <MessageCircle className="ml-2" size={20} />
                  </Button>

                  <p className="text-center font-paragraph text-xs text-foreground/60">
                    By submitting, you'll be redirected to WhatsApp to continue the conversation
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Map or Additional Info */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Based in India, Serving Globally
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              While we're based in India with a primary focus on Telugu creators and brands, we work
              with clients across the globe. Distance is no barrier to great content.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
