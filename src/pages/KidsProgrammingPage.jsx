import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const KidsProgrammingPage = () => {
  return (
    <motion.div
      className="container mx-auto p-4 md:p-8 font-inter min-h-screen flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          آموزش برنامه نویسی به کودکان
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          دوره‌های جذاب و تعاملی برای آموزش مفاهیم برنامه نویسی به کودکان در محیطی سرگرم‌کننده.
          کودکان شما می‌توانند با بازی و خلاقیت، تفکر منطقی و حل مسئله را بیاموزند.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg className="w-5 h-5 ml-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </motion.div>
  );
};

export default KidsProgrammingPage;
