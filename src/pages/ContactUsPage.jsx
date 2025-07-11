import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, like sending data to a server
    console.log('Form submitted:', formData);
    alert('پیام شما با موفقیت ارسال شد!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">تماس با ما</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            ما همیشه آماده شنیدن نظرات، پیشنهادات و سوالات شما هستیم. از طریق اطلاعات زیر با ما در ارتباط باشید.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">آدرس</h3>
            <p className="text-gray-600">
              ایران، تهران، خیابان ولیعصر، پلاک ۱۲۳
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">تلفن تماس</h3>
            <p className="text-gray-600">
              ۰۲۱-۱۲۳۴۵۶۷۸
            </p>
            <p className="text-gray-600">
              ۰۹۱۲۳۴۵۶۷۸۹
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">ایمیل</h3>
            <p className="text-gray-600">
              info@toplearn.com
            </p>
            <p className="text-gray-600">
              support@toplearn.com
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">ساعات کاری</h3>
            <p className="text-gray-600">
              شنبه تا چهارشنبه: ۸ صبح تا ۶ عصر
            </p>
            <p className="text-gray-600">
              پنجشنبه: ۸ صبح تا ۱ ظهر
            </p>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 bg-gray-200">
              {/* You could embed an actual Google Map here */}
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
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-primary-500 pr-4">ارسال پیام</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">ایمیل</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">موضوع</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">پیام</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-md transition-colors"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto mb-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ما را در شبکه‌های اجتماعی دنبال کنید</h2>
          <div className="flex justify-center space-x-6 space-x-reverse">
            <a href="#" className="bg-primary-100 hover:bg-primary-200 p-4 rounded-full transition-colors">
              <FaInstagram className="text-primary-600 text-2xl" />
            </a>
            <a href="#" className="bg-primary-100 hover:bg-primary-200 p-4 rounded-full transition-colors">
              <FaTelegram className="text-primary-600 text-2xl" />
            </a>
            <a href="#" className="bg-primary-100 hover:bg-primary-200 p-4 rounded-full transition-colors">
              <FaTwitter className="text-primary-600 text-2xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage; 