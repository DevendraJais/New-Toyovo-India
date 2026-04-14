import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Customers can't always tell you what they want but they can always tell you what's wrong. Can't always tell you what your most unhappy customers.",
      author: "JENS P.",
      role: "MANAGER",
      stars: 5
    },
    {
      text: "Every product is designed with love and care. We bring together the best of nature and science to create a truly harmonious experience for your children.",
      author: "SARAH L.",
      role: "MANAGER",
      stars: 5
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#7c4e9f]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 relative">
          
          {/* Vertical Divider for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-white/20 translate-x-[-50%]" />

          {reviews.map((review, index) => (
            <div key={index} className={`max-w-xl mx-auto text-center space-y-8 text-white ${index === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
              
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
                <p className="text-xl md:text-2xl font-bold leading-tight tracking-tight">
                  "{review.text}"
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
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-white text-white" />
                  ))}
                </div>

                <div className="flex items-center gap-3 text-sm md:text-base font-black tracking-widest uppercase">
                  <span>{review.author}</span>
                  <span className="w-6 h-[2px] bg-white/50" />
                  <span className="text-white/70">{review.role}</span>
                </div>
              </motion.div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
