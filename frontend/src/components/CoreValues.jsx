import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const CoreValues = () => {
  const points = [
    "Safety Packaging",
    "100% Warranty Product",
    "Premium Product"
  ];

  return (
    <section className="py-16 bg-[#FFF9F0] overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col gap-12">

          {/* Top Image & Heading Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&q=80"
                alt="Happy baby with toys"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <h2
                className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-800 leading-[1.2] tracking-tight"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                We Have Always Tried To Focus On The People Who Were Going To Use The Products
              </h2>
            </motion.div>
          </div>

          {/* List Section with Dotted Borders - UPDATED TO BLACK */}
          <div className="space-y-0">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center justify-between py-6 border-b-2 border-dashed border-black group-hover:border-[#FF4D4D] transition-colors">
                  <span className="text-lg md:text-2xl font-bold text-slate-700 font-kids-block">{point}</span>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-[#FF4D4D] group-hover:text-white transition-all">
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description Paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-kids">
              Ingredients undergo a rigorous scientific evaluation to meet our strict standards for purity, potency, and efficacy. We bring together the best of nature and science to create a truly harmonious and premium experience for your children. Every product is designed with love and care.
            </p>
          </motion.div>

          {/* Forced 2-Image Grid (Left & Right) */}
          <div className="grid grid-cols-2 gap-3 md:gap-8">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[200px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-slate-100"
            >
              <img
                src="https://img.freepik.com/free-photo/cute-plush-toys-arrangement_23-2150312273.jpg"
                alt="Soft toy bunny"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[200px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1703668873873-f70017efbe67?w=600&auto=format&fit=crop&q=60"
                alt="Toy airplane"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
