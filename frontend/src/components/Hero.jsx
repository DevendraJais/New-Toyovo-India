import { motion } from 'framer-motion';
// Using the generated premium toy image as an absolute overlay
import toyImage from 'C:/Users/Hp/.gemini/antigravity/brain/b138e92a-5862-452f-9a0f-9db0e3f9aca3/wooden_toy_xylophone_1776061201398.png';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden h-[400px] md:h-[500px] lg:h-[550px] flex items-center bg-[#09734D]">
      
      {/* Full Section Image - Forced to the right side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[70%] z-0">
        <img 
          src={toyImage} 
          className="w-full h-full object-contain lg:object-cover object-right pointer-events-none" 
          alt="" 
        />
      </div>
      
      {/* Dynamic gradient overlay to fade image into solid green on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09734D] via-[#09734D]/80 to-transparent z-10" />

      {/* Decorative Icons Area */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      </div>

      <div className="container-custom relative z-30">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="max-w-[90%] sm:max-w-xl text-white space-y-4 md:space-y-6 flex flex-col items-start"
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
