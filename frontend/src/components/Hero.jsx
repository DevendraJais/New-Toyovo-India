import { motion } from 'framer-motion';
// Original teddy image for mobile
import mobileToyImage from '../assets/hero_toy.png';
// New custom seamless panoramic image for desktop
import desktopToyImage from '../assets/hero_seamless.png';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] flex items-center bg-[#09734D] lg:bg-[#6B46C1] transition-colors duration-500">

      {/* Hero Image - Seamless full size background */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={desktopToyImage} media="(min-width: 1024px)" />
          <img
            src={mobileToyImage}
            className="w-full h-full object-cover object-right pointer-events-none"
            alt="Hero Banner Toy"
          />
        </picture>
      </div>

      {/* Decorative Icons Area */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20" />

      <div className="w-full px-6 md:px-16 lg:px-32 relative z-30 flex justify-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[85%] sm:max-w-lg lg:max-w-md text-white space-y-4 md:space-y-6 flex flex-col items-start"
        >
          {/* Sun Icon positioned above text */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 md:w-24 md:h-24 mb-2 -ml-2"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-yellow-400">
              <circle cx="50" cy="50" r="28" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
                <rect key={deg} x="48" y="5" width="4" height="15" transform={`rotate(${deg} 50 50)`} rx="2" />
              ))}
              <circle cx="42" cy="48" r="3" fill="#6B4F1E" />
              <circle cx="58" cy="48" r="3" fill="#6B4F1E" />
              <path d="M42 62 Q50 70 58 62" stroke="#6B4F1E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </motion.div>

          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-[10px] md:text-sm font-black tracking-widest uppercase">
            Children Day Collection
          </div>

          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Fredoka', sans-serif",
              textShadow: '1px 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            Get 25% OFF On Your{"\n"}First Order
          </h1>

          <div className="pt-4">
            <button className="px-6 py-2.5 bg-white text-[#09734D] font-bold rounded-xl hover:bg-neutral-50 transition-all uppercase tracking-widest text-xs shadow-xl shadow-black/20 active:scale-95">
              Shop Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
