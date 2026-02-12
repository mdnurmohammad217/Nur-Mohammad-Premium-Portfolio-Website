import React from 'react';
import { motion } from 'framer-motion';
interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'transparent';
}
export function Section({
  id,
  className = '',
  children,
  background = 'transparent'
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    transparent: 'bg-transparent'
  };
  return (
    <section
      id={id}
      className={`py-20 md:py-28 relative overflow-hidden ${bgStyles[background]} ${className}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>);

}