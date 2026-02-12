import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Section } from './ui/Section';
const skills = [
'HTML5 & CSS3',
'JavaScript (ES6+)',
'React & TypeScript',
'WordPress Development',
'WooCommerce',
'Elementor Pro',
'Tailwind CSS',
'Framer Motion'];

export function AboutSection() {
  return (
    <Section id="about" background="white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image/Visual Side */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="relative">

          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Nur Mohammad Workspace"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />

          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{
            opacity: 0,
            x: 20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Hello! I'm Nur Mohammad, a passionate Web Developer based in
            Bangladesh. With over 3 years of experience, I specialize in
            building high-quality, responsive websites that not only look great
            but also perform exceptionally well.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            My journey started with a curiosity for how things work on the web,
            and it has evolved into a career where I help businesses establish
            their digital presence. Whether it's a custom React application or a
            robust WordPress site, I bring dedication and attention to detail to
            every project.
          </p>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Tech Stack & Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) =>
              <motion.span
                key={skill}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.05
                }}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default">

                  {skill}
                </motion.span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-medium">
                3+ Years Experience
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-medium">
                100% Client Satisfaction
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-medium">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>);

}