import { motion } from 'framer-motion';
import softToys from '../assets/soft_toys.png';
import outdoorToys from '../assets/outdoor_toys.png';
import medicalToys from '../assets/medical_toys.png';

const DottedCategories = () => {
  const categories = [
    {
      title: "Soft Toys",
      image: softToys,
      offset: "-translate-y-4 md:translate-y-8 lg:translate-y-4"
    },
    {
      title: "Puzzle Game",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
      offset: "translate-y-4 md:-translate-y-8 lg:-translate-y-4"
    },
    {
      title: "Outdoor Toys",
      image: outdoorToys,
      offset: "-translate-y-4 md:translate-y-8 lg:translate-y-4"
    },
    {
      title: "Medical Toys",
      image: medicalToys,
      offset: "translate-y-4 md:-translate-y-8 lg:-translate-y-4"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-10 lg:gap-8 items-center">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`flex flex-col items-center ${cat.offset}`}
            >
              {/* The Dotted Card */}
              <div className="w-full bg-[#FFF9F0] border-2 border-dashed border-slate-800 rounded-[2.5rem] p-4 md:p-6 flex flex-col items-center gap-4 md:gap-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
                {/* Image Container */}
                <div className="w-full aspect-square bg-white rounded-[2rem] overflow-hidden border border-slate-100 p-2">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Text Content */}
                <h3
                  className="text-lg md:text-xl lg:text-2xl font-black text-slate-800 tracking-tight"
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
