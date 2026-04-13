import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const MovingBanner = () => {
  const messages = [
    "Free Shipping on orders above ₹999",
    "New Children Day Collection Live",
    "Flat 20% OFF on first order",
    "Premium Quality Wooden Toys",
    "Safe & Non-Toxic for Kids"
  ];

  return (
    <div className="bg-[#F1641E] py-2 lg:py-3 overflow-hidden whitespace-nowrap border-y border-orange-600/20 relative z-40">
      <motion.div 
        animate={{ x: [0, -2000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex items-center gap-12 w-max px-12 flex-nowrap"
      >
        {/* We repeat the array multiple times for seamless looping */}
        {[...messages, ...messages, ...messages, ...messages, ...messages, ...messages].map((msg, index) => (
          <div key={index} className="flex items-center gap-4 flex-nowrap">
            <span className="text-white text-[10px] md:text-sm font-black uppercase tracking-[0.2em]">
              {msg}
            </span>
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-yellow-300 fill-yellow-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingBanner;
