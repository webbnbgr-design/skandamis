import { motion } from 'motion/react';
import { siteData } from '../constants';
import { Award, Shield, FileText } from 'lucide-react';

export default function BioSection() {
  return (
    <section id="bio" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-[11px] uppercase tracking-[0.3em] font-bold text-imperial-blue mb-4">
              Πορεία & Εμπειρία
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-prestige-grey mb-8 leading-tight">
              Επιστημονική Καταξίωση & Θεσμική Προσφορά
            </h3>
            <p className="text-lg text-muted-grey leading-relaxed mb-10">
              {siteData.bio.summary}
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm border border-gray-100">
                  <Award className="text-imperial-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold mb-3">{siteData.bio.phd.title}</h4>
                  <p className="text-muted-grey leading-relaxed">{siteData.bio.phd.description}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm border border-gray-100">
                  <Shield className="text-imperial-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold mb-3">{siteData.bio.publicServant.title}</h4>
                  <p className="text-muted-grey leading-relaxed">{siteData.bio.publicServant.description}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Aspect ratio frame for image */}
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-imperial-blue/10 flex items-center justify-center">
                 {/* Placeholder for professional portrait */}
                 <FileText size={120} className="text-imperial-blue/20" />
              </div>
            </div>
            
            {/* Social Proof Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-xl border border-gray-50 max-w-xs hidden md:block">
              <p className="font-serif italic text-lg text-imperial-blue mb-4 leading-relaxed">
                "{siteData.socialProof.quote}"
              </p>
              <p className="text-xs uppercase tracking-widest font-bold text-muted-grey">
                — {siteData.socialProof.source}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
