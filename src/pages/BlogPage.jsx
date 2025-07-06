import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaSearch, FaTags } from 'react-icons/fa';
import slideImg1 from '../images/slideImg1.jpg';
import slideImg2 from '../images/slideImg2.jpg';
import slideImg3 from '../images/slideImg3.jpg';
import slideImg4 from '../images/slideImg4.jpg';
import slideImg5 from '../images/slideImg5.jpg';
// Sample blog posts data
const sampleBlogPosts = [
  {
    id: 1,
    title: 'معرفی React 18 و ویژگی‌های جدید آن',
    excerpt: 'در این مقاله به بررسی ویژگی‌های جدید React 18 و تغییرات آن نسبت به نسخه‌های قبلی می‌پردازیم...',
    author: 'علی محمدی',
    date: '۱۴۰۲/۰۲/۱۵',
    image: slideImg1,
    category: 'frontend',
    tags: ['React', 'JavaScript', 'Frontend']
  },
  {
    id: 2,
    title: 'آشنایی با Node.js و Express',
    excerpt: 'در این مقاله به معرفی Node.js و فریمورک Express و کاربردهای آن‌ها در توسعه وب می‌پردازیم...',
    author: 'رضا احمدی',
    date: '۱۴۰۲/۰۲/۱۰',
    image: slideImg2,
    category: 'backend',
    tags: ['Node.js', 'Express', 'Backend']
  },
  {
    id: 3,
    title: 'آموزش Tailwind CSS از صفر تا صد',
    excerpt: 'در این مقاله به آموزش کامل Tailwind CSS و نحوه استفاده از آن در پروژه‌های وب می‌پردازیم...',
    author: 'مریم حسینی',
    date: '۱۴۰۲/۰۲/۰۵',
    image: slideImg3,
    category: 'frontend',
    tags: ['CSS', 'Tailwind', 'Frontend']
  },
  {
    id: 4,
    title: 'معرفی هوش مصنوعی و کاربردهای آن',
    excerpt: 'در این مقاله به معرفی هوش مصنوعی و کاربردهای آن در صنایع مختلف می‌پردازیم...',
    author: 'سارا کریمی',
    date: '۱۴۰۲/۰۲/۰۱',
    image: slideImg4,
    category: 'ai',
    tags: ['AI', 'Machine Learning', 'Data Science']
  },
  {
    id: 5,
    title: 'آشنایی با Docker و کانتینرها',
    excerpt: 'در این مقاله به معرفی Docker و مفهوم کانتینرها و نحوه استفاده از آن‌ها می‌پردازیم...',
    author: 'امیر رضایی',
    date: '۱۴۰۲/۰۱/۲۵',
    image: slideImg5,
    category: 'devops',
    tags: ['Docker', 'DevOps', 'Container']
  },
  {
    id: 6,
    title: 'آموزش Git و GitHub برای مبتدیان',
    excerpt: 'در این مقاله به آموزش مقدماتی Git و GitHub برای مبتدیان می‌پردازیم...',
    author: 'حسن محمودی',
    date: '۱۴۰۲/۰۱/۲۰',
    image: slideImg1,
    category: 'tools',
    tags: ['Git', 'GitHub', 'Version Control']
  }
];

const categories = [
  { id: 'all', name: 'همه مقالات' },
  { id: 'frontend', name: 'فرانت‌اند' },
  { id: 'backend', name: 'بک‌اند' },
  { id: 'devops', name: 'دواپس' },
  { id: 'ai', name: 'هوش مصنوعی' },
  { id: 'tools', name: 'ابزارها' }
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    let filtered = [...sampleBlogPosts];

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="container py-8">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-4">وبلاگ تاپ لرن</h1>
        <p className="text-gray-600">
          آخرین مقالات و آموزش‌های تخصصی در حوزه برنامه‌نویسی و طراحی وب
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          {/* Search Bar */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو در مقالات..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </motion.div>

          {/* Category Filter - Mobile */}
          <motion.div
            className="flex overflow-x-auto pb-2 mb-6 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap py-1 px-3 rounded-md text-sm ml-2 transition-colors ${selectedCategory === category.id
                    ? 'bg-primary-100 text-primary-600 font-medium'
                    : 'bg-gray-100 hover:bg-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {filteredPosts.map(post => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <Link
                        to={`/blog/${post.id}`}
                        className="block hover:text-primary-500 transition-colors"
                      >
                        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      </Link>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>

                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center ml-4">
                          <FaUser className="ml-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="ml-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <FaTags className="text-gray-400 ml-2" />
                        <div className="flex flex-wrap">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded ml-2 mb-2"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-block mt-4 text-primary-500 hover:text-primary-600 transition-colors"
                      >
                        ادامه مطلب...
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="bg-white rounded-lg shadow-md p-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h3 className="text-xl font-medium mb-2">هیچ مقاله‌ای یافت نشد!</h3>
              <p className="text-gray-600">لطفا معیارهای جستجوی خود را تغییر دهید.</p>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <motion.div
          className="lg:w-1/4 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {/* Categories */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-500 pr-2">دسته بندی ها</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-right py-1 px-2 rounded-md transition-colors ${selectedCategory === category.id
                        ? 'bg-primary-100 text-primary-600 font-medium'
                        : 'hover:bg-gray-100'
                      }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Posts */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-500 pr-2">مقالات محبوب</h3>
            <ul className="space-y-4">
              {sampleBlogPosts.slice(0, 3).map(post => (
                <li key={post.id} className="flex items-start">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded ml-2"
                  />
                  <div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="font-medium hover:text-primary-500 transition-colors line-clamp-2"
                    >
                      {post.title}
                    </Link>
                    <div className="text-xs text-gray-500 mt-1">{post.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Cloud */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-500 pr-2">برچسب ها</h3>
            <div className="flex flex-wrap">
              {Array.from(new Set(sampleBlogPosts.flatMap(post => post.tags))).map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 hover:bg-primary-100 hover:text-primary-600 cursor-pointer text-gray-600 text-sm px-3 py-1 rounded ml-2 mb-2 transition-colors"
                  onClick={() => setSearchQuery(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;