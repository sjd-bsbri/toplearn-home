import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaTools, FaArrowRight } from 'react-icons/fa';

const IntroToProgrammingPage = () => {
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            آموزش ورود به دنیای برنامه نویسی
          </span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          این دوره‌ها برای افرادی طراحی شده‌اند که هیچ پیش‌زمینه‌ای در برنامه نویسی ندارند.
          با مفاهیم پایه آشنا شوید و اولین گام‌های خود را در مسیر تبدیل شدن به یک برنامه‌نویس بردارید.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Section 1: What is Programming */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-orange-100 p-4 rounded-full mb-6">
            <FaLightbulb className="text-orange-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">برنامه‌نویسی چیست؟</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            آشنایی با مفاهیم اساسی برنامه‌نویسی، منطق الگوریتمی و چگونگی ارتباط با کامپیوترها.
            درک پایه و اساس هر زبان برنامه‌نویسی.
          </p>
          <ul className="text-gray-700 text-sm list-disc list-inside text-right mb-6 w-full px-4">
            <li>مفهوم الگوریتم</li>
            <li>جریان کنترل (شرطی، حلقه)</li>
            <li>انواع داده و متغیرها</li>
            <li>توابع و ماژول‌ها</li>
            <li>حل مسئله گام به گام</li>
          </ul>
        </motion.div>

        {/* Section 2: First Steps & Languages */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-red-100 p-4 rounded-full mb-6">
            <FaCode className="text-red-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">اولین گام‌ها و زبان‌ها</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            معرفی بهترین زبان‌ها برای شروع برنامه‌نویسی و نحوه انتخاب مسیر یادگیری مناسب برای شما.
            شروعی آسان و بدون دردسر.
          </p>
          <ul className="text-gray-700 text-sm list-disc list-inside text-right mb-6 w-full px-4">
            <li>پایتون (برای سادگی)</li>
            <li>جاوااسکریپت (برای وب)</li>
            <li>HTML/CSS (مقدمه وب)</li>
            <li>محیط‌های توسعه (IDE)</li>
            <li>ابزارهای خط فرمان</li>
          </ul>
        </motion.div>

        {/* Section 3: Tools and Resources */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-purple-100 p-4 rounded-full mb-6">
            <FaTools className="text-purple-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">ابزارها و منابع</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            آشنایی با ابزارهای ضروری برای هر برنامه‌نویس مبتدی و منابع آنلاین برای ادامه یادگیری و تمرین.
          </p>
          <ul className="text-gray-700 text-sm list-disc list-inside text-right mb-6 w-full px-4">
            <li>ویرایشگر کد (VS Code)</li>
            <li>سیستم کنترل نسخه (Git)</li>
            <li>پلتفرم‌های کدینگ آنلاین</li>
            <li>انجمن‌های برنامه‌نویسی</li>
            <li>کتاب‌ها و مستندات</li>
          </ul>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 md:p-10 text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">اولین خط کد خود را بنویسید!</h2>
        <p className="text-lg mb-6">
          با دوره‌های مقدماتی تاپ لرن، به راحتی وارد دنیای هیجان‌انگیز برنامه‌نویسی شوید.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
        >
          شروع کنید
          <FaArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default IntroToProgrammingPage;
