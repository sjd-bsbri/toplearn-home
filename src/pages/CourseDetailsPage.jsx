import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaClock, FaUser, FaShoppingCart, FaBookmark, FaShare, FaPlayCircle, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gridImage9 from '../images/gridImage9.jpg';

const sampleCourses = [
  {
    id: 1,
    title: 'آموزش ساخت سایت با تیلویند',
    instructor: 'باصبری',
    duration: '27:23:34',
    price: 'رایگان',
    image: gridImage9,
    isFree: true,
    description: 'در این دوره جامع، شما با فریمورک Tailwind CSS آشنا خواهید شد و یاد می‌گیرید چگونه وب‌سایت‌های مدرن و واکنش‌گرا بسازید. از مفاهیم پایه تا تکنیک‌های پیشرفته را پوشش می‌دهیم.',
    topics: [
      'مقدمه‌ای بر Tailwind CSS',
      'نصب و راه‌اندازی Tailwind',
      'کار با کلاس‌های Utility',
      'ساخت کامپوننت‌های سفارشی',
      'طراحی واکنش‌گرا با Tailwind',
      'بهینه‌سازی برای تولید'
    ],
    level: 'متوسط',
    prerequisites: 'آشنایی با HTML و CSS',
    students: 1240,
    lastUpdate: '1402/02/15'
  },
  {
    id: 2,
    title: 'آموزش React.js پیشرفته',
    instructor: 'علی محمدی',
    duration: '42:15:20',
    price: '۲۵۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    description: 'این دوره برای توسعه‌دهندگانی طراحی شده که می‌خواهند مهارت‌های React خود را به سطح بالاتری برسانند. مفاهیم پیشرفته مانند Hooks، Context API، و بهینه‌سازی عملکرد را خواهید آموخت.',
    topics: [
      'هوک‌های پیشرفته React',
      'مدیریت state با Redux',
      'Context API',
      'بهینه‌سازی عملکرد',
      'تست‌نویسی در React',
      'Server-Side Rendering'
    ],
    level: 'پیشرفته',
    prerequisites: 'آشنایی با JavaScript و React.js',
    students: 850,
    lastUpdate: '1402/03/20'
  },
  {
    id: 3,
    title: 'آموزش Node.js و Express',
    instructor: 'رضا احمدی',
    duration: '35:45:12',
    price: '۳۵۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    description: 'در این دوره، شما با Node.js و فریمورک Express آشنا می‌شوید و یاد می‌گیرید چگونه API‌های RESTful و برنامه‌های وب سمت سرور بسازید.',
    topics: [
      'مبانی Node.js',
      'کار با Express.js',
      'ساخت API‌های RESTful',
      'کار با پایگاه داده‌ها',
      'احراز هویت و امنیت',
      'استقرار برنامه‌های Node.js'
    ],
    level: 'متوسط تا پیشرفته',
    prerequisites: 'آشنایی با JavaScript',
    students: 720,
    lastUpdate: '1402/01/10'
  },
  {
    id: 4,
    title: 'آموزش پایتون از صفر تا صد',
    instructor: 'مریم حسینی',
    duration: '50:30:45',
    price: '۴۰۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    description: 'این دوره جامع پایتون برای مبتدیان تا افراد با تجربه طراحی شده است. از مفاهیم پایه تا موضوعات پیشرفته مانند برنامه‌نویسی شیءگرا و کار با کتابخانه‌های مختلف را پوشش می‌دهیم.',
    topics: [
      'مبانی پایتون',
      'ساختارهای داده',
      'برنامه‌نویسی شیءگرا',
      'کار با فایل‌ها',
      'کتابخانه‌های استاندارد',
      'پروژه‌های عملی'
    ],
    level: 'مبتدی تا پیشرفته',
    prerequisites: 'بدون نیاز به پیش‌نیاز',
    students: 1850,
    lastUpdate: '1402/04/05'
  },
  {
    id: 5,
    title: 'آموزش طراحی UI/UX',
    instructor: 'سارا کریمی',
    duration: '28:15:30',
    price: '۳۰۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    description: 'در این دوره، اصول طراحی رابط کاربری (UI) و تجربه کاربری (UX) را می‌آموزید و با ابزارهای طراحی مانند Figma و Adobe XD آشنا می‌شوید.',
    topics: [
      'اصول طراحی UI',
      'روانشناسی UX',
      'طراحی واکنش‌گرا',
      'کار با Figma',
      'نمونه‌سازی و wireframing',
      'تست کاربردپذیری'
    ],
    level: 'متوسط',
    prerequisites: 'آشنایی با مبانی طراحی',
    students: 650,
    lastUpdate: '1401/12/15'
  },
  {
    id: 6,
    title: 'آموزش جاوا اسکریپت مقدماتی',
    instructor: 'امیر رضایی',
    duration: '20:45:10',
    price: 'رایگان',
    image: gridImage9,
    isFree: true,
    description: 'این دوره برای افرادی که می‌خواهند برنامه‌نویسی وب را شروع کنند طراحی شده است. مفاهیم پایه جاوا اسکریپت را به صورت کاربردی و با مثال‌های عملی یاد می‌گیرید.',
    topics: [
      'متغیرها و انواع داده',
      'عملگرها و شرط‌ها',
      'حلقه‌ها',
      'توابع',
      'آرایه‌ها و آبجکت‌ها',
      'DOM و رویدادها'
    ],
    level: 'مبتدی',
    prerequisites: 'آشنایی با HTML و CSS',
    students: 2100,
    lastUpdate: '1401/10/20'
  },
  {
    id: 7,
    title: 'آموزش Git و GitHub',
    instructor: 'حسن محمودی',
    duration: '15:20:45',
    price: 'رایگان',
    image: gridImage9,
    isFree: true,
    description: 'در این دوره، با سیستم کنترل نسخه Git و پلتفرم GitHub آشنا می‌شوید و یاد می‌گیرید چگونه پروژه‌های خود را مدیریت کنید.',
    topics: [
      'مفاهیم اولیه Git',
      'کار با شاخه‌ها (Branch)',
      'Merge و Rebase',
      'کار با GitHub',
      'Pull Request',
      'همکاری در پروژه‌های تیمی'
    ],
    level: 'مبتدی تا متوسط',
    prerequisites: 'آشنایی با خط فرمان',
    students: 1500,
    lastUpdate: '1401/09/10'
  },
  {
    id: 8,
    title: 'آموزش Laravel پیشرفته',
    instructor: 'علی رضایی',
    duration: '45:30:15',
    price: '۴۵۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    description: 'در این دوره پیشرفته Laravel، با مفاهیم پیچیده‌تر این فریمورک آشنا می‌شوید و یاد می‌گیرید چگونه برنامه‌های وب مقیاس‌پذیر و حرفه‌ای بسازید.',
    topics: [
      'معماری پیشرفته Laravel',
      'احراز هویت و مجوزها',
      'کار با Eloquent ORM',
      'تست‌نویسی در Laravel',
      'کش‌کردن و بهینه‌سازی',
      'ساخت API با Laravel'
    ],
    level: 'پیشرفته',
    prerequisites: 'آشنایی با PHP و Laravel',
    students: 580,
    lastUpdate: '1402/02/25'
  },
];

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const courseId = parseInt(id);
    const foundCourse = sampleCourses.find(c => c.id === courseId);

    setTimeout(() => {
      setCourse(foundCourse);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="container py-16 flex justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-slate-200 rounded mb-8"></div>
          <div className="h-64 w-full max-w-3xl bg-slate-200 rounded mb-8"></div>
          <div className="h-32 w-full max-w-3xl bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container py-16">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          <p>دوره مورد نظر یافت نشد!</p>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="container py-8 md:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center space-x-2 space-x-reverse text-primary-500 hover:text-primary-600 transition-colors">
          <FaArrowRight />
          <span>بازگشت به صفحه اصلی</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 md:h-80 object-cover"
            />

            <div className="p-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{course.title}</h1>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <FaUser className="text-primary-500" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <FaClock className="text-primary-500" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <FaBookmark className="text-primary-500" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <FaUser className="text-primary-500" />
                  <span>{course.students} دانشجو</span>
                </div>
              </div>

              <div className="flex border-b mb-6">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-3 px-4 ${activeTab === 'description' ? 'border-b-2 border-primary-500 text-primary-600' : 'text-gray-600'}`}
                >
                  توضیحات دوره
                </button>
                <button
                  onClick={() => setActiveTab('topics')}
                  className={`py-3 px-4 ${activeTab === 'topics' ? 'border-b-2 border-primary-500 text-primary-600' : 'text-gray-600'}`}
                >
                  سرفصل‌ها
                </button>
              </div>

              {activeTab === 'description' && (
                <div className="space-y-4">
                  <p className="leading-relaxed">{course.description}</p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">پیش‌نیازها:</h3>
                    <p>{course.prerequisites}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">آخرین بروزرسانی:</h3>
                    <p>{course.lastUpdate}</p>
                  </div>
                </div>
              )}

              {activeTab === 'topics' && (
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {course.topics.map((topic, index) => (
                      <li key={index} className="flex items-center space-x-3 space-x-reverse">
                        <FaPlayCircle className="text-primary-500 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <div className="mb-6 text-center">
              <h2 className={`text-2xl font-bold ${course.isFree ? 'text-green-600' : 'text-primary-600'}`}>
                {course.price}
              </h2>
              {course.isFree && (
                <span className="bg-green-100 text-green-800 text-xs py-1 px-2 rounded-full">
                  رایگان
                </span>
              )}
            </div>

            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-md transition-colors flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <FaShoppingCart />
              <span>{course.isFree ? 'ثبت نام در دوره' : 'افزودن به سبد خرید'}</span>
            </button>

            <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 space-x-reverse">
              <FaShare />
              <span>اشتراک‌گذاری دوره</span>
            </button>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-4">این دوره شامل:</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 space-x-reverse text-sm">
                  <FaPlayCircle className="text-primary-500" />
                  <span>دسترسی آنلاین دائمی</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse text-sm">
                  <FaPlayCircle className="text-primary-500" />
                  <span>گواهی پایان دوره</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse text-sm">
                  <FaPlayCircle className="text-primary-500" />
                  <span>پشتیبانی آنلاین</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse text-sm">
                  <FaPlayCircle className="text-primary-500" />
                  <span>تمرین و پروژه عملی</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseDetailsPage; 