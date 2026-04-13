import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react';

const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Playful Fish Toy",
      oldPrice: "₹499",
      price: "₹299",
      discount: "-40%",
      image: "https://media.istockphoto.com/id/1138369026/photo/colorful-plastic-children-toys-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=8NefHQq14MA6N8II7ADSvl-PeC7oTD0Cix1-mnAssxI=",
      tag: "Small Medium"
    },
    {
      id: 2,
      name: "Turtle Adventure Junior",
      oldPrice: "₹899",
      price: "₹499",
      discount: "-44%",
      image: "https://media.istockphoto.com/id/1126929441/photo/colorful-plastic-children-toys-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Sj2Lm_24RCe6ckGtEozo76lP74rUZTkhM1wPaMaJHXE=",
      tag: "Large"
    },
    {
      id: 3,
      name: "Legends Racing Cars",
      oldPrice: "₹1,299",
      price: "₹849",
      discount: "-35%",
      image: "https://media.istockphoto.com/id/1613712514/photo/colorful-plastic-children-toys-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=klZzQ3Wt6WiaEGuyox9QBq6tmvjxsGW7sjxMtJzciRA=",
      tag: "One Size"
    },
    {
      id: 4,
      name: "Plush Kitty Friend",
      oldPrice: "₹699",
      price: "₹499",
      discount: "-28%",
      image: "https://media.istockphoto.com/id/2056001990/photo/colorful-plastic-children-toys-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=UMZXR8sqMT18SBUK1iai9oo7ujqJOvsNOno9d0lelCU=",
      tag: "Mini"
    }
  ];

  return (
    <section className="py-16 bg-[#FFF9F0]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-2">
          <span className="text-[#FF4D4D] text-xs md:text-sm font-black uppercase tracking-[0.2em]">
            Shop Collection
          </span>
          <h2
            className="text-3xl md:text-5xl font-black text-slate-800"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Trending Products
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 group"
            >
              {/* Image Container with Dotted Border */}
              <div className="relative aspect-square bg-white border-2 border-dashed border-black rounded-[2rem] p-4 flex items-center justify-center overflow-hidden group-hover:border-[#FF4D4D] transition-colors duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-slate-800 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-md">
                  {product.discount}
                </div>

                {/* Side Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                  <button className="p-2 bg-[#FF4D4D] text-white rounded-lg shadow-lg hover:bg-[#D43F3F] transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-[#FF4D4D] text-white rounded-lg shadow-lg hover:bg-[#D43F3F] transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-[#FF4D4D] text-white rounded-lg shadow-lg hover:bg-[#D43F3F] transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center space-y-1">
                <h3 className="font-bold text-slate-800 text-sm md:text-lg hover:text-[#FF4D4D] transition-colors cursor-pointer leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-slate-300 text-xs md:text-sm line-through font-medium">{product.oldPrice}</span>
                  <span className="text-slate-800 text-sm md:text-xl font-black">{product.price}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  <div className="w-3 h-3 rounded-full bg-red-500 border border-white shadow-sm cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white shadow-sm cursor-pointer" />
                  <span className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider ml-1 italic">{product.tag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
