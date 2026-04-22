import { siteData } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-prestige-grey text-white/50 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <span className="font-serif text-xl font-bold text-white block mb-2">{siteData.name}</span>
            <p className="text-xs uppercase tracking-widest font-semibold">{siteData.title}</p>
          </div>
          
          <div className="flex gap-10 text-xs uppercase tracking-widest font-bold">
            <a href="#home" className="hover:text-white transition-colors">Αρχική</a>
            <a href="#bio" className="hover:text-white transition-colors">Βιογραφικό</a>
            <a href="#services" className="hover:text-white transition-colors">Υπηρεσίες</a>
            <a href="#contact" className="hover:text-white transition-colors">Επικοινωνία</a>
          </div>

          <p className="text-xs">
            © {new Date().getFullYear()} Dr. Marinos Skandamis. All Rights Reserved.
          </p>
        </div>
        
        <div className="mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em]">
           <p>Designed with Academic & Leadership Ethics</p>
           <p>Πάτρα, Κανάρη 28-30</p>
        </div>
      </div>
    </footer>
  );
}
