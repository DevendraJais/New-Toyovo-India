import { Mail, Phone, MapPin, Send, User, Heart, ShoppingBag, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FFF9F0] pt-16 pb-8 border-t-2 border-dashed border-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-800 tracking-tight" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              TOYOVO<span className="text-[#FF4D4D]">.</span>
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Bringing joy and creativity to every child's playtime with our premium collection of toys and wonders.
            </p>
            <div className="flex items-center gap-4">
              {[Heart, User, ShoppingBag, Star].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#FF4D4D] transition-colors duration-300 shadow-md"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Fredoka', sans-serif" }}>Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Shop All', 'Latest Arrivals', 'Trending Toys', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-600 hover:text-[#FF4D4D] font-bold transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D4D]"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Fredoka', sans-serif" }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#FF4D4D] shrink-0" />
                <span className="text-slate-600 font-medium whitespace-pre-line">
                  123 Playful Lane, Toy City,{"\n"}New Delhi, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF4D4D] shrink-0" />
                <span className="text-slate-600 font-medium">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF4D4D] shrink-0" />
                <span className="text-slate-600 font-medium">hello@toyovo.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Fredoka', sans-serif" }}>Newsletter</h4>
            <p className="text-slate-600 font-medium">Subscribe to get special offers and toys updates!</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white border-2 border-black rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FF4D4D] transition-colors font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-slate-800 text-white rounded-xl px-4 hover:bg-[#FF4D4D] transition-colors flex items-center justify-center">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-bold text-sm">
            © 2026 Toyovo India - All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-800 text-sm font-bold transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-800 text-sm font-bold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
