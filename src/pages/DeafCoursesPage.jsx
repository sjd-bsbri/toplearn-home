// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const DeafCoursesPage = () => {
//   return (
//     <motion.div
//       className="container mx-auto p-4 md:p-8 font-inter min-h-screen flex flex-col justify-center items-center text-center"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-2xl w-full">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
//           دوره‌های مخصوص ناشنوایان
//         </h1>
//         <p className="text-lg text-gray-700 leading-relaxed mb-8">
//           ما دوره‌های آموزشی تخصصی را برای افراد ناشنوا فراهم کرده‌ایم تا آن‌ها نیز بتوانند
//           به راحتی به محتوای آموزشی با کیفیت دسترسی داشته باشند و مهارت‌های جدید کسب کنند.
//         </p>
//         <Link
//           to="/"
//           className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//         >
//           <svg className="w-5 h-5 ml-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
//           بازگشت به صفحه اصلی
//         </Link>
//       </div>
//     </motion.div>
//   );
// };

// export default DeafCoursesPage;




import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaClosedCaptioning, FaUsers, FaArrowRight, FaBookOpen,FaPaintBrush,FaLaptopCode  } from 'react-icons/fa';

const DeafCoursesPage = () => {
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

  // Mock data for specialized courses
  const specializedCourses = [
    {
      id: 1,
      title: 'مقدمات کامپیوتر و اینترنت',
      description: 'آشنایی با اجزای کامپیوتر، کار با سیستم عامل و مرورگرها به زبان ساده و تصویری.',
      icon: <FaBookOpen className="text-blue-600 text-3xl" />,
    },
    {
      id: 2,
      title: 'آموزش فتوشاپ و طراحی گرافیک',
      description: 'یادگیری ابزارهای فتوشاپ و اصول طراحی گرافیک با تمرینات عملی و راهنمای تصویری.',
      icon: <FaPaintBrush className="text-purple-600 text-3xl" />,
    },
    {
      id: 3,
      title: 'مهارت‌های ICDL',
      description: 'دوره جامع ICDL شامل Word, Excel, PowerPoint و مفاهیم پایه فناوری اطلاعات.',
      icon: <FaLaptopCode className="text-green-600 text-3xl" />,
    },
  ];

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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
            دوره‌های مخصوص ناشنوایان
          </span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          ما دوره‌های آموزشی تخصصی را برای افراد ناشنوا فراهم کرده‌ایم تا آن‌ها نیز بتوانند
          به راحتی به محتوای آموزشی با کیفیت دسترسی داشته باشند و مهارت‌های جدید کسب کنند.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        {/* Feature 1: Sign Language Interpretation */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-teal-100 p-4 rounded-full mb-6">
            <FaHandsHelping className="text-teal-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">تفسیر به زبان اشاره</h2>
          <p className="text-gray-600 leading-relaxed">
            تمامی دوره‌ها با تفسیر کامل به زبان اشاره توسط مترجمین مجرب ارائه می‌شوند تا درک مطالب برای شما آسان‌تر باشد.
          </p>
        </motion.div>

        {/* Feature 2: Visual Aids & Subtitles */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-6">
            <FaClosedCaptioning className="text-blue-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">کمک‌های بصری و زیرنویس</h2>
          <p className="text-gray-600 leading-relaxed">
            استفاده از زیرنویس‌های دقیق و واضح به همراه نمودارها، تصاویر و انیمیشن‌های بصری برای تفهیم بهتر مفاهیم.
          </p>
        </motion.div>

        {/* Feature 3: Community Support */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-green-100 p-4 rounded-full mb-6">
            <FaUsers className="text-green-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">پشتیبانی جامعه</h2>
          <p className="text-gray-600 leading-relaxed">
            دسترسی به انجمن‌های اختصاصی و گروه‌های پشتیبانی برای پرسش و پاسخ، تبادل نظر و ارتباط با سایر دانشجویان.
          </p>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">دوره‌های پیشنهادی</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializedCourses.map(course => (
            <motion.div key={course.id} variants={itemVariants} className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-4 flex justify-center">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl p-8 md:p-10 text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">همین امروز یادگیری را آغاز کنید!</h2>
        <p className="text-lg mb-6">
          دسترسی به آموزش با کیفیت حق همه است. ما در کنار شما هستیم تا به اهداف آموزشی خود برسید.
        </p>
        <Link
          to="/contact" // Example link, adjust to a contact or registration page
          className="inline-flex items-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
        >
          تماس با ما
          <FaArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default DeafCoursesPage;
