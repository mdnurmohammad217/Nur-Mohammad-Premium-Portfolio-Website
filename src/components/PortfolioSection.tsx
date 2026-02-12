import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
const projects = [
{
  title: 'E-commerce Store',
  category: 'WooCommerce',
  image:
  'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  color: 'from-blue-500 to-cyan-500'
},
{
  title: 'Corporate Website',
  category: 'Business',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  color: 'from-violet-500 to-purple-500'
},
{
  title: 'Blog Platform',
  category: 'Content',
  image:
  'https://images.unsplash.com/photo-1499750310159-52980e98cce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  color: 'from-emerald-500 to-teal-500'
},
{
  title: 'Landing Page',
  category: 'Marketing',
  image:
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  color: 'from-orange-500 to-amber-500'
},
{
  title: 'SaaS Dashboard',
  category: 'Web App',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  color: 'from-pink-500 to-rose-500'
},
{
  title: 'Restaurant Website',
  category: 'Hospitality',
  image:
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  color: 'from-indigo-500 to-blue-500'
}];

export function PortfolioSection() {
  return (
    <Section id="portfolio" background="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">

          Featured Projects
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.1
          }}
          className="text-lg text-slate-600">

          Check out some of my recent work. Each project is built with attention
          to detail and performance.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) =>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: index * 0.1
          }}
          className="group relative rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">

            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                <Button
                size="sm"
                variant="white"
                leftIcon={<ExternalLink className="w-4 h-4" />}>

                  Live Preview
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-white border-x border-b border-slate-100 rounded-b-2xl relative z-10">
              <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} mb-3`}>

                {project.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {project.title}
              </h3>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-12 text-center">
        <Button
          variant="outline"
          size="lg"
          rightIcon={<Github className="w-4 h-4" />}>

          View More on GitHub
        </Button>
      </div>
    </Section>);

}