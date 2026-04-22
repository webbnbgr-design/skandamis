import { motion } from 'motion/react';
import { navigation, siteData } from '../constants';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-imperial-blue">
              {siteData.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-grey font-semibold">
              Legal & Political Strategy
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-prestige-grey hover:text-imperial-blue transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button 
            className="lg:hidden p-2 text-prestige-grey"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-gray-100 px-6 py-8 space-y-6 flex flex-col items-center"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-prestige-grey"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
