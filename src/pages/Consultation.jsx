import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiVideo, FiUsers, FiCalendar, FiCheck, FiStar } from 'react-icons/fi';

const consultationTypes = [
  {
    id: 1,
    title: 'مشاوره آنلاین',
    description: 'گفتگوی زنده با مشاوران ما برای رفع سریع مشکلات برنامه‌نویسی',
    icon: <FiMessageSquare className="w-6 h-6" />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'جلسات ویدیویی',
    description: 'تماس تصویری با اساتید برای حل مشکلات پیچیده و رفع اشکال',
    icon: <FiVideo className="w-6 h-6" />,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 3,
    title: 'جلسات گروهی',
    description: 'شرکت در جلسات گروهی رفع اشکال با حضور دیگر دانشجویان',
    icon: <FiUsers className="w-6 h-6" />,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 4,
    title: 'زمان‌بندی جلسات',
    description: 'رزرو زمان مشخص برای جلسات خصوصی با اساتید مورد نظر',
    icon: <FiCalendar className="w-6 h-6" />,
    color: 'bg-amber-100 text-amber-600',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'علی محمدی',
    role: 'توسعه‌دهنده فرانت‌اند',
    comment: 'جلسات مشاوره تاپ‌لرن به من کمک کرد تا مشکلات پروژه React خود را در کمترین زمان حل کنم. اساتید بسیار با حوصله و متخصص بودند.',
    rating: 5,
  },
  {
    id: 2,
    name: 'مریم حسینی',
    role: 'دانشجوی برنامه‌نویسی',
    comment: 'مشاوره آنلاین تاپ‌لرن برای من که تازه وارد دنیای برنامه‌نویسی شده‌ام، بسیار مفید بود و توانستم مسیر درست یادگیری را پیدا کنم.',
    rating: 4,
  },
  {
    id: 3,
    name: 'رضا کریمی',
    role: 'توسعه‌دهنده بک‌اند',
    comment: 'جلسات گروهی رفع اشکال، علاوه بر حل مشکلات من، باعث شد با چالش‌های دیگران هم آشنا شوم و یادگیری من را چند برابر کرد.',
    rating: 5,
  },
];

const Consultation = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            مشاوره و رفع اشکال تخصصی
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            در مسیر یادگیری برنامه‌نویسی با چالش‌هایی روبرو می‌شوید؟ تیم متخصصان تاپ‌لرن آماده کمک به شما هستند.
            از مشاوره آنلاین تا جلسات رفع اشکال تخصصی، ما کنار شما هستیم.
          </p>
        </motion.div>

        {/* Consultation Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {consultationTypes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className={`w-14 h-14 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Consultation Plans */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex flex-wrap justify-center mb-8">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-3 rounded-lg font-medium text-sm ml-4 transition-colors ${
                activeTab === 'individual'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              مشاوره خصوصی
            </button>
            <button
              onClick={() => setActiveTab('group')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-colors ${
                activeTab === 'group'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              جلسات گروهی
            </button>
          </div>

          {activeTab === 'individual' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Basic Plan */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                <h3 className="text-xl font-bold mb-2">پلن پایه</h3>
                <div className="text-3xl font-bold text-primary-500 mb-4">۱۵۰,۰۰۰ تومان</div>
                <p className="text-gray-600 mb-6">مناسب برای رفع اشکالات ساده و مشاوره کوتاه</p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>۱ ساعت مشاوره آنلاین</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>چت متنی با مشاور</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>پشتیبانی ایمیلی</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  رزرو مشاوره
                </button>
              </div>

              {/* Standard Plan */}
              <div className="border-2 border-primary-500 rounded-xl p-6 relative bg-white shadow-md">
                <div className="absolute -top-3 right-6 bg-primary-500 text-white text-xs py-1 px-3 rounded-full">
                  پیشنهاد ویژه
                </div>
                <h3 className="text-xl font-bold mb-2">پلن استاندارد</h3>
                <div className="text-3xl font-bold text-primary-500 mb-4">۳۵۰,۰۰۰ تومان</div>
                <p className="text-gray-600 mb-6">مناسب برای رفع اشکالات پروژه و مشاوره تخصصی</p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>۳ ساعت مشاوره آنلاین</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>جلسات ویدیویی</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>بررسی کد و رفع اشکال</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>پشتیبانی ۷ روز هفته</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  رزرو مشاوره
                </button>
              </div>

              {/* Premium Plan */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                <h3 className="text-xl font-bold mb-2">پلن پیشرفته</h3>
                <div className="text-3xl font-bold text-primary-500 mb-4">۶۵۰,۰۰۰ تومان</div>
                <p className="text-gray-600 mb-6">مناسب برای پروژه‌های پیچیده و مشاوره حرفه‌ای</p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>۶ ساعت مشاوره آنلاین</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>جلسات ویدیویی نامحدود</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>بررسی و اصلاح کل پروژه</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>مشاوره با اساتید ارشد</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>پشتیبانی ۲۴/۷</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  رزرو مشاوره
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Group Session Plan */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                <h3 className="text-xl font-bold mb-2">جلسات گروهی هفتگی</h3>
                <div className="text-3xl font-bold text-primary-500 mb-4">۸۰,۰۰۰ تومان</div>
                <p className="text-gray-600 mb-6">شرکت در جلسات گروهی هفتگی رفع اشکال</p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>۲ ساعت جلسه گروهی هفتگی</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>طرح سوالات در گروه</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>یادگیری از سوالات دیگران</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  ثبت‌نام در جلسات
                </button>
              </div>

              {/* Intensive Group Plan */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                <h3 className="text-xl font-bold mb-2">دوره فشرده گروهی</h3>
                <div className="text-3xl font-bold text-primary-500 mb-4">۲۵۰,۰۰۰ تومان</div>
                <p className="text-gray-600 mb-6">دوره فشرده یک ماهه با جلسات گروهی منظم</p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>۸ جلسه گروهی (۲ جلسه در هفته)</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>پروژه‌های عملی و رفع اشکال</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>گروه پشتیبانی اختصاصی</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 ml-2" />
                    <span>گواهی شرکت در دوره</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  ثبت‌نام در دوره
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">نظرات کاربران</h3>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm mb-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold ml-4">
                  {testimonials[activeTestimonial].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeTestimonial].role}</p>
                </div>
                <div className="mr-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`${
                        i < testimonials[activeTestimonial].rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{testimonials[activeTestimonial].comment}</p>
            </motion.div>

            <div className="flex justify-center space-x-2 space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeTestimonial === index ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                  aria-label={`نظر شماره ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">آماده دریافت مشاوره هستید؟</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            تیم متخصصان تاپ‌لرن آماده پاسخگویی به سوالات شما و کمک به رفع مشکلات برنامه‌نویسی شما هستند.
            همین حالا جلسه مشاوره خود را رزرو کنید.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn btn-primary">
              رزرو جلسه مشاوره
            </button>
            <button   onClick={() => (window.location.href = "/toplearn-home/faq")} className="btn btn-outline">
              سوالات متداول
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Consultation; 