import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Smartphone, Search } from 'lucide-react';
import { Section } from './ui/Section';
const features = [
{
  icon: <Clock className="w-8 h-8" />,
  title: 'Fast Delivery',
  description:
  'I value your time. I ensure timely delivery of projects without compromising on quality.'
},
{
  icon: <Search className="w-8 h-8" />,
  title: 'SEO Friendly Code',
  description:
  'Clean, semantic code structure that helps search engines understand and rank your content better.'
},
{
  icon: <Smartphone className="w-8 h-8" />,
  title: 'Mobile Responsive',
  description:
  'Your website will look and work perfectly on all devices, from desktops to smartphones.'
},
{
  icon: <ShieldCheck className="w-8 h-8" />,
  title: 'Secure & Optimized',
  description:
  'I implement best security practices and optimize performance for a safe, fast experience.'
}];

export function WhyChooseMe() {
  return (
    <Section background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
          }}>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Why Choose Me For Your Next Project?
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            I don't just write code; I build solutions that solve business
            problems. My approach is client-centric, focusing on your goals and
            delivering measurable results.
          </p>
          <div className="space-y-6">
            {features.map((feature, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -10
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.1
              }}
              className="flex gap-4">

                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 border border-slate-100">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          className="relative">

          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-2xl transform rotate-3 opacity-20 blur-lg" />
          <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm font-medium text-slate-600">
                  Projects Completed
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-violet-600 mb-2">
                  30+
                </div>
                <div className="text-sm font-medium text-slate-600">
                  Happy Clients
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  3+
                </div>
                <div className="text-sm font-medium text-slate-600">
                  Years Experience
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">
                  24/7
                </div>
                <div className="text-sm font-medium text-slate-600">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>);

}