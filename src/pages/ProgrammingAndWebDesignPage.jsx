import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaPaintBrush, FaArrowRight } from 'react-icons/fa';

const ProgrammingAndWebDesignPage = () => {
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            برنامه نویسی و طراحی وب
          </span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          در این بخش، به بررسی جامع دوره‌ها و مقالات مرتبط با برنامه نویسی و طراحی وب می‌پردازیم.
          شما می‌توانید مهارت‌های خود را در زمینه‌های فرانت‌اند، بک‌اند، و طراحی رابط کاربری و تجربه کاربری تقویت کنید.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Frontend Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-6">
            <FaLaptopCode className="text-blue-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">فرانت‌اند (Frontend)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            یادگیری ساخت رابط‌های کاربری جذاب و واکنش‌گرا با استفاده از HTML، CSS، JavaScript و فریم‌ورک‌های مدرن مانند React و Vue.js.
          </p>
          <ul className="text-gray-700 text-sm list-disc list-inside text-right mb-6 w-full px-4">
            <li>HTML5 و CSS3 پیشرفته</li>
            <li>جاوااسکریپت (ES6+)</li>
            <li>React.js و Vue.js</li>
            <li>Tailwind CSS و Bootstrap</li>
            <li>مفاهیم Responsive Design</li>
          </ul>
          <Link
            to="/courses" // Example link, adjust as needed
            className="mt-auto inline-flex items-center px-5 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200"
          >
            مشاهده دوره‌ها
            <FaArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
          </Link>
        </motion.div>

        {/* Backend Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-green-100 p-4 rounded-full mb-6">
            <FaServer className="text-green-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">بک‌اند (Backend)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            طراحی و پیاده‌سازی منطق سمت سرور، مدیریت پایگاه داده و ساخت API‌های قدرتمند با زبان‌ها و فریم‌ورک‌های محبوب.
          </p>
          <ul className="text-gray-700 text-sm list-disc list-inside text-right mb-6 w-full px-4">
            <li>Node.js و Express.js</li>
            <li>Python و Django/Flask</li>
            <li>PHP و Laravel</li>
            <li>پایگاه داده (SQL, NoSQL)</li>
            <li>مفاهیم API و RESTful</li>
          </ul>
          <Link
            to="/courses" // Example link, adjust as needed
            className="mt-auto inline-flex items-center px-5 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-colors duration-200"
          >
            مشاهده دوره‌ها
            <FaArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
          </Link>
        </motion.div>

        {/* UI/UX Design Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-purple-100 p-4 rounded-full mb-6">
            <FaPaintBrush className="text-purple-600 text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">طراحی UI/UX</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            خلق تجربه‌های کاربری لذت‌بخش و رابط‌های بصری زیبا که کاربران را جذب کند و نیازهای آن‌ها را برآورده سازد.
          </p>
          <ul className="text-gray-700 text-sm list-disc list-inside text-right mb-6 w-full px-4">
            <li>اصول طراحی رابط کاربری (UI)</li>
            <li>روانشناسی تجربه کاربری (UX)</li>
            <li>ابزارهای طراحی (Figma, Adobe XD)</li>
            <li>طراحی واکنش‌گرا و Mobile-First</li>
            <li>تست کاربردپذیری</li>
          </ul>
          <Link
            to="/courses" // Example link, adjust as needed
            className="mt-auto inline-flex items-center px-5 py-2 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition-colors duration-200"
          >
            مشاهده دوره‌ها
            <FaArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
          </Link>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-8 md:p-10 text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">آماده‌اید تا سفر خود را آغاز کنید؟</h2>
        <p className="text-lg mb-6">
          با دوره‌های جامع تاپ لرن، به یک توسعه‌دهنده یا طراح وب حرفه‌ای تبدیل شوید.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
        >
          شروع یادگیری
          <FaArrowRight className="w-4 h-4 mr-2 transform rotate-180" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProgrammingAndWebDesignPage;
