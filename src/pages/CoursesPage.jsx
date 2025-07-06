import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch } from 'react-icons/fa';
import CourseCard from '../components/courses/CourseCard';
import gridImage9 from '../images/gridImage9.jpg';


// Sample course data (in a real app, this would come from an API)
const sampleCourses = [
  {
    id: 1,
    title: 'آموزش ساخت سایت با تیلویند',
    instructor: 'باصبری',
    duration: '27:23:34',
    price: 'رایگان',
    image: gridImage9,
    isFree: true,
    category: 'web',
  },
  {
    id: 2,
    title: 'آموزش React.js پیشرفته',
    instructor: 'علی محمدی',
    duration: '42:15:20',
    price: '۲۵۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    category: 'web',
  },
  {
    id: 3,
    title: 'آموزش Node.js و Express',
    instructor: 'رضا احمدی',
    duration: '35:45:12',
    price: '۳۵۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    category: 'web',
  },
  {
    id: 4,
    title: 'آموزش پایتون از صفر تا صد',
    instructor: 'مریم حسینی',
    duration: '50:30:45',
    price: '۴۰۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    category: 'programming',
  },
  {
    id: 5,
    title: 'آموزش طراحی UI/UX',
    instructor: 'سارا کریمی',
    duration: '28:15:30',
    price: '۳۰۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    category: 'design',
  },
  {
    id: 6,
    title: 'آموزش جاوا اسکریپت مقدماتی',
    instructor: 'امیر رضایی',
    duration: '20:45:10',
    price: 'رایگان',
    image: gridImage9,
    isFree: true,
    category: 'web',
  },
  {
    id: 7,
    title: 'آموزش Git و GitHub',
    instructor: 'حسن محمودی',
    duration: '15:20:45',
    price: 'رایگان',
    image: gridImage9,
    isFree: true,
    category: 'tools',
  },
  {
    id: 8,
    title: 'آموزش Laravel پیشرفته',
    instructor: 'علی رضایی',
    duration: '45:30:15',
    price: '۴۵۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    category: 'web',
  },
  {
    id: 9,
    title: 'آموزش SQL و پایگاه داده',
    instructor: 'محمد علوی',
    duration: '32:15:40',
    price: '۳۲۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    category: 'database',
  },
  {
    id: 10,
    title: 'آموزش Docker و Kubernetes',
    instructor: 'امین رضایی',
    duration: '38:45:20',
    price: '۴۸۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    category: 'devops',
  },
  {
    id: 11,
    title: 'آموزش هوش مصنوعی و یادگیری ماشین',
    instructor: 'فاطمه محمدی',
    duration: '55:30:15',
    price: '۵۵۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    category: 'ai',
  },
  {
    id: 12,
    title: 'آموزش برنامه نویسی اندروید',
    instructor: 'علی کریمی',
    duration: '48:20:30',
    price: '۴۲۰,۰۰۰ تومان',
    image: gridImage9,
    isFree: false,
    category: 'mobile',
  },
];

const categories = [
  { id: 'all', name: 'همه دوره ها' },
  { id: 'web', name: 'طراحی وب' },
  { id: 'programming', name: 'برنامه نویسی' },
  { id: 'mobile', name: 'موبایل' },
  { id: 'design', name: 'طراحی' },
  { id: 'database', name: 'پایگاه داده' },
  { id: 'devops', name: 'دواپس' },
  { id: 'ai', name: 'هوش مصنوعی' },
  { id: 'tools', name: 'ابزارها' },
];

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all'); // 'all', 'free', 'paid'
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    let filtered = [...sampleCourses];
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply price filter
    if (priceFilter === 'free') {
      filtered = filtered.filter(course => course.isFree);
    } else if (priceFilter === 'paid') {
      filtered = filtered.filter(course => !course.isFree);
    }
    
    setFilteredCourses(filtered);
  }, [selectedCategory, searchQuery, priceFilter]);

  return (
    <div className="container py-8">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-4">دوره های آموزشی</h1>
        <p className="text-gray-600">
          مجموعه کاملی از دوره های آموزشی برای یادگیری مهارت های جدید و ورود به بازار کار
        </p>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters - Desktop */}
        <motion.div 
          className="hidden lg:block w-64 bg-white rounded-lg shadow-md p-4 h-fit"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-500 pr-2">دسته بندی ها</h3>
          <ul className="space-y-2 mb-6">
            {categories.map(category => (
              <li key={category.id}>
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-right py-1 px-2 rounded-md transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-primary-100 text-primary-600 font-medium' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
          
          <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-500 pr-2">فیلتر قیمت</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setPriceFilter('all')}
                className={`w-full text-right py-1 px-2 rounded-md transition-colors ${
                  priceFilter === 'all' 
                    ? 'bg-primary-100 text-primary-600 font-medium' 
                    : 'hover:bg-gray-100'
                }`}
              >
                همه دوره ها
              </button>
            </li>
            <li>
              <button
                onClick={() => setPriceFilter('free')}
                className={`w-full text-right py-1 px-2 rounded-md transition-colors ${
                  priceFilter === 'free' 
                    ? 'bg-primary-100 text-primary-600 font-medium' 
                    : 'hover:bg-gray-100'
                }`}
              >
                دوره های رایگان
              </button>
            </li>
            <li>
              <button
                onClick={() => setPriceFilter('paid')}
                className={`w-full text-right py-1 px-2 rounded-md transition-colors ${
                  priceFilter === 'paid' 
                    ? 'bg-primary-100 text-primary-600 font-medium' 
                    : 'hover:bg-gray-100'
                }`}
              >
                دوره های غیر رایگان
              </button>
            </li>
          </ul>
        </motion.div>
        
        <div className="flex-1">
          {/* Search and Filter Bar */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="جستجوی دوره..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <button
              className="lg:hidden btn btn-outline flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
              فیلترها
            </button>
          </motion.div>
          
          {/* Mobile Filters */}
          {showFilters && (
            <motion.div 
              className="lg:hidden bg-white rounded-lg shadow-md p-4 mb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-500 pr-2">دسته بندی ها</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`py-1 px-3 rounded-md text-sm transition-colors ${
                      selectedCategory === category.id 
                        ? 'bg-primary-100 text-primary-600 font-medium' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-500 pr-2">فیلتر قیمت</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setPriceFilter('all')}
                  className={`py-1 px-3 rounded-md text-sm transition-colors ${
                    priceFilter === 'all' 
                      ? 'bg-primary-100 text-primary-600 font-medium' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  همه
                </button>
                <button
                  onClick={() => setPriceFilter('free')}
                  className={`py-1 px-3 rounded-md text-sm transition-colors ${
                    priceFilter === 'free' 
                      ? 'bg-primary-100 text-primary-600 font-medium' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  رایگان
                </button>
                <button
                  onClick={() => setPriceFilter('paid')}
                  className={`py-1 px-3 rounded-md text-sm transition-colors ${
                    priceFilter === 'paid' 
                      ? 'bg-primary-100 text-primary-600 font-medium' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  غیر رایگان
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-2">هیچ دوره‌ای یافت نشد!</h3>
              <p className="text-gray-600">لطفا معیارهای جستجوی خود را تغییر دهید.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;