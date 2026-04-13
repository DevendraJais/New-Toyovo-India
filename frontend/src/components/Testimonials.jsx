import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Customers can't always tell you what they want but they can always tell you what's wrong. Can't always tell you what your most unhappy customers.",
      author: "JENS P.",
      role: "MANAGER",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-[#7c4e9f]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-white">

          {/* Big Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Quote className="w-16 h-16 md:w-20 md:h-20 text-white/20 fill-white" />
          </motion.div>

          {/* Testimonial Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              "{reviews[0].text}"
            </p>
          </motion.div>

          {/* Stars & Author Details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-6 pt-4"
          >
            <div className="flex gap-1">
              {[...Array(reviews[0].stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-white text-white" />
              ))}
            </div>

            <div className="flex items-center gap-3 text-sm md:text-base font-black tracking-widest uppercase">
              <span>{reviews[0].author}</span>
              <span className="w-6 h-[2px] bg-white/50" />
              <span className="text-white/70">{reviews[0].role}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
