// HPI 1.6-G
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Target, Award, CheckCircle2, Play, Instagram, Video, Camera } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services, AwardsandRecognition } from '@/entities';
import { Image } from '@/components/ui/image';

// --- Utility Components ---

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`${className || ''} animate-reveal`}>{children}</div>;
};

const ParallaxText = ({ children, baseVelocity = 100 }: { children: string; baseVelocity?: number }) => {
  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="font-heading text-6xl md:text-9xl font-bold uppercase text-white/5 flex whitespace-nowrap" style={{ x: 0 }}>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
      </motion.div>
    </div>
  );
};

// --- Main Component ---

export default function HomePage() {
  // --- Data Fidelity Protocol: Canonize ---
  const [services, setServices] = useState<Services[]>([]);
  const [awards, setAwards] = useState<AwardsandRecognition[]>([]);

  // --- Data Fidelity Protocol: Preserve ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, awardsData] = await Promise.all([
          BaseCrudService.getAll<Services>('services'),
          BaseCrudService.getAll<AwardsandRecognition>('awardsandrecognition'),
        ]);
        setServices(servicesData.items.slice(0, 3));
        setAwards(awardsData.items);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  // --- Scroll Hooks for Parallax ---
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Mouse move effect for hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip selection:bg-primary selection:text-white">
      <style>{`
        .animate-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          color: transparent;
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .clip-diagonal-reverse {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
        }
        .grid-bg {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
      `}</style>
      <Header />
      {/* --- HERO SECTION --- */}
      <section 
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-background z-0 grid-bg" />
        <motion.div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(187, 134, 252, 0.15), transparent 80%)`
          }}
        />
        
        {/* Floating Elements Parallax */}
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 200]) }} className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, -150]) }} className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <AnimatedElement>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-whatsapp-green animate-pulse" />
                  <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Accepting New Clients</span>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={100}>
                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-8">
                  WE BUILD <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary font-fraunces">CONTENT</span> THAT <br className="font-fraunces" />
                  BUILDS BRANDS
                </h1>
              </AnimatedElement>

              <AnimatedElement delay={200}>
                <p className="font-paragraph text-xl md:text-2xl text-white/60 max-w-2xl mb-10 leading-relaxed">
                  A creative content & growth studio engineering viral-ready assets for creators, startups, and brands.
                </p>
              </AnimatedElement>

              <AnimatedElement delay={300}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="https://wa.me/918500871360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-none overflow-hidden transition-all hover:bg-primary hover:text-white"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start a Project <ArrowRight size={20} />
                    </span>
                  </a>
                  <Link
                    to="/portfolio"
                    className="px-8 py-4 border border-white/20 text-white font-medium text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                  >
                    View Our Work
                  </Link>
                </div>
              </AnimatedElement>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <motion.div 
                style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
                className="absolute inset-0 border border-white/10 rounded-full w-full h-full scale-150 opacity-20"
              />
              <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
                 <Image
                  src="https://static.wixstatic.com/media/0ae06e_ada655ad59134a0887bdb48b419d3e81~mv2.png?originWidth=768&originHeight=1024"
                  alt="Content Creation Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Play size={20} className="text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Showreel 2024</p>
                      <p className="text-white/60 text-sm">1:45 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- TICKER SECTION --- */}
      <div className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
        <ParallaxText>STRATEGY • PRODUCTION • GROWTH • VIRALITY • </ParallaxText>
      </div>
      {/* --- STICKY "WHO WE HELP" SECTION --- */}
      <section className="relative py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sticky Header */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <AnimatedElement>
                  <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
                    WHO WE <br />
                    <span className="text-primary">EMPOWER</span>
                  </h2>
                  <p className="font-paragraph text-lg text-white/60 mb-8">
                    We partner with the ambitious. Whether you're a solo creator or a scaling startup, our systems are built to amplify your voice.
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary" />
                </AnimatedElement>
              </div>
            </div>

            {/* Scrolling Cards */}
            <div className="lg:col-span-8 space-y-8">
              {[
                {
                  icon: Zap,
                  title: 'Creators',
                  desc: 'Build your personal brand with viral-ready content that converts followers into fans.',
                  color: 'from-purple-500/20 to-blue-500/20',
                  border: 'border-purple-500/30',
                  imgId: 'creators-img'
                },
                {
                  icon: TrendingUp,
                  title: 'Startups',
                  desc: 'Launch and scale with content strategies designed for rapid growth and market penetration.',
                  color: 'from-blue-500/20 to-cyan-500/20',
                  border: 'border-blue-500/30',
                  imgId: 'startups-img'
                },
                {
                  icon: Target,
                  title: 'Brands',
                  desc: 'Elevate your brand presence with platform-native content that drives engagement and sales.',
                  color: 'from-cyan-500/20 to-emerald-500/20',
                  border: 'border-cyan-500/30',
                  imgId: 'brands-img'
                },
              ].map((item, idx) => (
                <AnimatedElement key={idx} delay={idx * 100}>
                  <div className={`group relative overflow-hidden rounded-3xl border ${item.border} bg-gradient-to-br ${item.color} p-1 transition-all hover:scale-[1.02]`}>
                    <div className="absolute inset-0 bg-black/80 z-0" />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                      <div>
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                          <item.icon size={32} />
                        </div>
                        <h3 className="font-heading text-3xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="font-paragraph text-white/70 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="h-64 md:h-full rounded-xl overflow-hidden relative">
                        <Image
                          src={'https://static.wixstatic.com/media/0ae06e_a9e9042bd6b640dc82809a6aaa1cd0a4~mv2.png?originWidth=576&originHeight=576'}
                          alt={item.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
                          width={600}
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- SERVICES SECTION (MAGAZINE STYLE) --- */}
      <section className="py-32 bg-[#0A0A0A] clip-diagonal relative">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedElement>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
              <div>
                <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-4">
                  WHAT WE <span className="text-stroke">CREATE</span>
                </h2>
                <p className="text-white/60 text-xl max-w-xl">
                  Platform-native content engineered for reach, retention, and conversion.
                </p>
              </div>
              <Link to="/services" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors mt-6 md:mt-0">
                View All Services <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedElement key={service._id} delay={index * 100}>
                <div className="group relative h-[500px] bg-white/5 border border-white/10 rounded-none overflow-hidden hover:border-primary/50 transition-colors">
                  {/* Image Layer */}
                  <div className="absolute inset-0 z-0">
                    {service.previewImage ? (
                      <Image src={service.previewImage} alt={service.serviceName || 'Service'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  {/* Content Layer */}
                  <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-12 h-1 bg-primary mb-6 w-0 group-hover:w-12 transition-all duration-500" />
                      <h3 className="font-heading text-3xl font-bold text-white mb-2 leading-tight">
                        {service.serviceName}
                      </h3>
                      <p className="font-paragraph text-primary text-sm font-medium tracking-wider uppercase mb-4">
                        {service.tagline}
                      </p>
                      <p className="font-paragraph text-white/70 text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
             <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
                View All Services <ArrowRight size={20} />
              </Link>
          </div>
        </div>
      </section>
      {/* --- PROCESS SECTION --- */}
      <section className="py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedElement>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-white mb-20">
              THE GROWTH <span className="text-primary">ENGINE</span>
            </h2>
          </AnimatedElement>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Strategy', icon: Target },
                { step: '02', title: 'Production', icon: Camera },
                { step: '03', title: 'Optimization', icon: TrendingUp },
                { step: '04', title: 'Growth', icon: Zap },
              ].map((item, idx) => (
                <AnimatedElement key={idx} delay={idx * 150}>
                  <div className="relative bg-background p-6 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group z-10">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors mx-auto md:mx-0">
                      <item.icon size={24} />
                    </div>
                    <div className="text-center md:text-left">
                      <span className="block text-4xl font-heading font-bold text-white/10 mb-2 group-hover:text-white/20 transition-colors">{item.step}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- WHY US (SPLIT LAYOUT) --- */}
      <section className="py-32 bg-[#0F0F0F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedElement>
                <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8">
                  WHY CONTENT <br /> FUELS?
                </h2>
                <p className="font-paragraph text-xl text-white/70 mb-10 leading-relaxed">
                  We don't just create content — we engineer growth systems. Every frame, every hook, every transition is designed with one goal: to make your content impossible to scroll past.
                </p>
              </AnimatedElement>

              <div className="space-y-6">
                {[
                  'Platform-native content that algorithms love',
                  'Data-driven strategies for maximum reach',
                  'Fast turnaround without compromising quality',
                  'Dedicated growth partner, not just a vendor',
                ].map((item, index) => (
                  <AnimatedElement key={index} delay={index * 100}>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                      <p className="font-paragraph text-white/90 font-medium">{item}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <AnimatedElement>
                <div className="relative aspect-square rounded-full border border-white/10 p-8 md:p-12 animate-[spin_60s_linear_infinite]">
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-background/80 backdrop-blur-xl p-12 rounded-full border border-white/10 shadow-2xl shadow-primary/20">
                    <span className="block font-heading text-7xl md:text-9xl font-bold text-white">100<span className="text-primary">+</span></span>
                    <span className="block font-paragraph text-xl text-white/60 uppercase tracking-widest mt-2">Projects Delivered</span>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
      {/* --- AWARDS SECTION --- */}
      {awards.length > 0 && (
        <section className="py-32 bg-background border-t border-white/5">
          <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
            <AnimatedElement>
              <div className="text-center mb-20">
                <Award className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">RECOGNITION</h2>
                <p className="text-white/60">Excellence in content creation and strategy</p>
              </div>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <AnimatedElement key={award._id} delay={index * 100}>
                  <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      {award.awardImage && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/5">
                          <Image src={award.awardImage} alt={award.awardName} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <span className="text-sm font-mono text-white/40 border border-white/10 px-2 py-1 rounded">2025</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{award.awardName}</h3>
                    <p className="text-sm text-white/50 mb-4">{award.awardingBody}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{award.description}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* --- FINAL CTA --- */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedElement>
            <h2 className="font-heading text-6xl md:text-8xl font-bold text-white mb-8 leading-none">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SCALE?</span>
            </h2>
            <p className="font-paragraph text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's build content that doesn't just get views — it builds brands, drives growth, and creates impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://wa.me/918500871360"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-whatsapp-green text-white font-bold text-xl rounded-full hover:bg-whatsapp-green/90 transition-all hover:scale-105 shadow-lg shadow-whatsapp-green/20 flex items-center gap-3"
              >
                Let's Talk on WhatsApp <ArrowRight size={24} />
              </a>
            </div>
          </AnimatedElement>
        </div>
      </section>
      <Footer />
    </div>
  );
}