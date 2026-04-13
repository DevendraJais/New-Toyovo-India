import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import MovingBanner from './components/MovingBanner.jsx';
import DottedCategories from './components/DottedCategories.jsx';
import CoreValues from './components/CoreValues.jsx';
import ServiceHighlights from './components/ServiceHighlights.jsx';
import TrendingProducts from './components/TrendingProducts.jsx';
import Testimonials from './components/Testimonials.jsx';
import BlogSection from './components/BlogSection.jsx';
import SpecialProducts from './components/SpecialProducts.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Zigzag Dotted Categories Card Grid */}
        <DottedCategories />

        {/* 3. Orange Moving Banner (Free Shipping Promotion) */}
        <MovingBanner />

        {/* 4. Core Values & Detailed Showcase Section */}
        <CoreValues />

        {/* 5. Service Highlights (Free Shipping, Secure Payment, etc.) */}
        <ServiceHighlights />

        {/* 6. Trending Products Grid */}
        <TrendingProducts />

        {/* 7. Customer Testimonials Section */}
        <Testimonials />

        {/* 8. Special Products Tabbed Grid */}
        <SpecialProducts />

        {/* 9. Blog Section */}
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
