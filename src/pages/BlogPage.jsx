import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaSearch, FaTags } from 'react-icons/fa';

export const sampleBlogPosts = [
  {
    id: '1',
    title: 'معرفی React 18 و ویژگی‌های جدید آن',
    excerpt: 'در این مقاله به بررسی ویژگی‌های جدید React 18 و تغییرات آن نسبت به نسخه‌های قبلی می‌پردازیم...',
    author: 'علی محمدی',
    date: '۱۴۰۲/۰۲/۱۵',
    image: "https://rashed.ir/wp-content/uploads/2023/11/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-react.js.jpg",
    category: 'frontend',
    tags: ['React', 'JavaScript', 'Frontend'],
    fullContent: `
      <p>در این مقاله به بررسی عمیق ویژگی‌های جدید React 18 و تغییرات مهمی که این نسخه با خود به همراه آورده است، می‌پردازیم. React 18 با هدف بهبود عملکرد و تجربه توسعه‌دهنده منتشر شده است.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">ویژگی‌های کلیدی React 18:</h3>
      <ul>
        <li><strong>Concurrent Features:</strong> امکان رندر کردن چندین نسخه از UI به صورت همزمان.</li>
        <li><strong>Automatic Batching:</strong> بهینه‌سازی رندرینگ با گروه‌بندی خودکار به‌روزرسانی‌های حالت.</li>
        <li><strong>Transitions:</strong> ابزار جدیدی برای تفکیک به‌روزرسانی‌های فوری و انتقالی.</li>
        <li><strong>Suspense on the Server:</strong> بهبود تجربه کاربری با امکان استریم کردن HTML از سرور.</li>
      </ul>
      <p>این تغییرات به توسعه‌دهندگان کمک می‌کند تا برنامه‌های React سریع‌تر و واکنش‌گراتری بسازند.</p>
    `
  },
  {
    id: '2',
    title: 'آشنایی با Node.js و Express',
    excerpt: 'در این مقاله به معرفی Node.js و فریمورک Express و کاربردهای آن‌ها در توسعه وب می‌پردازیم...',
    author: 'رضا احمدی',
    date: '۱۴۰۲/۰۲/۱۰',
    image: "https://toshan.net/wp-content/uploads/2020/05/nodejs.jpeg",
    category: 'backend',
    tags: ['Node.js', 'Express', 'Backend'],
    fullContent: `
      <p>Node.js یک محیط زمان اجرای جاوااسکریپت سمت سرور است که به توسعه‌دهندگان اجازه می‌دهد تا جاوااسکریپت را خارج از مرورگر اجرا کنند. Express.js یک فریم‌ورک وب مینیمال و انعطاف‌پذیر برای Node.js است که مجموعه‌ای قدرتمند از ویژگی‌ها را برای توسعه برنامه‌های وب و API فراهم می‌کند.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">کاربردهای Node.js و Express:</h3>
      <ul>
        <li>ساخت APIهای RESTful</li>
        <li>توسعه برنامه‌های وب Real-time (مانند چت)</li>
        <li>ساخت میکروسرویس‌ها</li>
        <li>اسکریپت‌نویسی سمت سرور</li>
      </ul>
      <p>ترکیب این دو ابزار، یک پلتفرم قدرتمند برای ساخت برنامه‌های مقیاس‌پذیر و با کارایی بالا ارائه می‌دهد.</p>
    `
  },
  {
    id: '3',
    title: 'آموزش Tailwind CSS از صفر تا صد',
    excerpt: 'در این مقاله به آموزش کامل Tailwind CSS و نحوه استفاده از آن در پروژه‌های وب می‌پردازیم...',
    author: 'مریم حسینی',
    date: '۱۴۰۲/۰۲/۰۵',
    image: "https://www.karlancer.com/blog/wp-content/uploads/2024/07/1715021638881-768x460.jpg",
    category: 'frontend',
    tags: ['CSS', 'Tailwind', 'Frontend'],
    fullContent: `
      <p>Tailwind CSS یک فریم‌ورک CSS Utility-First است که به شما امکان می‌دهد با استفاده از کلاس‌های کمکی (utility classes) به سرعت و بدون نیاز به نوشتن CSS سفارشی، رابط کاربری زیبا طراحی کنید.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">مزایای استفاده از Tailwind CSS:</h3>
      <ul>
        <li><strong>سرعت توسعه بالا:</strong> با کلاس‌های آماده، نیاز به نوشتن CSS از پایه کاهش می‌یابد.</li>
        <li><strong>قابلیت شخصی‌سازی بالا:</strong> می‌توانید Tailwind را به طور کامل مطابق با نیازهای پروژه خود تنظیم کنید.</li>
        <li><strong>اندازه فایل نهایی کوچک:</strong> فقط CSS مورد نیاز شما در خروجی نهایی قرار می‌گیرد.</li>
        <li><strong>عدم تداخل کلاس‌ها:</strong> به دلیل استفاده از کلاس‌های تک‌منظوره، تداخل نام کلاس‌ها به حداقل می‌رسد.</li>
      </ul>
      <p>این فریم‌ورک برای توسعه‌دهندگانی که به دنبال سرعت و انعطاف‌پذیری در طراحی UI هستند، بسیار مناسب است.</p>
    `
  },
  {
    id: '4',
    title: 'معرفی هوش مصنوعی و کاربردهای آن',
    excerpt: 'در این مقاله به معرفی هوش مصنوعی و کاربردهای آن در صنایع مختلف می‌پردازیم...',
    author: 'سارا کریمی',
    date: '۱۴۰۲/۰۲/۰۱',
    image: "https://shamizanjani.ir/wp-content/uploads/2020/05/05-AI--640x480.jpg",
    category: 'ai',
    tags: ['AI', 'Machine Learning', 'Data Science'],
    fullContent: `
      <p>هوش مصنوعی (AI) شاخه‌ای از علوم کامپیوتر است که به توسعه ماشین‌هایی می‌پردازد که می‌توانند مانند انسان فکر کنند، یاد بگیرند و تصمیم بگیرند. این فناوری در حال حاضر در بسیاری از جنبه‌های زندگی ما حضور دارد.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">کاربردهای رایج هوش مصنوعی:</h3>
      <ul>
        <li>تشخیص چهره و صدا</li>
        <li>خودروهای خودران</li>
        <li>سیستم‌های توصیه‌گر (مانند نتفلیکس و آمازون)</li>
        <li>پزشکی و تشخیص بیماری</li>
        <li>بازی‌های کامپیوتری</li>
      </ul>
      <p>آینده هوش مصنوعی بسیار روشن است و انتظار می‌رود که تأثیرات گسترده‌تری بر صنایع مختلف داشته باشد.</p>
    `
  },
  {
    id: '5',
    title: 'آشنایی با Docker و کانتینرها',
    excerpt: 'در این مقاله به معرفی Docker و مفهوم کانتینرها و نحوه استفاده از آن‌ها می‌پردازیم...',
    author: 'امیر رضایی',
    date: '۱۴۰۲/۰۱/۲۵',
    image: "https://static.roocket.ir/images/cover/2022/3/5/Vgvs8x7NuDYduPQO0unTb7Lfq2qo5y5ZrnhnBM9t.jpg",
    category: 'devops',
    tags: ['Docker', 'DevOps', 'Container'],
    fullContent: `
      <p>Docker یک پلتفرم متن‌باز برای توسعه، ارسال و اجرای برنامه‌ها با استفاده از کانتینرها است. کانتینرها بسته‌های نرم‌افزاری سبک، قابل حمل و مستقل هستند که شامل تمام چیزهایی که یک برنامه برای اجرا نیاز دارد، می‌شوند.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">مزایای Docker:</h3>
      <ul>
        <li><strong>قابلیت حمل:</strong> برنامه در هر محیطی که Docker نصب باشد، به یک شکل اجرا می‌شود.</li>
        <li><strong>ایزوله‌سازی:</strong> کانتینرها از یکدیگر و از سیستم میزبان ایزوله هستند.</li>
        <li><strong>استفاده بهینه از منابع:</strong> کانتینرها سبک‌تر از ماشین‌های مجازی هستند.</li>
        <li><strong>توسعه و استقرار سریع‌تر:</strong> فرآیند توسعه و استقرار را ساده‌تر می‌کند.</li>
      </ul>
      <p>Docker به یکی از ابزارهای ضروری در اکوسیستم DevOps تبدیل شده است.</p>
    `
  },
  {
    id: '6',
    title: 'آموزش Git و GitHub برای مبتدیان',
    excerpt: 'در این مقاله به آموزش مقدماتی Git و GitHub برای مبتدیان می‌پردازیم...',
    author: 'حسن محمودی',
    date: '۱۴۰۲/۰۱/۲۰',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_m07lJs4wrk1r8I1eCP673aaa7zqUhvxarw&s",
    category: 'tools',
    tags: ['Git', 'GitHub', 'Version Control'],
    fullContent: `
      <p>Git یک سیستم کنترل نسخه توزیع شده (DVCS) است که به توسعه‌دهندگان کمک می‌کند تا تغییرات کد خود را ردیابی کرده و به صورت تیمی روی پروژه‌ها کار کنند. GitHub یک پلتفرم مبتنی بر وب است که از Git برای میزبانی مخازن کد استفاده می‌کند و امکان همکاری و مدیریت پروژه را فراهم می‌آورد.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-gray-800">مفاهیم اصلی Git:</h3>
      <ul>
        <li><strong>Repository (مخزن):</strong> پوشه‌ای که Git تغییرات آن را ردیابی می‌کند.</li>
        <li><strong>Commit (کامییت):</strong> یک نقطه ذخیره در تاریخچه پروژه.</li>
        <li><strong>Branch (شاخه):</strong> یک خط مستقل از توسعه.</li>
        <li><strong>Merge (ادغام):</strong> ترکیب تغییرات از یک شاخه به شاخه دیگر.</li>
      </ul>
      <p>یادگیری Git و GitHub برای هر توسعه‌دهنده‌ای ضروری است.</p>
    `
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

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

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
    <div className="container mx-auto py-8 px-4 font-inter">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          <span className="bg-clip-text  font-bold text-gray-800">
            وبلاگ تاپ لرن
          </span>
        </h1>
        <p className="text-gray-600 text-lg">
          آخرین مقالات و آموزش‌های تخصصی در حوزه برنامه‌نویسی و طراحی وب
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
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
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </motion.div>

          <motion.div
            className="flex overflow-x-auto pb-2 mb-6 lg:hidden scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap py-2 px-4 rounded-full text-sm ml-2 transition-colors duration-200 shadow-sm
                  ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

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
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl"
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found`; }}
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <Link
                        to={`/blog/${post.id}`}
                        className="block hover:text-blue-600 transition-colors duration-200"
                      >
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                      </Link>
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center ml-4">
                          <FaUser className="ml-1 text-blue-500" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="ml-1 text-green-500" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        <FaTags className="text-purple-500 ml-2" />
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center px-5 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full shadow-lg   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        ادامه مطلب
                        <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
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
              <h3 className="text-xl font-medium mb-2 text-gray-800">هیچ مقاله‌ای یافت نشد!</h3>
              <p className="text-gray-600">لطفا معیارهای جستجوی خود را تغییر دهید.</p>
            </motion.div>
          )}
        </div>

        <motion.div
          className="lg:w-1/4 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h3 className="font-bold text-xl mb-4 text-gray-800 border-r-4 border-blue-500 pr-2">دسته بندی ها</h3>
            <ul className="space-y-3">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-right py-2 px-3 rounded-lg transition-colors duration-200
                        ${selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700 font-semibold'
                        : 'hover:bg-gray-100 text-gray-700'
                      }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h3 className="font-bold text-xl mb-4 text-gray-800 border-r-4 border-purple-500 pr-2">مقالات محبوب</h3>
            <ul className="space-y-5">
              {sampleBlogPosts.slice(0, 3).map(post => (
                <li key={post.id} className="flex items-start">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-lg ml-3 shadow-sm"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/80x80/CCCCCC/FFFFFF?text=Img`; }}
                  />
                  <div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 line-clamp-2"
                    >
                      {post.title}
                    </Link>
                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                      <FaCalendarAlt className="ml-1 text-gray-400" />
                      {post.date}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h3 className="font-bold text-xl mb-4 text-gray-800 border-r-4 border-green-500 pr-2">برچسب ها</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(sampleBlogPosts.flatMap(post => post.tags))).map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 hover:bg-blue-100 hover:text-blue-700 cursor-pointer text-gray-700 text-sm px-4 py-1 rounded-full shadow-sm transition-colors duration-200"
                  onClick={() => setSearchQuery(tag)}
                >
                  #{tag}
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
