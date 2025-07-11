import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaGoogle, FaGithub } from 'react-icons/fa';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'نام و نام خانوادگی الزامی است';
    }
    
    if (!formData.email) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'فرمت ایمیل صحیح نیست';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'شماره موبایل الزامی است';
    } else if (!/^09\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'فرمت شماره موبایل صحیح نیست';
    }
    
    if (!formData.password) {
      newErrors.password = 'رمز عبور الزامی است';
    } else if (formData.password.length < 6) {
      newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'تکرار رمز عبور مطابقت ندارد';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'پذیرش قوانین و مقررات الزامی است';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send the form data to your backend
      console.log('Form submitted:', formData);
      // Redirect to login page or dashboard after successful registration
    }
  };
  
  return (
    <div className="container py-12">
      <div className="max-w-lg mx-auto">
        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 py-6 px-8">
            <h2 className="text-2xl font-bold text-white text-center">ثبت نام در تاپ لرن</h2>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">نام و نام خانوادگی</label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`input pl-10 ${errors.fullName ? 'border-red-500' : ''}`}
                    placeholder="علی محمدی"
                  />
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                </div>
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ایمیل</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input pl-10 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="example@email.com"
                  />
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">شماره موبایل</label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`input pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="09123456789"
                  />
                  <FaPhone className="absolute left-3 top-3 text-gray-400" />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">رمز عبور</label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`input pl-10 ${errors.password ? 'border-red-500' : ''}`}
                    placeholder="******"
                  />
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">تکرار رمز عبور</label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`input pl-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                    placeholder="******"
                  />
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="ml-2 h-4 w-4 mt-1 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                    <span className="block">
                      من با <Link to="/terms" className="text-primary-500 hover:text-primary-600 transition-colors">قوانین و مقررات</Link> سایت موافقم و <Link to="/privacy" className="text-primary-500 hover:text-primary-600 transition-colors">سیاست حفظ حریم خصوصی</Link> را می‌پذیرم.
                    </span>
                  </label>
                </div>
                {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-md transition-colors font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ثبت نام
              </motion.button>
            </form>
            
            <div className="relative flex items-center mt-8 mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">یا ثبت نام با</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            <div className="flex space-x-4 space-x-reverse">
              <motion.button
                className="flex-1 flex justify-center items-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGoogle />
                گوگل
              </motion.button>
              
              <motion.button
                className="flex-1 flex justify-center items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub />
                گیت‌هاب
              </motion.button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                قبلاً ثبت نام کرده‌اید؟{' '}
                <Link to="/login" className="text-primary-500 hover:text-primary-600 transition-colors font-medium">
                  ورود به حساب کاربری
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;