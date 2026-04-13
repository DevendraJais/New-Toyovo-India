import { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'Toy Store', path: '#' },
    { name: 'Categories', path: '#' },
    { name: 'Newly Launched', path: '#' },
    { name: 'Best Sellers', path: '#' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FFF9F0]/95 backdrop-blur-md py-2 shadow-md' : 'bg-[#FFF9F0] py-4 border-b border-gray-100'
      }`}>
        <div className="container-custom flex items-center justify-between">
          
          {/* Left: Menu Button */}
          <div className="flex-1 flex justify-start">
            <button 
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
            <div className="hidden lg:flex items-center gap-4 ml-4">
              {/* Optional: Add some links here if needed on desktop */}
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center cursor-pointer">
              <span 
                className="text-xl md:text-2xl font-black tracking-tight whitespace-nowrap" 
                style={{ 
                  fontFamily: "'Fredoka One', cursive",
                  textShadow: '2px 2px 0px rgba(0,0,0,0.05)'
                }}
              >
                <span className="text-[#5D3FD3]">Toy</span>
                <span className="text-[#FF4D4D]">ovo India</span>
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex-1 flex justify-end items-center gap-1 md:gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full text-slate-700 transition-colors">
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full text-slate-700 transition-colors">
              <User className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-slate-700 transition-colors relative group">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 group-hover:text-[#FF4D4D] transition-colors" />
              <div className="absolute top-0 right-0 bg-black text-white text-[10px] w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">
                {cartCount}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className={isScrolled ? "h-[64px]" : "h-[80px]"} />

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-xs bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-50 bg-[#FFF9F0]">
                 <span 
                   className="text-xl font-black tracking-tight whitespace-nowrap" 
                   style={{ 
                     fontFamily: "'Fredoka One', cursive",
                     textShadow: '2px 2px 0px rgba(0,0,0,0.05)'
                   }}
                 >
                   <span className="text-[#5D3FD3]">Toy</span>
                   <span className="text-[#FF4D4D]">ovo India</span>
                 </span>
                 <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                   <X className="w-6 h-6 text-slate-400" />
                 </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.path} 
                      className="block text-lg font-bold text-slate-800 hover:text-[#F1641E] p-3 rounded-xl hover:bg-orange-50 transition-all border-b border-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 mt-auto border-t border-gray-100 bg-gray-50">
                 <button className="w-full bg-[#F1641E] text-white py-3 rounded-full font-bold shadow-lg shadow-orange-200">
                   Shop Now
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
