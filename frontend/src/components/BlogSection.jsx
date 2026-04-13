import { Calendar, User } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop",
      date: "MARCH 25, 2024",
      author: "TOYOVO ADMIN",
      title: "The Ideal Shopify 2.0 Theme For Baby And Kids...",
      description: "Discover Toyovo, the ultimate Shopify 2.0 theme crafted specifically for baby shops and kids' toy..."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
      date: "MARCH 25, 2024",
      author: "TOYOVO ADMIN",
      title: "The Perfect Shopify 2.0 Theme For Baby And Kids...",
      description: "Discover Toyovo, the ultimate Shopify 2.0 theme crafted specifically for baby shops and kids' toy..."
    }
  ];

  return (
    <section className="py-10 bg-[#FFF9F0]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-[#FF4D4D] text-xs md:text-sm font-black uppercase tracking-[0.2em]">
            LATEST NEWS
          </span>
          <h2 
            className="text-3xl md:text-5xl font-black text-slate-800"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            From The Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogs.map((blog) => (
            <article key={blog.id} className="flex flex-col gap-6 group">
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border-2 border-dashed border-black bg-white group-hover:border-[#FF4D4D] transition-colors duration-300">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 px-2">
                {/* Meta properties */}
                <div className="flex items-center gap-4 text-[#FF4D4D] text-xs md:text-sm font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black text-slate-800 leading-tight group-hover:text-[#FF4D4D] transition-colors cursor-pointer" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium line-clamp-2">
                  {blog.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
