import { useState } from 'react';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';

const ContactFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: 'general'
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'لطفا نام خود را وارد کنید';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'لطفا ایمیل خود را وارد کنید';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'لطفا یک ایمیل معتبر وارد کنید';
    }
    
    if (formData.phone && !/^[0-9]{11}$/.test(formData.phone.replace(/[- ]/g, ''))) {
      newErrors.phone = 'لطفا یک شماره موبایل معتبر وارد کنید';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'لطفا موضوع پیام را وارد کنید';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'لطفا پیام خود را وارد کنید';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'پیام شما باید حداقل ۲۰ کاراکتر باشد';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real application, you would send the form data to a server here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        department: 'general'
      });
    } catch (error) {
      setErrors({ submit: 'مشکلی در ارسال پیام رخ داد. لطفا دوباره تلاش کنید.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="container mx-auto mb-12 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">ارسال پیام</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            از طریق فرم زیر می‌توانید پیام، پیشنهاد یا انتقاد خود را با ما در میان بگذارید. 
            تیم پشتیبانی ما در اسرع وقت با شما تماس خواهد گرفت.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto max-w-4xl px-4 mb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="text-3xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">پیام شما با موفقیت ارسال شد</h2>
                <p className="text-gray-600 mb-8">
                  از ارتباط شما با ما متشکریم. کارشناسان ما در اسرع وقت پیام شما را بررسی کرده و پاسخ خواهند داد.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-md transition-colors"
                >
                  ارسال پیام جدید
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">نام و نام خانوادگی *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="نام و نام خانوادگی خود را وارد کنید"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">ایمیل *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="ایمیل خود را وارد کنید"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">شماره موبایل</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="شماره موبایل خود را وارد کنید"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  {/* Department Dropdown */}
                  <div>
                    <label htmlFor="department" className="block text-gray-700 mb-2">بخش مورد نظر</label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="general">عمومی</option>
                      <option value="technical">پشتیبانی فنی</option>
                      <option value="sales">فروش و مالی</option>
                      <option value="content">محتوا و آموزش</option>
                      <option value="cooperation">همکاری با تاپ لرن</option>
                    </select>
                  </div>
                </div>
                
                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">موضوع *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="موضوع پیام خود را وارد کنید"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">پیام *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="پیام خود را بنویسید..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                {/* Submit Error */}
                {errors.submit && (
                  <div className="bg-red-100 text-red-800 p-4 rounded-md">
                    {errors.submit}
                  </div>
                )}
                
                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-md transition-colors flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        در حال ارسال...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="ml-2" />
                        ارسال پیام
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto max-w-4xl px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">آدرس</h3>
            <p className="text-gray-600">
              ایران، تهران، خیابان ولیعصر، پلاک ۱۲۳
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">تلفن تماس</h3>
            <p className="text-gray-600">
              ۰۲۱-۱۲۳۴۵۶۷۸
            </p>
            <p className="text-gray-600">
              ۰۹۱۲۳۴۵۶۷۸۹
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">ایمیل</h3>
            <p className="text-gray-600">
              info@toplearn.com
            </p>
            <p className="text-gray-600">
              support@toplearn.com
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto max-w-4xl px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9661211030953!2d51.41880491060658!3d35.70111253622148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01d4b750b54d%3A0x6a65f4a0ca17bf5d!2sValiasr%20St%2C%20Tehran%2C%20Iran!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactFormPage; 