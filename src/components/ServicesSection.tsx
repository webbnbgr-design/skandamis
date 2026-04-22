import { motion } from 'motion/react';
import { siteData } from '../constants';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-[11px] uppercase tracking-[0.3em] font-bold text-imperial-blue mb-4">
            Νομικές Υπηρεσίες
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-prestige-grey mb-6">
            Υπερέχουσα Νομική Υποστήριξη
          </h3>
          <p className="text-lg text-muted-grey">
            Με βαθιά γνώση του Συντάγματος και των Ανθρωπίνων Δικαιωμάτων, παρέχουμε εξειδικευμένες νομικές υπηρεσίες σε όλο το φάσμα του δικαίου.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-10 h-1 bg-imperial-blue mb-8 transition-all group-hover:w-full" />
              <h4 className="font-serif text-xl font-bold text-prestige-grey mb-5 h-14">
                {service.title}
              </h4>
              <p className="text-sm text-muted-grey leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
