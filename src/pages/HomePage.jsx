import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaClock, FaUser } from 'react-icons/fa';
import CourseCard from '../components/courses/CourseCard';
import HeroSlider from '../components/home/HeroSlider';
import CategoryNav from '../components/home/CategoryNav';

// Sample course data (in a real app, this would come from an API)
const sampleCourses = [
  {
    id: 1,
    title: 'آموزش ساخت سایت با تیلویند',
    instructor: 'باصبری',
    duration: '27:23:34',
    price: 'رایگان',
    image: '/src/assets/images/gridImage9.jpg',
    isFree: true,
  },
  {
    id: 2,
    title: 'آموزش React.js پیشرفته',
    instructor: 'علی محمدی',
    duration: '42:15:20',
    price: '۲۵۰,۰۰۰ تومان',
    image: '/src/assets/images/gridImage9.jpg',
    isFree: false,
  },
  {
    id: 3,
    title: 'آموزش Node.js و Express',
    instructor: 'رضا احمدی',
    duration: '35:45:12',
    price: '۳۵۰,۰۰۰ تومان',
    image: '/src/assets/images/gridImage9.jpg',
    isFree: false,
  },
  {
    id: 4,
    title: 'آموزش پایتون از صفر تا صد',
    instructor: 'مریم حسینی',
    duration: '50:30:45',
    price: '۴۰۰,۰۰۰ تومان',
    image: '/src/assets/images/gridImage9.jpg',
    isFree: false,
  },
  {
    id: 5,
    title: 'آموزش طراحی UI/UX',
    instructor: 'سارا کریمی',
    duration: '28:15:30',
    price: '۳۰۰,۰۰۰ تومان',
    image: '/src/assets/images/gridImage9.jpg',
    isFree: false,
  },
  {
    id: 6,
    title: 'آموزش جاوا اسکریپت مقدماتی',
    instructor: 'امیر رضایی',
    duration: '20:45:10',
    price: 'رایگان',
    image: '/src/assets/images/gridImage9.jpg',
    isFree: true,
  },
  {
    id: 7,
    title: 'آموزش Git و GitHub',
    instructor: 'حسن محمودی',
    duration: '15:20:45',
    price: 'رایگان',
    image: '/src/assets/images/gridImage9.jpg',
    isFree: true,
  },
  {
    id: 8,
    title: 'آموزش Laravel پیشرفته',
    instructor: 'علی رضایی',
    duration: '45:30:15',
    price: '۴۵۰,۰۰۰ تومان',
    image: '/src/assets/images/gridImage9.jpg',
    isFree: false,
  },
];

const categories = [
  { id: 1, name: 'برنامه نویسی و طراحی وب' },
  { id: 2, name: 'آموزش برنامه نویسی به کودکان' },
  { id: 3, name: 'آموزش ورود به دنیای برنامه نویسی' },
  { id: 4, name: 'دوره های مخصوص ناشنوایان' },
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    // In a real app, fetch courses based on selected category
    // For now, we'll just use our sample data
    setCourses(sampleCourses);
  }, [selectedCategory]);

  return (
    <div>
      <CategoryNav 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />

      <section className="mt-5 lg:mt-3 container mb-16">
        <HeroSlider />
      </section>

      <section className="mb-24">
        <header className="container flex flex-col space-y-4 lg:flex-row lg:justify-between lg:space-y-0">
          <div className="ps-10">
            <h3 className="font-medium text-lg">
              آخرین دوره های تاپلرن
            </h3>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse ps-10">
            <h6 className="font-medium text-sm">
              مشاهده همه دوره ها
            </h6>
            <FaArrowLeft className="text-primary-500" />
          </div>
        </header>

        <section className="container">
          <header className="ps-5 sm:ps-0">
            <h6 className="border-b-4 text-xs md:text-sm lg:text-md border-primary-500 w-32 pt-6 pb-2 md:w-40 lg:w-42">
              {categories.find(cat => cat.id === selectedCategory)?.name}
            </h6>
          </header>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        </section>
      </section>

      <section className="container mb-24">
        <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                عضویت ویژه تاپ لرن
              </motion.h2>
              <motion.p 
                className="mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                با عضویت ویژه در تاپ لرن، به تمامی دوره‌های آموزشی دسترسی نامحدود خواهید داشت و می‌توانید با کمترین هزینه، مهارت‌های جدید کسب کنید.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link to="/vip" className="bg-white text-primary-600 py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block">
                  اطلاعات بیشتر
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <motion.img 
                src="/src/assets/images/goldVip.png" 
                alt="VIP Membership" 
                className="w-32 h-32 md:w-48 md:h-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-24">
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">چرا تاپ لرن را انتخاب کنیم؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">آموزش های با کیفیت</h3>
              <p className="text-gray-600">دوره های آموزشی ما با بالاترین کیفیت و توسط مدرسین مجرب تهیه شده اند.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">دسترسی مادام العمر</h3>
              <p className="text-gray-600">پس از خرید دوره، به صورت مادام العمر به محتوای آن دسترسی خواهید داشت.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">پشتیبانی و رفع اشکال</h3>
              <p className="text-gray-600">تیم پشتیبانی ما همواره آماده پاسخگویی به سوالات و رفع اشکالات شما است.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">قیمت مناسب</h3>
              <p className="text-gray-600">دوره های آموزشی ما با قیمت مناسب و مقرون به صرفه ارائه می شوند.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;