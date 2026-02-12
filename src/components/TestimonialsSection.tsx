import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section } from './ui/Section';
const testimonials = [
{
  name: 'Sarah Johnson',
  role: 'CEO, TechStart',
  image: 'https://i.pravatar.cc/150?img=32',
  content:
  'Nur is an exceptional developer. He delivered our corporate website ahead of schedule and the quality was outstanding. Highly recommended!',
  rating: 5
},
{
  name: 'Michael Chen',
  role: 'Marketing Director',
  image: 'https://i.pravatar.cc/150?img=11',
  content:
  'Working with Nur was a pleasure. He understood our vision perfectly and translated it into a beautiful, high-converting landing page.',
  rating: 5
},
{
  name: 'Emily Davis',
  role: 'Founder, StyleStore',
  image: 'https://i.pravatar.cc/150?img=5',
  content:
  'The e-commerce site Nur built for us has significantly increased our sales. His attention to detail and speed optimization skills are top-notch.',
  rating: 5
}];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" background="white">
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

          Client Testimonials
        </motion.h2>
        <p className="text-lg text-slate-600">
          Don't just take my word for it. Here's what my clients have to say
          about working with me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) =>
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
          className="bg-slate-50 p-8 rounded-2xl relative">

            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />

            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) =>
            <Star
              key={i}
              className="w-5 h-5 fill-amber-400 text-amber-400" />

            )}
            </div>

            <p className="text-slate-600 mb-8 italic relative z-10">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-4">
              <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />

              <div>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Section>);

}