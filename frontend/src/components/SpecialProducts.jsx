import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Eye, ShoppingCart } from 'lucide-react';

const SpecialProducts = () => {
  const [activeTab, setActiveTab] = useState('Featured');

  const tabs = ['Featured', 'Arrival', 'Trending'];

  const products = {
    'Featured': [
      {
        id: 1,
        name: "LivelyLittle Lineup Doll",
        oldPrice: "₹1,499",
        price: "₹1,200",
        discount: "-33%",
        image: "https://media.istockphoto.com/id/1613712514/photo/colorful-plastic-children-toys-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=klZzQ3Wt6WiaEGuyox9QBq6tmvjxsGW7sjxMtJzciRA=",
      },
      {
        id: 2,
        name: "MiniMarvel Maker Toy",
        oldPrice: "₹1,500",
        price: "₹1,000",
        discount: "-33%",
        image: "https://media.istockphoto.com/id/1125381265/photo/colorful-plastic-children-toys-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=UO0AZIkRoPhLaFAc62IbqC7tuOqH3LyS_xFWg9RWwXI=",
      }
    ],
    'Arrival': [
      {
        id: 3,
        name: "New Adventure Kit",
        oldPrice: "₹2,000",
        price: "₹1,500",
        discount: "-25%",
        image: "https://images.unsplash.com/photo-1532330393533-443990a51d10?q=80&w=800&auto=format&fit=crop",
      }
    ],
    'Trending': [
      {
        id: 4,
        name: "Flashy Racer Car",
        oldPrice: "₹999",
        price: "₹799",
        discount: "-20%",
        image: "https://images.unsplash.com/photo-1594732832278-abd644401426?q=80&w=800&auto=format&fit=crop",
      }
    ]
  };

  return (
    <section className="py-10 bg-[#FFF9F0]">
      <div className="container-custom">
        {/* Section Header - Synced with Trending Products */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-[#FF4D4D] text-xs md:text-sm font-black uppercase tracking-[0.2em]">
            Shop Collection
          </span>
          <h2 
            className="text-3xl md:text-5xl font-black text-slate-800"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Special Products
          </h2>
        </div>

        {/* Tabs Filter */}
        <div className="flex justify-center gap-2 md:gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 md:px-8 py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                activeTab === tab 
                ? 'bg-[#FF4D4D] text-white shadow-lg' 
                : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <AnimatePresence mode="wait">
            {products[activeTab].map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
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
                  <h3 className="font-bold text-slate-800 text-xs md:text-base leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex flex-col items-center">
                    <span className="text-slate-300 text-[10px] md:text-xs line-through font-medium">{product.oldPrice}</span>
                    <span className="text-slate-800 text-sm md:text-lg font-black">{product.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SpecialProducts;
