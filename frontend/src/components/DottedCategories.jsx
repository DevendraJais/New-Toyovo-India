import { motion } from 'framer-motion';
import outdoorToys from 'C:/Users/Hp/.gemini/antigravity/brain/b138e92a-5862-452f-9a0f-9db0e3f9aca3/outdoor_toys_cars_1776063174392.png';
import medicalToys from 'C:/Users/Hp/.gemini/antigravity/brain/b138e92a-5862-452f-9a0f-9db0e3f9aca3/medical_toys_child_1776063229651.png';

const DottedCategories = () => {
  const categories = [
    {
      title: "Outdoor Toys",
      image: outdoorToys,
      offset: "-translate-y-4 md:-translate-y-8"
    },
    {
      title: "Medical Toys",
      image: medicalToys,
      offset: "translate-y-4 md:translate-y-8"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-4 md:gap-12 items-center">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col items-center ${cat.offset}`}
            >
              {/* The Dotted Card */}
              <div className="w-full bg-[#FFF9F0] border-2 border-dashed border-slate-800 rounded-3xl p-4 md:p-8 flex flex-col items-center gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                {/* Image Container */}
                <div className="w-full aspect-square bg-[#E3F2FD] rounded-2xl overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <h3
                  className="text-lg md:text-2xl font-black text-slate-800 tracking-tight"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DottedCategories;
