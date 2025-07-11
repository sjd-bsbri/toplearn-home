import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiTrendingUp, FiCheck } from 'react-icons/fi';

const collaborationFeatures = [
  {
    id: 1,
    title: 'تدریس در تاپ‌لرن',
    description: 'با تجربه و دانش خود به جامعه برنامه‌نویسی کمک کنید و درآمد کسب کنید.',
    icon: <FiAward className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'تولید محتوای آموزشی',
    description: 'مقالات و محتوای آموزشی تولید کنید و به اشتراک بگذارید.',
    icon: <FiTrendingUp className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'همکاری در پروژه‌ها',
    description: 'در پروژه‌های واقعی همکاری کنید و تجربه عملی کسب کنید.',
    icon: <FiUsers className="w-6 h-6" />,
  },
];

const benefitsList = [
  'دسترسی به جامعه بزرگ برنامه‌نویسان',
  'کسب درآمد از تدریس و تولید محتوا',
  'افزایش رزومه و اعتبار حرفه‌ای',
  'دسترسی به منابع آموزشی رایگان',
  'شبکه‌سازی با متخصصان صنعت',
  'امکان شرکت در رویدادهای آنلاین و حضوری',
];

const Collaboration = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                همکاری با تاپ‌لرن
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                تاپ‌لرن یک جامعه از توسعه‌دهندگان و مدرسان با استعداد است که به اشتراک‌گذاری دانش و تجربیات خود اعتقاد دارند. 
                به جمع ما بپیوندید و در رشد جامعه برنامه‌نویسی ایران سهیم باشید.
              </p>

              <div className="grid gap-6 mb-8">
                {collaborationFeatures.map((feature) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: feature.id * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center ml-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-gray-800 mb-4">مزایای همکاری با تاپ‌لرن</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefitsList.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <FiCheck className="text-secondary-500 ml-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button  className="btn btn-primary">
                  درخواست همکاری
                </button>
                <button className="btn btn-outline mr-4">
                  اطلاعات بیشتر
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-100 rounded-full blur-xl z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-100 rounded-full blur-xl z-0"></div>
              
              <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white">
                <img
                  src="https://cdn.tarhpik.com/5_Preview/1403/6/4/122401/Photo-of-business-managers-and-business-colleagues-shaking-hands-after-the-meeting-400.webp"
                  alt="همکاری با تاپ‌لرن"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-5 left-10 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl font-bold ml-3">
                    ۵۰+
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">مدرس فعال</p>
                    <p className="font-bold text-gray-800">در پلتفرم تاپ‌لرن</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration; 