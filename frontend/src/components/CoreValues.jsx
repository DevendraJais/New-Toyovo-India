import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const CoreValues = () => {
  const points = [
    { title: "Safety Packaging", isOpen: false },
    { title: "100% Warranty Product", isOpen: false },
    { title: "Premium Product", isOpen: true }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FFF9F0] overflow-hidden">
      <div className="container-custom">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Left Column: Large Image */}
          <div className="mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-[400px] md:h-[600px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&q=80"
                alt="Happy baby with toys"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-6 md:gap-10">
            
            {/* Heading - Now significantly smaller on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-black text-slate-800 leading-tight tracking-tight uppercase"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                We Have Always Tried To Focus On The People Who Were Going To Use The Products
              </h2>
            </motion.div>

            {/* List Section with Dotted Borders */}
            <div className="space-y-0">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center justify-between py-4 border-b-2 border-dashed border-black group-hover:border-[#FF4D4D] transition-colors">
                    <span className="text-base md:text-lg font-bold text-slate-700 font-kids-block">{point.title}</span>
                    <div className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-[#FF4D4D] group-hover:text-white group-hover:border-[#FF4D4D] transition-all">
                      {point.isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </div>
                  </div>
                  {point.isOpen && (
                    <div className="py-3">
                      <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed italic">
                        Ingredients undergo a rigorous scientific evaluation to meet our strict standards for purity, potency, and efficacy. We bring together the best of nature and science...
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Two Smaller Images Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white p-1 border border-slate-100"
              >
                <img
                  src="https://img.freepik.com/free-photo/cute-plush-toys-arrangement_23-2150312273.jpg"
                  alt="Soft toy bunny"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white p-1 border border-slate-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1703668873873-f70017efbe67?w=600&auto=format&fit=crop&q=60"
                  alt="Toy airplane"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
