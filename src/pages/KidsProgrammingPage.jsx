import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChild, FaRobot, FaPuzzlePiece, FaArrowRight } from 'react-icons/fa';

const KidsProgrammingPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="container mx-auto p-4 md:p-8 font-inter min-h-screen"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
       <div className="mb-6">
        <Link to="/" className="inline-flex items-center space-x-2 space-x-reverse text-primary-500 hover:text-primary-600 transition-colors">
          <FaArrowRight />
          <span>بازگشت به صفحه اصلی</span>
        </Link>
      </div>

      <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
            آموزش برنامه نویسی به کودکان
          </span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          دوره‌های جذاب و تعاملی برای آموزش مفاهیم برنامه نویسی به کودکان در محیطی سرگرم‌کننده.
          کودکان شما می‌توانند با بازی و خلاقیت، تفکر منطقی و حل مسئله را بیاموزند.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Section 1: Scratch */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-yellow-100 p-4 rounded-full mb-6">
            <FaPuzzlePiece className="text-yellow-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">اسکرچ (Scratch)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            محیط برنامه‌نویسی بصری برای کودکان، جهت ساخت بازی‌ها، داستان‌های تعاملی و انیمیشن‌ها.
            تقویت خلاقیت و تفکر منطقی بدون نیاز به کدنویسی پیچیده.
          </p>
          <Link
            to="/courses" // Example link
            className="mt-auto inline-flex items-center px-5 py-2 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition-colors duration-200"
          >
            مشاهده دوره‌ها
            <FaArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
          </Link>
        </motion.div>

        {/* Section 2: Python Basics for Kids */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-6">
            <FaRobot className="text-blue-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">پایتون برای کودکان</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            معرفی مفاهیم پایه برنامه‌نویسی با زبان پایتون به شیوه‌ای ساده و بازی‌گونه، مناسب برای سنین بالاتر.
            ساخت پروژه‌های کوچک و سرگرم‌کننده.
          </p>
          <Link
            to="/courses" // Example link
            className="mt-auto inline-flex items-center px-5 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200"
          >
            مشاهده دوره‌ها
            <FaArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
          </Link>
        </motion.div>

        {/* Section 3: Benefits */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-pink-100 p-4 rounded-full mb-6">
            <FaChild className="text-pink-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">چرا برنامه‌نویسی برای کودکان؟</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            برنامه‌نویسی مهارت‌های حل مسئله، تفکر انتقادی، خلاقیت و منطق را در کودکان تقویت می‌کند.
            آمادگی برای آینده‌ای که تکنولوژی نقش محوری دارد.
          </p>
          <ul className="text-gray-700 text-sm list-disc list-inside text-right mb-6 w-full px-4">
            <li>تقویت تفکر منطقی</li>
            <li>افزایش خلاقیت</li>
            <li>حل مسئله</li>
            <li>آشنایی با تکنولوژی</li>
            <li>آمادگی برای آینده شغلی</li>
          </ul>
          <Link
            to="/faq" // Example link
            className="mt-auto inline-flex items-center px-5 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition-colors duration-200"
          >
            سوالات متداول
            <FaArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
          </Link>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-16 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl p-8 md:p-10 text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">آینده کودکان خود را با برنامه‌نویسی بسازید!</h2>
        <p className="text-lg mb-6">
          با دوره‌های سرگرم‌کننده و آموزشی ما، کودکان شما می‌توانند اولین گام‌های خود را در دنیای کدنویسی بردارند.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
        >
          ثبت نام کنید
          <FaArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default KidsProgrammingPage;
