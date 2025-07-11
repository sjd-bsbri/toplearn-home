import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiClock, FiFilter, FiSearch } from 'react-icons/fi';

const jobCategories = [
  { id: 'all', name: 'همه' },
  { id: 'frontend', name: 'فرانت‌اند' },
  { id: 'backend', name: 'بک‌اند' },
  { id: 'fullstack', name: 'فول‌استک' },
  { id: 'mobile', name: 'موبایل' },
  { id: 'ui', name: 'طراحی UI/UX' },
];

const jobListings = [
  {
    id: 1,
    title: 'توسعه‌دهنده فرانت‌اند React',
    company: 'شرکت تاپ‌لرن',
    location: 'تهران',
    type: 'تمام وقت',
    salary: '۱۵ تا ۲۵ میلیون تومان',
    postedDate: '۲ روز پیش',
    category: 'frontend',
    logo: 'https://dummyimage.com/300x200/000000/ffffff&text=REACT',
  },
  {
    id: 2,
    title: 'برنامه‌نویس بک‌اند Node.js',
    company: 'استارتاپ نوآور',
    location: 'اصفهان',
    type: 'دورکاری',
    salary: '۲۰ تا ۳۰ میلیون تومان',
    postedDate: '۱ هفته پیش',
    category: 'backend',
    logo: 'https://dummyimage.com/300x200/000000/ffffff&text=NODE',
  },
  {
    id: 3,
    title: 'توسعه‌دهنده فول‌استک MERN',
    company: 'گروه فناوری آینده',
    location: 'مشهد',
    type: 'تمام وقت',
    salary: '۲۵ تا ۳۵ میلیون تومان',
    postedDate: '۳ روز پیش',
    category: 'fullstack',
    logo: 'https://dummyimage.com/300x200/000000/ffffff&text=MERN',
  },
  {
    id: 4,
    title: 'طراح رابط کاربری UI/UX',
    company: 'آژانس طراحی دیجیتال',
    location: 'تهران',
    type: 'پاره وقت',
    salary: '۱۲ تا ۲۰ میلیون تومان',
    postedDate: '۱ روز پیش',
    category: 'ui',
    logo: 'https://dummyimage.com/300x200/000000/ffffff&text=UI/UX',
  },
  {
    id: 5,
    title: 'توسعه‌دهنده React Native',
    company: 'شرکت نرم‌افزاری موبایل',
    location: 'شیراز',
    type: 'دورکاری',
    salary: '۱۸ تا ۲۸ میلیون تومان',
    postedDate: '۵ روز پیش',
    category: 'mobile',
    logo: 'https://dummyimage.com/300x200/000000/ffffff&text=Native',
  },
];

const JobOpportunities = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredJobs = jobListings.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">فرصت‌های شغلی</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            جدیدترین موقعیت‌های شغلی در حوزه برنامه‌نویسی و طراحی را در اینجا مشاهده کنید
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="جستجوی عنوان شغلی یا شرکت..."
                className="input pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <FiFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="input appearance-none pr-10"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {jobCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-md bg-primary-50 flex items-center justify-center ml-4">
                      <img src={job.logo} alt={job.company} className="w-10 h-10 rounded" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{job.title}</h3>
                      <p className="text-gray-600 text-sm">{job.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 md:mr-auto mt-4 md:mt-0">
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="ml-1 text-primary-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiBriefcase className="ml-1 text-primary-500" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiClock className="ml-1 text-primary-500" />
                      <span>{job.postedDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <div className="font-bold text-primary-600 mb-3 sm:mb-0">
                    {job.salary}
                  </div>
                  <button className="btn btn-primary">مشاهده و درخواست</button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-10 bg-white rounded-lg">
              <p className="text-gray-500">هیچ موقعیت شغلی با این مشخصات یافت نشد.</p>
            </div>
          )}
        </div>
        
        <div className="mt-8 text-center">
          <button className="btn btn-outline">
            مشاهده همه فرصت‌های شغلی
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobOpportunities; 