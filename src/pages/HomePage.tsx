import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Check, Star } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/products';

export const HomePage: React.FC = () => {
  const {
    products,
    setActivePage,
    setSelectedCategoryFilter,
    viewProductDetails,
    formatBDT
  } = useShop();

  const [activeTab, setActiveTab] = useState<'featured' | 'bestseller' | 'new'>('featured');

  const filteredCollection = products.filter((p) => {
    if (activeTab === 'bestseller') return p.isBestSeller;
    if (activeTab === 'new') return p.isNew;
    return p.isFeatured || p.isBestSeller;
  }).slice(0, 8);

  const categories = [
    {
      name: 'Three-Piece',
      label: 'Three-Piece',
      image: '/src/assets/images/threepiece_collection_1792172508454.jpg'
    },
    {
      name: 'Western Dress',
      label: 'Western Maxi',
      image: '/src/assets/images/western_collection_1792172508166.jpg'
    },
    {
      name: 'Hijab',
      label: 'Modal Hijabs',
      image: '/src/assets/images/hijab_collection_1792172508870.jpg'
    },
    {
      name: 'Kurti & Tunics',
      label: 'Kurtis',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    },
    {
      name: 'Saree & Festive',
      label: 'Festive Sarees',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    }
  ];

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategoryFilter(categoryName);
    setActivePage('store');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 text-left">
      {/* 1. Hero Section - Clean, Modern & Spacious */}
      <section className="bg-stone-50/70 border-b border-stone-200/70 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
                Collection 2026
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] text-balance">
                Modern Modest Elegance
              </h1>

              <p className="text-base sm:text-lg text-stone-600 max-w-lg leading-relaxed font-normal">
                Curated three-piece ensembles, tailored contemporary dresses, and fine modal hijabs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedCategoryFilter('All');
                    setActivePage('store');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center gap-2 group"
                >
                  <span>Explore All</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    setSelectedCategoryFilter('Three-Piece');
                    setActivePage('store');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-white hover:bg-stone-100 text-stone-900 text-xs font-semibold uppercase tracking-wider rounded-lg border border-stone-300 transition-colors cursor-pointer"
                >
                  Three-Piece
                </button>
              </div>

              {/* Clean Inline Trust Markers */}
              <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-500">
                <span className="font-medium text-stone-800">Fast Delivery</span>
                <span aria-hidden="true">·</span>
                <span>All 64 Districts</span>
                <span aria-hidden="true">·</span>
                <span>Authentic Fabrics</span>
              </div>
            </div>

            {/* Right Column - Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-md bg-stone-200">
                <img
                  src="/src/assets/images/hero_fashion_model_1792172507098.jpg"
                  alt="Authentix Apparel Model"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />

                {/* Minimalist Floating Tag */}
                <div 
                  onClick={() => {
                    const heroItem = products.find((p) => p.id === 'tp-01');
                    if (heroItem) viewProductDetails(heroItem);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-stone-200/80 flex items-center justify-between cursor-pointer hover:bg-white transition-colors"
                >
                  <div>
                    <h4 className="text-xs font-medium text-stone-900 truncate">Gul-E-Gulab Organza Set</h4>
                    <span className="text-xs font-semibold text-stone-700 font-mono">৳4,950</span>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 hover:text-rose-700">
                    View
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Clean Category Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
            Categories
          </h2>
          <button
            onClick={() => {
              setSelectedCategoryFilter('All');
              setActivePage('store');
            }}
            className="text-xs font-semibold text-stone-600 hover:text-stone-950 flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className="group relative flex flex-col bg-white border border-stone-200/80 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200"
            >
              <div className="relative aspect-3/4 w-full overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm font-semibold tracking-tight">{cat.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Products Collection Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
            Featured Designs
          </h2>

          {/* Clean Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg self-start sm:self-auto text-xs">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === 'featured'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab('bestseller')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === 'bestseller'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === 'new'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              New Arrivals
            </button>
          </div>
        </div>

        {/* 4-column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCollection.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => {
              setSelectedCategoryFilter('All');
              setActivePage('store');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 4. Minimalist Studio Highlight */}
      <section className="bg-stone-100 py-14 sm:py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Frames */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="aspect-3/4 rounded-xl overflow-hidden shadow-xs bg-stone-200">
                <img
                  src="/src/assets/images/western_collection_1792172508166.jpg"
                  alt="Modest Western Maxi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-3/4 rounded-xl overflow-hidden shadow-xs bg-stone-200 mt-4">
                <img
                  src="/src/assets/images/threepiece_collection_1792172508454.jpg"
                  alt="Three-Piece Ensemble"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Clean Copy */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                Designed for Everyday Grace
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                Every silhouette is crafted with breathable natural textiles, flattering modest cuts, and uncompromising attention to detail.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs text-stone-700">
                <div className="p-3 bg-white rounded-lg border border-stone-200/80">
                  <span className="font-semibold text-stone-900 block mb-0.5">Pure Fabrics</span>
                  <span className="text-stone-500">Organza, raw silk & lawn</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200/80">
                  <span className="font-semibold text-stone-900 block mb-0.5">Modest Cuts</span>
                  <span className="text-stone-500">Comfortable full-coverage</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200/80">
                  <span className="font-semibold text-stone-900 block mb-0.5">Doorstep Delivery</span>
                  <span className="text-stone-500">Inspect before receiving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clean Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
            Customer Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {INITIAL_REVIEWS.slice(0, 4).map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <h4 className="text-xs font-semibold text-stone-900 mb-1">"{rev.title}"</h4>
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">{rev.comment}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-medium text-stone-900 block">{rev.userName}</span>
                  <span className="text-[11px] text-stone-400">{rev.location}</span>
                </div>
                <span className="text-[10px] text-emerald-700 font-medium">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
