import { Link } from 'react-router-dom';
import { FaInstagram, FaTelegram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-primary-500 pr-3">درباره تاپ لرن</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              تاپ لرن یک پلتفرم آموزشی آنلاین است که با هدف ارائه آموزش‌های با کیفیت در حوزه برنامه‌نویسی و طراحی وب ایجاد شده است. ما به شما کمک می‌کنیم تا با کمترین هزینه، مهارت‌های حرفه‌ای کسب کنید.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaTelegram size={24} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaYoutube size={24} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-primary-500 pr-3">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">صفحه اصلی</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-primary-500 transition-colors">دوره های آموزشی</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary-500 transition-colors">وبلاگ</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">درباره ما</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">تماس با ما</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-primary-500 pr-3">خدمات</h3>
            <ul className="space-y-2">
              <li><Link to="/vip" className="text-gray-400 hover:text-primary-500 transition-colors">عضویت ویژه</Link></li>
              <li><Link to="/jobs" className="text-gray-400 hover:text-primary-500 transition-colors">فرصت های شغلی</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-primary-500 transition-colors">پشتیبانی و رفع اشکال</Link></li>
              <li><Link to="/cooperation" className="text-gray-400 hover:text-primary-500 transition-colors">همکاری با تاپ لرن</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary-500 transition-colors">سوالات متداول</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-primary-500 pr-3">تماس با ما</h3>
            <div className="space-y-4 text-gray-400">
              <p>ایران، تهران، خیابان ولیعصر</p>
              <p>ایمیل: info@toplearn.com</p>
              <p>تلفن: 021-12345678</p>
              <div className="pt-4">
                <Link to="/contact-form" className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-md transition-colors">ارسال پیام</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} برای تاپ لرن تمامی حقوق محفوظ است.</p>
            <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-500 text-sm hover:text-primary-500 transition-colors">قوانین و مقررات</Link>
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-primary-500 transition-colors">حریم خصوصی</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;