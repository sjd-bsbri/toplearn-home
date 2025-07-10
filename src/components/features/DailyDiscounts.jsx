import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiTag, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const discountItems = [
  {
    id: 1,
    title: 'دوره جامع React.js',
    originalPrice: 1200000,
    discountedPrice: 840000,
    discountPercent: 30,
    remainingHours: 12,
    image: 'https://via.placeholder.com/300x200?text=React.js',
  },
  {
    id: 2,
    title: 'آموزش پروژه محور Next.js',
    originalPrice: 980000,
    discountedPrice: 686000,
    discountPercent: 30,
    remainingHours: 8,
    image: 'https://via.placeholder.com/300x200?text=Next.js',
  },
  {
    id: 3,
    title: 'دوره پیشرفته Node.js',
    originalPrice: 1500000,
    discountedPrice: 900000,
    discountPercent: 40,
    remainingHours: 16,
    image: 'https://via.placeholder.com/300x200?text=Node.js',
  },
  {
    id: 4,
    title: 'آموزش کامل TailwindCSS',
    originalPrice: 750000,
    discountedPrice: 525000,
    discountPercent: 30,
    remainingHours: 24,
    image: 'https://via.placeholder.com/300x200?text=TailwindCSS',
  },
];

const DailyDiscounts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === discountItems.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? discountItems.length - 2 : prevIndex - 1
    );
  };

  // Format price with commas
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <FiTag className="ml-2 text-primary-500" />
            تخفیف‌های ویژه روزانه
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-500 border border-gray-200 transition-all"
              aria-label="مورد قبلی"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-500 border border-gray-200 transition-all"
              aria-label="مورد بعدی"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${currentIndex * 25}%)` }}
          >
            {discountItems.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 flex-shrink-0"
              >
                <div className="card group h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 bg-secondary-500 text-white px-3 py-1 rounded-br-lg font-bold">
                      {item.discountPercent}٪
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary-500 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-gray-500 mb-4">
                      <FiClock className="ml-1" />
                      <span className="text-sm">
                        {item.remainingHours} ساعت باقی‌مانده
                      </span>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="line-through text-gray-400 text-sm">
                            {formatPrice(item.originalPrice)} تومان
                          </span>
                          <span className="font-bold text-lg text-primary-600">
                            {formatPrice(item.discountedPrice)} تومان
                          </span>
                        </div>
                        <button className="btn btn-primary">مشاهده دوره</button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyDiscounts; 