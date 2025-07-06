import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: '/src/assets/images/slideImg1.jpg',
    title: 'دوره های آموزشی برنامه نویسی',
    description: 'با بهترین اساتید ایران، برنامه نویسی را از صفر تا صد یاد بگیرید',
    link: '/courses/programming'
  },
  {
    id: 2,
    image: '/src/assets/images/slideImg2.jpg',
    title: 'دوره های آموزشی طراحی وب',
    description: 'طراحی وب مدرن را با جدیدترین تکنولوژی‌ها بیاموزید',
    link: '/courses/web-design'
  },
  {
    id: 3,
    image: '/src/assets/images/slideImg3.jpg',
    title: 'دوره های آموزشی هوش مصنوعی',
    description: 'وارد دنیای هیجان‌انگیز هوش مصنوعی و یادگیری ماشین شوید',
    link: '/courses/ai'
  },
  {
    id: 4,
    image: '/src/assets/images/slideImg4.jpg',
    title: 'دوره های آموزشی موبایل',
    description: 'برنامه‌نویسی اپلیکیشن‌های موبایل را با بهترین متدها یاد بگیرید',
    link: '/courses/mobile'
  },
  {
    id: 5,
    image: '/src/assets/images/slideImg5.jpg',
    title: 'دوره های آموزشی امنیت',
    description: 'امنیت شبکه و وب را به صورت حرفه‌ای فرا بگیرید',
    link: '/courses/security'
  }
];

const HeroSlider = () => {
  return (
    <motion.div 
      className="rounded-3xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-[400px] object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p 
                  className="text-lg md:text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {slide.description}
                </motion.p>
                <motion.a 
                  href={slide.link}
                  className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-md transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  مشاهده دوره ها
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default HeroSlider;