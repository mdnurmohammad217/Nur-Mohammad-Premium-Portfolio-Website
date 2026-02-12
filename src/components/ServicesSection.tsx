import React from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  ShoppingCart,
  Code,
  Zap,
  Settings,
  Search } from
'lucide-react';
import { Section } from './ui/Section';
const services = [
{
  icon: <Palette className="w-6 h-6" />,
  title: 'Website Design',
  description:
  'Modern, aesthetic, and user-friendly designs that align with your brand identity and goals.'
},
{
  icon: <ShoppingCart className="w-6 h-6" />,
  title: 'E-commerce Development',
  description:
  'Full-featured online stores using WooCommerce or custom solutions to help you sell more.'
},
{
  icon: <Code className="w-6 h-6" />,
  title: 'WordPress Customization',
  description:
  "Tailored themes and plugins to extend your WordPress site's functionality beyond the basics."
},
{
  icon: <Zap className="w-6 h-6" />,
  title: 'Speed Optimization',
  description:
  "Boosting your website's loading speed to improve user experience and search engine rankings."
},
{
  icon: <Settings className="w-6 h-6" />,
  title: 'Website Maintenance',
  description:
  'Regular updates, backups, and security checks to keep your website running smoothly.'
},
{
  icon: <Search className="w-6 h-6" />,
  title: 'SEO Optimization',
  description:
  'On-page SEO best practices to help your website rank higher on Google and attract traffic.'
}];

export function ServicesSection() {
  return (
    <Section id="services" background="gray">
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

          My Services
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

          I offer a comprehensive range of web development services to help you
          build and grow your online presence.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) =>
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
          whileHover={{
            y: -5
          }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">

            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        )}
      </div>
    </Section>);

}