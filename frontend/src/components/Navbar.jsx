import { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
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
    { name: 'Product & Collection', path: '#' },
    { name: 'Blog', path: '#' },
    { name: 'Pages', path: '#' }
  ];

  return (
    <>
      {/* Top Accent Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-[#FF4D4C] z-[60]" />

      <nav className={`fixed top-1.5 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FFF9F0]/95 backdrop-blur-md py-2 shadow-sm' : 'bg-[#FFF9F0] py-4'
      }`}>
        <div className="container-custom flex items-center justify-between">
          
          {/* Left: Logo & Desktop Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-12 flex-1 lg:flex-none">
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button 
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="w-6 h-6 text-slate-700" />
              </button>
            </div>

            <div className="flex items-center cursor-pointer">
              <span 
                className="text-2xl md:text-3xl font-black tracking-tight whitespace-nowrap" 
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                <span className="text-[#5D3FD3]">Toy</span>
                <span className="text-[#FF4D4C]">ovo</span>
              </span>
            </div>

            {/* Desktop Links - Now positioned next to logo */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path} 
                  className="text-sm font-bold text-slate-800 hover:text-[#FF4D4C] transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Actions (Search + Icons) */}
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
            
            {/* Desktop Search Bar */}
            <div className="hidden lg:flex relative items-center">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent border border-slate-200 rounded-lg px-4 py-1.5 text-sm w-48 focus:outline-none focus:border-[#FF4D4C] transition-all"
              />
              <Search className="w-4 h-4 absolute right-3 text-slate-400" />
            </div>

            {/* Mobile Search Icon */}
            <button className="lg:hidden p-2 hover:bg-black/5 rounded-full text-slate-700">
              <Search className="w-5 h-5" />
            </button>

            {/* User Icon - Hidden on mobile, visible on desktop */}
            <button className="hidden lg:block p-2 hover:bg-black/5 rounded-full text-slate-700">
              <User className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Cart Icon */}
            <button className="p-2 hover:bg-black/5 rounded-full text-slate-700 relative group">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 group-hover:text-[#FF4D4C] transition-colors" />
              <div className="absolute top-0 right-0 bg-black text-white text-[10px] w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center font-bold border-2 border-[#FFF9F0]">
                {cartCount}
              </div>
            </button>
          </div>

        </div>
      </nav>

      {/* Spacer */}
      <div className={isScrolled ? "h-16" : "h-20"} />

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-xs bg-white z-[110] shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-50 bg-[#FFF9F0]">
                 <span 
                   className="text-xl font-black tracking-tight" 
                   style={{ fontFamily: "'Fredoka One', cursive" }}
                 >
                   <span className="text-[#5D3FD3]">Toy</span>
                   <span className="text-[#FF4D4C]">ovo</span>
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
                      className="block text-lg font-bold text-slate-800 hover:text-[#FF4D4C] p-3 rounded-xl hover:bg-orange-50 transition-all border-b border-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 mt-auto border-t border-gray-100 bg-gray-50">
                 <button className="w-full bg-[#FF4D4C] text-white py-3 rounded-xl font-bold shadow-lg shadow-red-100">
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
