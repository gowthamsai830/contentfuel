import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { PortfolioProjects } from '@/entities';
import { Image } from '@/components/ui/image';

export default function PortfolioPage() {
  const [projects, setProjects] = useState<PortfolioProjects[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { items } = await BaseCrudService.getAll<PortfolioProjects>('portfolioprojects');
      setProjects(items);
    };
    fetchProjects();
  }, []);

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
              Our Work
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Reels, Shorts & Brand Creatives Designed for Growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-foreground/70">
                Our portfolio is being updated. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-[#1E1E1E] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="aspect-[4/5] overflow-hidden relative bg-primary/10">
                    {project.thumbnailImage ? (
                      <>
                        <Image src={project.thumbnailImage} alt={project.projectName || 'Project'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          src="https://static.wixstatic.com/media/0ae06e_0daca34350ec4e71b95e9382bea8b34d~mv2.png?id=portfolio-placeholder"
                          alt="Portfolio placeholder"
                          className="w-full h-full object-cover"
                          width={600}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {project.projectCategory && (
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-paragraph font-medium rounded-full mb-3">
                        {project.projectCategory}
                      </span>
                    )}
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {project.projectName}
                    </h3>
                    {project.clientName && (
                      <p className="font-paragraph text-sm text-foreground/60 mb-3">
                        Client: {project.clientName}
                      </p>
                    )}
                    {project.projectDescription && (
                      <p className="font-paragraph text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.projectDescription}
                      </p>
                    )}
                    {project.keyResults && (
                      <div className="pt-4 border-t border-primary/20">
                        <p className="font-paragraph text-xs text-foreground/60 mb-1">
                          Key Results
                        </p>
                        <p className="font-paragraph text-sm text-primary font-medium">
                          {project.keyResults}
                        </p>
                      </div>
                    )}
                    {project.mainMediaUrl && (
                      <a
                        href={project.mainMediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-primary hover:text-primary/80 transition-colors group/link"
                      >
                        <span className="font-paragraph text-sm font-medium">View Project</span>
                        <ExternalLink className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
