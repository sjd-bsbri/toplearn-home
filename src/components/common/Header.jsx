import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../../assets/images/logo.png';
import student from '../../assets/images/stat-student.png';
import teacher from '../../assets/images/stat-teacher.png';
import time from '../../assets/images/stat-time.png';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[url('@assets/images/headerImage.jpg')] bg-cover">
      <section className="container px-5 flex justify-start py-3 items-center text-white lg:justify-between">
        <div className="flex items-center space-x-3 space-x-reverse divide-x-2 divide-slate-500">
          <Link to="/">
            <img src={logo} alt="TopLearn" className="w-20 h-16" />
            {/* <img src="/src/assets/images/logo.png" alt="TopLearn" className="w-20 h-16" /> */}
          </Link>
          <div className="pe-3 lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <FaBars className="text-xl" />
          </div>
        </div>
        <div className="px-4 lg:hidden cursor-pointer">
          <FaSearch className="text-xl" />
        </div>

        {/* Desktop Navigation */}
        <nav className="space-x-4 space-x-reverse hidden lg:flex">
          <Link to="/courses" className="hover:text-primary-300 transition-colors">آخرین دوره ها</Link>
          <Link to="/discounts" className="hover:text-primary-300 transition-colors">تخفیفات روزانه</Link>
          <Link to="/blog" className="hover:text-primary-300 transition-colors">بلاگ</Link>
          <Link to="/jobs" className="hover:text-primary-300 transition-colors">فرصت های شغلی</Link>
          <Link to="/cooperation" className="hover:text-primary-300 transition-colors">همکاری با تاپلرن</Link>
          <Link to="/support" className="hover:text-primary-300 transition-colors">مشاوره و رفع اشکال</Link>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-64 bg-gray-900 p-5"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-xl font-bold">منو</h2>
                <button
                  className="text-white text-xl"
                  onClick={toggleMobileMenu}
                >
                  ✕
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                <Link to="/courses" className="text-white hover:text-primary-300 transition-colors" onClick={toggleMobileMenu}>آخرین دوره ها</Link>
                <Link to="/discounts" className="text-white hover:text-primary-300 transition-colors" onClick={toggleMobileMenu}>تخفیفات روزانه</Link>
                <Link to="/blog" className="text-white hover:text-primary-300 transition-colors" onClick={toggleMobileMenu}>بلاگ</Link>
                <Link to="/jobs" className="text-white hover:text-primary-300 transition-colors" onClick={toggleMobileMenu}>فرصت های شغلی</Link>
                <Link to="/cooperation" className="text-white hover:text-primary-300 transition-colors" onClick={toggleMobileMenu}>همکاری با تاپلرن</Link>
                <Link to="/support" className="text-white hover:text-primary-300 transition-colors" onClick={toggleMobileMenu}>مشاوره و رفع اشکال</Link>
              </nav>
            </motion.div>
          </motion.div>
        )}

        <div className="flex space-x-2 space-x-reverse">
          <FaUser className="text-xl" />
          <Link to="/login" className="after:content-['_/'] text-sm hover:text-primary-300 transition-colors">ورود</Link>
          <Link to="/register" className="text-sm hover:text-primary-300 transition-colors">ثبت نام</Link>
        </div>
      </section>

      <section className="text-white text-center container pt-6 px-8 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl leading-10">
            خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن با کمترینــــ هزینه خودت حرفه ایــــ یاد بگیـر
          </h1>
        </motion.div>
      </section>

      <section className="flex justify-center items-center pb-28 pt-10 text-center">
        <motion.input
          type="text"
          placeholder="چی میخوای یاد بگیری؟"
          className="w-4/5 lg:w-2/5 h-12 rounded-3xl px-5 shadow-2xl ring-8 ring-slate-300/20 focus:outline-none focus:ring-primary-300/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </section>

      <section className="hidden lg:flex lg:justify-center lg:items-center lg:text-center lg:pb-14 lg:space-x-20 lg:flex-row-reverse">
        <motion.article
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img src={time} alt="time" className="w-32 h-32" />
          <div className="text-xl font-bold">۴۴۴,۲۵۲</div>
          <div>ساعت آموزش</div>
        </motion.article>

        <motion.article
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={teacher} alt="teacher" className="w-32 h-32" />
          <div className="text-xl font-bold">۲۵۵</div>
          <div>مدرس مجرب</div>
        </motion.article>

        <motion.article
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={student} alt="student" className="w-32 h-32" />
          <div className="text-xl font-bold">۴۵,۲۵۱</div>
          <div>نفر دانشجو</div>
        </motion.article>
      </section>
    </header>
  );
};

export default Header;