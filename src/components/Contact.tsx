import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { siteData } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[11px] uppercase tracking-[0.3em] font-bold text-imperial-blue mb-4">
            Επικοινωνία
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-prestige-grey mb-8">
            Στοιχεία Επικοινωνίας
          </h3>
          <p className="text-lg text-muted-grey mb-16">
            Βρισκόμαστε στην καρδιά της Πάτρας, προσφέροντας νομικές συμβουλές υψηλού επιπέδου. 
          </p>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center border border-gray-100 rounded-sm">
                <MapPin className="text-imperial-blue" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-grey font-bold mb-1">Διεύθυνση</p>
                <p className="font-medium">{siteData.location}</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center border border-gray-100 rounded-sm">
                <Phone className="text-imperial-blue" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-grey font-bold mb-1">Τηλέφωνο</p>
                <p className="font-medium">{siteData.phone}</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center border border-gray-100 rounded-sm">
                <Mail className="text-imperial-blue" size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-grey font-bold mb-1">Email</p>
                <p className="font-medium">{siteData.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
