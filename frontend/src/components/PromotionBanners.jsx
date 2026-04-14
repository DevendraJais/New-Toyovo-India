import { motion } from 'framer-motion';

const PromotionBanners = () => {
  const banners = [
    {
      id: 1,
      title: "Shop & Glow Toy Cart Orange Car",
      subtitle: "MUSIC AND SOUNDS",
      color: "bg-[#3ab0c1]",
      buttonText: "SHOP NOW",
      image: "https://img.freepik.com/free-photo/stipple-effect-toy-shopping-cart_23-2150312282.jpg",
      className: "lg:col-span-4 lg:row-span-2 h-[350px] lg:h-[620px]"
    },
    {
      id: 2,
      title: "Playbox The Builder Wooden Toys",
      subtitle: "BIG SEASON SALE",
      color: "bg-[#eb5757]",
      buttonText: "SHOP NOW",
      image: "https://media.istockphoto.com/id/1126929441/photo/colorful-plastic-children-toys-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Sj2Lm_24RCe6ckGtEozo76lP74rUZTkhM1wPaMaJHXE=",
      className: "lg:col-span-4 h-[350px] lg:h-[300px]"
    },
    {
      id: 3,
      title: "Plan Toys Pull-Along Musical Bear",
      subtitle: "SEASON SALE",
      color: "bg-[#7c4e9f]",
      buttonText: "SHOP NOW",
      image: "https://media.istockphoto.com/id/1613712514/photo/colorful-plastic-children-toys-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=klZzQ3Wt6WiaEGuyox9QBq6tmvjxsGW7sjxMtJzciRA=",
      className: "lg:col-span-4 h-[350px] lg:h-[300px]"
    },
    {
      id: 4,
      title: "Fun And Educational Toy For Babies",
      subtitle: "MUSIC AND SOUNDS",
      color: "bg-[#f2994a]",
      buttonText: "SHOP NOW",
      image: "https://img.freepik.com/free-photo/cute-plush-toys-arrangement_23-2150312273.jpg",
      className: "lg:col-span-4 lg:row-span-2 h-[350px] lg:h-[620px]"
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-[#FFF9F0]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Large Banner */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-[2rem] p-8 flex flex-col justify-start items-start ${banners[0].color} ${banners[0].className} group`}
          >
            <div className="z-10 text-white max-w-[200px]">
              <span className="text-[10px] font-black tracking-widest opacity-80 uppercase">{banners[0].subtitle}</span>
              <h3 className="text-2xl font-black mt-2 leading-tight uppercase font-kids-block">{banners[0].title}</h3>
              <button className="mt-4 px-6 py-2 bg-white text-slate-800 text-xs font-black rounded-lg hover:bg-slate-800 hover:text-white transition-all transform hover:scale-105">
                {banners[0].buttonText}
              </button>
            </div>
            <img
              src={banners[0].image}
              alt={banners[0].title}
              className="absolute bottom-0 right-0 w-4/5 h-2/3 object-contain transform group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>

          {/* Middle Two Banners - Using 'contents' on mobile to flatten the grid */}
          <div className="contents lg:flex lg:col-span-4 lg:flex-col lg:gap-8">
            {banners.slice(1, 3).map((banner, idx) => (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, y: idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-[2rem] p-8 flex flex-col justify-start items-start ${banner.color} ${banner.className} group`}
              >
                <div className="z-10 text-white max-w-[150px]">
                  <span className="text-[10px] font-black tracking-widest opacity-80 uppercase">{banner.subtitle}</span>
                  <h3 className="text-xl font-black mt-1 leading-tight uppercase font-kids-block">{banner.title}</h3>
                  <button className="mt-4 px-6 py-2 bg-white text-slate-800 text-[10px] font-black rounded-lg hover:bg-slate-800 hover:text-white transition-all">
                    {banner.buttonText}
                  </button>
                </div>
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute bottom-4 right-4 w-1/2 h-4/5 object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-[2rem] p-8 flex flex-col justify-start items-start ${banners[3].color} ${banners[3].className} group`}
          >
            <div className="z-10 text-white max-w-[200px]">
              <span className="text-[10px] font-black tracking-widest opacity-80 uppercase">{banners[3].subtitle}</span>
              <h3 className="text-2xl font-black mt-2 leading-tight uppercase font-kids-block">{banners[3].title}</h3>
              <button className="mt-4 px-6 py-2 bg-white text-slate-800 text-xs font-black rounded-lg hover:bg-slate-800 hover:text-white transition-all transform hover:scale-105">
                {banners[3].buttonText}
              </button>
            </div>
            <img
              src={banners[3].image}
              alt={banners[3].title}
              className="absolute -bottom-4 -right-4 w-full h-3/4 object-contain transform group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PromotionBanners;
