import { useState } from 'react';
import { FaCheck, FaTimes, FaCrown, FaRocket, FaStar, FaGem, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const VIPMembershipPage = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const plans = {
    monthly: [
      {
        name: 'پایه',
        price: '۹۹,۰۰۰',
        period: 'ماهانه',
        description: 'مناسب برای کاربران تازه وارد',
        features: [
          { text: 'دسترسی به ۵۰ دوره آموزشی', included: true },
          { text: 'پشتیبانی از طریق تیکت', included: true },
          { text: 'دانلود ویدیوها', included: true },
          { text: 'گواهی پایان دوره', included: false },
          { text: 'دسترسی به وبینارهای آنلاین', included: false },
          { text: 'مشاوره تخصصی', included: false },
        ],
        icon: <FaStar className="text-5xl text-yellow-500" />,
        buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
      },
      {
        name: 'حرفه‌ای',
        price: '۱۹۹,۰۰۰',
        period: 'ماهانه',
        description: 'مناسب برای توسعه‌دهندگان',
        features: [
          { text: 'دسترسی به ۱۵۰ دوره آموزشی', included: true },
          { text: 'پشتیبانی از طریق تیکت', included: true },
          { text: 'دانلود ویدیوها', included: true },
          { text: 'گواهی پایان دوره', included: true },
          { text: 'دسترسی به وبینارهای آنلاین', included: true },
          { text: 'مشاوره تخصصی', included: false },
        ],
        icon: <FaRocket className="text-5xl text-primary-500" />,
        buttonColor: 'bg-primary-500 hover:bg-primary-600',
        popular: true,
      },
      {
        name: 'ویژه',
        price: '۲۹۹,۰۰۰',
        period: 'ماهانه',
        description: 'مناسب برای متخصصان',
        features: [
          { text: 'دسترسی به تمام دوره‌های آموزشی', included: true },
          { text: 'پشتیبانی اختصاصی ۲۴/۷', included: true },
          { text: 'دانلود ویدیوها', included: true },
          { text: 'گواهی پایان دوره', included: true },
          { text: 'دسترسی به وبینارهای آنلاین', included: true },
          { text: 'مشاوره تخصصی', included: true },
        ],
        icon: <FaCrown className="text-5xl text-purple-600" />,
        buttonColor: 'bg-purple-600 hover:bg-purple-700',
      },
    ],
    yearly: [
      {
        name: 'پایه',
        price: '۹۹۰,۰۰۰',
        period: 'سالانه',
        description: 'مناسب برای کاربران تازه وارد',
        features: [
          { text: 'دسترسی به ۵۰ دوره آموزشی', included: true },
          { text: 'پشتیبانی از طریق تیکت', included: true },
          { text: 'دانلود ویدیوها', included: true },
          { text: 'گواهی پایان دوره', included: false },
          { text: 'دسترسی به وبینارهای آنلاین', included: false },
          { text: 'مشاوره تخصصی', included: false },
        ],
        icon: <FaStar className="text-5xl text-yellow-500" />,
        buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
        discount: '۱۰٪ تخفیف',
      },
      {
        name: 'حرفه‌ای',
        price: '۱,۹۹۰,۰۰۰',
        period: 'سالانه',
        description: 'مناسب برای توسعه‌دهندگان',
        features: [
          { text: 'دسترسی به ۱۵۰ دوره آموزشی', included: true },
          { text: 'پشتیبانی از طریق تیکت', included: true },
          { text: 'دانلود ویدیوها', included: true },
          { text: 'گواهی پایان دوره', included: true },
          { text: 'دسترسی به وبینارهای آنلاین', included: true },
          { text: 'مشاوره تخصصی', included: false },
        ],
        icon: <FaRocket className="text-5xl text-primary-500" />,
        buttonColor: 'bg-primary-500 hover:bg-primary-600',
        popular: true,
        discount: '۱۵٪ تخفیف',
      },
      {
        name: 'ویژه',
        price: '۲,۹۹۰,۰۰۰',
        period: 'سالانه',
        description: 'مناسب برای متخصصان',
        features: [
          { text: 'دسترسی به تمام دوره‌های آموزشی', included: true },
          { text: 'پشتیبانی اختصاصی ۲۴/۷', included: true },
          { text: 'دانلود ویدیوها', included: true },
          { text: 'گواهی پایان دوره', included: true },
          { text: 'دسترسی به وبینارهای آنلاین', included: true },
          { text: 'مشاوره تخصصی', included: true },
        ],
        icon: <FaCrown className="text-5xl text-purple-600" />,
        buttonColor: 'bg-purple-600 hover:bg-purple-700',
        discount: '۲۰٪ تخفیف',
      },
    ],
  };

  const faqs = [
    {
      question: 'آیا می‌توانم اشتراک خود را لغو کنم؟',
      answer: 'بله، شما می‌توانید در هر زمان اشتراک خود را لغو کنید. هزینه‌های پرداخت شده برای دوره جاری قابل بازگشت نیستند، اما می‌توانید تا پایان دوره پرداختی از خدمات استفاده کنید.'
    },
    {
      question: 'چگونه می‌توانم اشتراک خود را ارتقا دهم؟',
      answer: 'شما می‌توانید در هر زمان از طریق پنل کاربری خود، اشتراک خود را به پلن بالاتر ارتقا دهید. مابه‌التفاوت قیمت برای دوره باقی‌مانده محاسبه خواهد شد.'
    },
    {
      question: 'آیا می‌توانم دوره‌ها را دانلود کنم؟',
      answer: 'بله، در تمامی پلن‌های اشتراک امکان دانلود ویدیوهای آموزشی وجود دارد. شما می‌توانید دوره‌ها را دانلود کرده و به صورت آفلاین مشاهده کنید.'
    },
    {
      question: 'آیا گواهی پایان دوره دریافت می‌کنم؟',
      answer: 'در پلن‌های حرفه‌ای و ویژه، پس از اتمام موفقیت‌آمیز دوره‌ها، گواهی پایان دوره به شما اعطا می‌شود که می‌تواند در رزومه کاری شما مفید باشد.'
    },
    {
      question: 'آیا مشاوره شغلی هم ارائه می‌دهید؟',
      answer: 'بله، در پلن ویژه، علاوه بر دسترسی به تمامی دوره‌ها، خدمات مشاوره تخصصی نیز ارائه می‌شود که شامل مشاوره شغلی، راهنمایی برای ورود به بازار کار و بررسی رزومه می‌باشد.'
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">عضویت ویژه تاپ لرن</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            با عضویت ویژه در تاپ لرن، به دنیایی از دوره‌های آموزشی باکیفیت دسترسی داشته باشید 
            و مهارت‌های خود را به سطح بالاتری ارتقا دهید.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto mb-16 px-4">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 inline-flex shadow-md">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'monthly'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('monthly')}
            >
              پرداخت ماهانه
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'yearly'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('yearly')}
            >
              پرداخت سالانه
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans[activeTab].map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 relative ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
                  پیشنهاد ویژه
                </div>
              )}
              
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div>{plan.icon}</div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 mr-2">تومان / {plan.period}</span>
                  </div>
                  {plan.discount && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded mt-2">
                      {plan.discount}
                    </span>
                  )}
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        {feature.included ? (
                          <FaCheck className="text-green-500 ml-2 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-red-500 ml-2 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${plan.buttonColor}`}
                >
                  انتخاب این پلن
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">مزایای عضویت ویژه</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            با عضویت ویژه در تاپ لرن، از مزایای منحصر به فردی بهره‌مند شوید که مسیر یادگیری شما را هموارتر می‌کند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaGem className="text-4xl text-primary-500" />,
              title: 'دسترسی به تمام دوره‌ها',
              description: 'با عضویت ویژه، به تمامی دوره‌های آموزشی تاپ لرن دسترسی خواهید داشت.'
            },
            {
              icon: <FaRocket className="text-4xl text-primary-500" />,
              title: 'به‌روزرسانی‌های مداوم',
              description: 'دوره‌های جدید به محض انتشار، بدون هزینه اضافی به اشتراک شما اضافه می‌شوند.'
            },
            {
              icon: <FaCrown className="text-4xl text-primary-500" />,
              title: 'محتوای انحصاری',
              description: 'دسترسی به محتوای آموزشی انحصاری که تنها برای اعضای ویژه در دسترس است.'
            },
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">سوالات متداول</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            پاسخ سوالات رایج شما درباره عضویت ویژه در تاپ لرن
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <FaChevronUp className="text-primary-500" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary-500 rounded-xl text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">همین امروز عضو شوید</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            با عضویت ویژه در تاپ لرن، مسیر خود را به سمت موفقیت در دنیای برنامه‌نویسی و طراحی وب هموار کنید.
          </p>
          <button className="bg-white text-primary-600 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition-colors">
            شروع عضویت ویژه
          </button>
        </div>
      </section>
    </div>
  );
};

export default VIPMembershipPage; 