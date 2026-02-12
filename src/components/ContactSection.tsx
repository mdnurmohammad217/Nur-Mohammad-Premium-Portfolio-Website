import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Facebook } from
'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks for your message! I'll get back to you soon.");
    }, 1500);
  };
  return (
    <Section id="contact" background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
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
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Have a project in mind or want to discuss a collaboration? I'd love
            to hear from you. Fill out the form or reach out directly via email
            or WhatsApp.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Email Me
                </h3>
                <a
                  href="mailto:hello@nur.dev"
                  className="text-slate-600 hover:text-blue-600 transition-colors">

                  hello@nur.dev
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/1234567890"
                  className="text-slate-600 hover:text-green-600 transition-colors">

                  +880 1234 567890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Location
                </h3>
                <p className="text-slate-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Follow Me
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">

                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">

                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300">

                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
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
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Name" placeholder="John Doe" required />
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                required />

            </div>
            <Input label="Subject" placeholder="Project Inquiry" required />
            <Textarea
              label="Message"
              placeholder="Tell me about your project..."
              required />


            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}>

              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>);

}