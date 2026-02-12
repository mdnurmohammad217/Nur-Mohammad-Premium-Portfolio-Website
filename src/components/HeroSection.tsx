import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
export function HeroSection() {
  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-visible">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-blue-100/50 via-violet-100/30 to-transparent blur-3xl opacity-70" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6
          }}>

          <motion.div
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for freelance projects
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            I Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Modern & High-Converting
            </span>{' '}
            Websites
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Professional Web Developer & WordPress Expert based in Bangladesh. I
            help businesses grow with custom, fast, and secure websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() =>
              document.getElementById('portfolio')?.scrollIntoView({
                behavior: 'smooth'
              })
              }>

              View Portfolio
            </Button>
            <Button
              variant="outline"
              leftIcon={<Download className="w-4 h-4" />}>

              Download CV
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-slate-500 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) =>
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">

                  <img
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Client"
                  className="w-full h-full object-cover" />

                </div>
              )}
            </div>
            <p>
              Trusted by{' '}
              <span className="font-semibold text-slate-900">
                50+ happy clients
              </span>{' '}
              worldwide
            </p>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="relative hidden lg:block">

          <div className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-blue-500/20 p-6 border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-slate-100 h-6 rounded-md mx-4" />
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/3 h-32 bg-slate-100 rounded-lg animate-pulse" />
                <div className="w-2/3 space-y-3">
                  <div className="h-6 bg-slate-100 rounded w-3/4" />
                  <div className="h-4 bg-slate-50 rounded w-full" />
                  <div className="h-4 bg-slate-50 rounded w-5/6" />
                  <div className="flex gap-2 mt-4">
                    <div className="h-8 w-24 bg-blue-100 rounded-full" />
                    <div className="h-8 w-24 bg-slate-100 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 bg-slate-50 rounded-lg" />
                <div className="h-24 bg-slate-50 rounded-lg" />
                <div className="h-24 bg-slate-50 rounded-lg" />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut'
              }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                100%
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">
                  Job Success
                </p>
                <p className="text-sm font-bold text-slate-900">Top Rated</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </Section>);

}