import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Headphones } from 'lucide-react';

const ServiceHighlights = () => {
  const services = [
    {
      title: "Free Shipping & Returns",
      desc: "Shop with confidence and have your favorite toys delivered right to your doorstep without any additional cost.",
      icon: <Truck className="w-8 h-8 text-slate-700" />,
    },
    {
      title: "100% Secure Payment",
      desc: "We ensure secure payment with PEV, providing you with a safe and worry-free shopping experience.",
      icon: <ShieldCheck className="w-8 h-8 text-slate-700" />,
    },
    {
      title: "24/7 Dedicated Support",
      desc: "Our friendly support team is always here to help you with any questions or concerns you may have.",
      icon: <Headphones className="w-8 h-8 text-slate-700" />,
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#FFF9F0] border-2 border-dashed border-black rounded-[2rem] p-8 flex flex-col items-start gap-4 hover:border-slate-800 transition-colors group cursor-default"
            >
              <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 
                  className="text-xl font-black text-slate-800 tracking-tight"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
