import { motion } from 'motion/react';
import { siteData } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#002366]/5" />
        {/* Subtle geometric pattern can be added here */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 hidden lg:block">
           <svg viewBox="0 0 400 400" className="w-full h-full text-imperial-blue fill-current">
             <path d="M0,400 L400,400 L400,0 C400,0 300,100 0,100 Z" />
           </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase bg-imperial-blue text-white rounded-sm">
              {siteData.title}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-prestige-grey mb-8">
              {siteData.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-grey font-light mb-12 leading-relaxed">
              {siteData.heroSubheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-imperial-blue text-white text-sm font-semibold tracking-wider uppercase transition-transform hover:scale-105 active:scale-95"
              >
                Επικοινωνία
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
