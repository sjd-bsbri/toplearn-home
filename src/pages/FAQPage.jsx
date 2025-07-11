import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

const FAQPage = () => {
  const [expandedCategory, setExpandedCategory] = useState('general');
  const [expandedFaqs, setExpandedFaqs] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Define FAQ categories and questions
  const faqCategories = [
    {
      id: 'general',
      title: 'سوالات عمومی',
      faqs: [
        {
          question: 'تاپ لرن چیست؟',
          answer: 'تاپ لرن یک پلتفرم آموزش آنلاین است که دوره‌های آموزشی با کیفیت در زمینه برنامه‌نویسی، طراحی وب، هوش مصنوعی و دیگر مهارت‌های دیجیتال ارائه می‌دهد. هدف ما ارائه آموزش‌های کاربردی و به‌روز با قیمت مناسب است.'
        },
        {
          question: 'چگونه می‌توانم در تاپ لرن ثبت‌نام کنم؟',
          answer: 'برای ثبت‌نام در تاپ لرن، کافی است به صفحه "ثبت‌نام" مراجعه کرده و اطلاعات خواسته شده را وارد کنید. پس از تکمیل فرم ثبت‌نام و تایید ایمیل، می‌توانید از خدمات تاپ لرن استفاده کنید.'
        },
        {
          question: 'آیا استفاده از تاپ لرن رایگان است؟',
          answer: 'تاپ لرن هم محتوای رایگان و هم دوره‌های پولی ارائه می‌دهد. شما می‌توانید از محتوای رایگان بدون پرداخت هزینه استفاده کنید، اما برای دسترسی به دوره‌های کامل و پیشرفته، نیاز به خرید دوره یا عضویت ویژه دارید.'
        },
        {
          question: 'آیا دوره‌های تاپ لرن گواهی پایان دوره دارند؟',
          answer: 'بله، پس از اتمام موفقیت‌آمیز دوره‌های تاپ لرن، گواهی پایان دوره به شما اعطا می‌شود که می‌توانید آن را به رزومه خود اضافه کنید. این گواهی‌ها برای دوره‌های پولی صادر می‌شوند.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'پرداخت و خرید',
      faqs: [
        {
          question: 'چه روش‌های پرداختی در تاپ لرن پشتیبانی می‌شود؟',
          answer: 'تاپ لرن از روش‌های پرداخت متنوعی مانند کارت‌های بانکی عضو شتاب، درگاه‌های پرداخت آنلاین و کیف پول الکترونیکی پشتیبانی می‌کند. شما می‌توانید از هر کدام از این روش‌ها برای خرید دوره‌ها یا عضویت ویژه استفاده کنید.'
        },
        {
          question: 'آیا امکان بازگشت وجه وجود دارد؟',
          answer: 'بله، تاپ لرن سیاست بازگشت وجه ۷ روزه دارد. اگر از کیفیت دوره راضی نیستید، می‌توانید تا ۷ روز پس از خرید، درخواست بازگشت وجه خود را از طریق بخش پشتیبانی ارسال کنید.'
        },
        {
          question: 'آیا می‌توانم دوره‌ها را قسطی خریداری کنم؟',
          answer: 'بله، برای دوره‌های با قیمت بالاتر، امکان پرداخت اقساطی فراهم شده است. جزئیات طرح‌های پرداخت اقساطی در صفحه خرید هر دوره قابل مشاهده است.'
        },
        {
          question: 'تخفیف‌های تاپ لرن چگونه اعمال می‌شوند؟',
          answer: 'تاپ لرن به مناسبت‌های مختلف، کد تخفیف‌هایی را ارائه می‌دهد. برای استفاده از این تخفیف‌ها، می‌توانید کد تخفیف را در صفحه پرداخت وارد کنید. همچنین، با عضویت در خبرنامه تاپ لرن، از تخفیف‌های ویژه مطلع می‌شوید.'
        }
      ]
    },
    {
      id: 'courses',
      title: 'دوره‌های آموزشی',
      faqs: [
        {
          question: 'دوره‌های تاپ لرن چه ویژگی‌هایی دارند؟',
          answer: 'دوره‌های تاپ لرن توسط مدرسان متخصص و با تجربه تهیه شده‌اند و شامل ویدیوهای آموزشی با کیفیت، تمرین‌های عملی، منابع دانلودی، و امکان پرسش و پاسخ با مدرس هستند. این دوره‌ها به گونه‌ای طراحی شده‌اند که از مبتدی تا پیشرفته، همه بتوانند از آن‌ها استفاده کنند.'
        },
        {
          question: 'آیا می‌توانم دوره‌ها را دانلود کنم؟',
          answer: 'بله، پس از خرید دوره، می‌توانید ویدیوها و منابع آموزشی را دانلود کرده و به صورت آفلاین مشاهده کنید. البته برخی از دوره‌ها ممکن است محدودیت‌هایی در دانلود داشته باشند که در صفحه توضیحات دوره ذکر شده است.'
        },
        {
          question: 'مدت زمان دسترسی به دوره‌ها چقدر است؟',
          answer: 'پس از خرید دوره، دسترسی شما به محتوای آن نامحدود است و می‌توانید هر زمان که بخواهید به آن مراجعه کنید. البته برخی دوره‌های خاص ممکن است محدودیت زمانی داشته باشند که در صفحه توضیحات دوره ذکر شده است.'
        },
        {
          question: 'اگر سوالی در مورد محتوای دوره داشته باشم، چگونه می‌توانم آن را مطرح کنم؟',
          answer: 'در هر دوره، بخشی برای پرسش و پاسخ وجود دارد که می‌توانید سوالات خود را مطرح کنید. مدرسان و سایر دانشجویان می‌توانند به سوالات شما پاسخ دهند. همچنین، برای سوالات خاص می‌توانید از طریق بخش پشتیبانی با ما در تماس باشید.'
        }
      ]
    },
    {
      id: 'membership',
      title: 'عضویت ویژه',
      faqs: [
        {
          question: 'عضویت ویژه تاپ لرن چیست؟',
          answer: 'عضویت ویژه تاپ لرن، یک طرح اشتراکی است که به شما امکان دسترسی به تمام یا بخش بزرگی از دوره‌های آموزشی را می‌دهد. با پرداخت یک هزینه ماهانه یا سالانه، می‌توانید از تمام مزایای عضویت ویژه بهره‌مند شوید.'
        },
        {
          question: 'مزایای عضویت ویژه چیست؟',
          answer: 'مزایای عضویت ویژه شامل دسترسی به تمام دوره‌های آموزشی (بسته به نوع اشتراک)، دانلود ویدیوها، پشتیبانی اختصاصی، گواهی پایان دوره، دسترسی به وبینارهای آنلاین و در برخی طرح‌ها، مشاوره تخصصی است.'
        },
        {
          question: 'آیا می‌توانم عضویت ویژه خود را لغو کنم؟',
          answer: 'بله، شما می‌توانید در هر زمان عضویت ویژه خود را لغو کنید. هزینه‌های پرداخت شده برای دوره جاری قابل بازگشت نیستند، اما می‌توانید تا پایان دوره پرداختی از خدمات استفاده کنید.'
        },
        {
          question: 'آیا می‌توانم طرح عضویت خود را ارتقا دهم؟',
          answer: 'بله، شما می‌توانید در هر زمان طرح عضویت خود را به سطح بالاتر ارتقا دهید. مابه‌التفاوت قیمت برای دوره باقی‌مانده محاسبه خواهد شد.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'مسائل فنی',
      faqs: [
        {
          question: 'چرا نمی‌توانم ویدیوها را مشاهده کنم؟',
          answer: 'اگر در مشاهده ویدیوها مشکل دارید، ابتدا اتصال اینترنت خود را بررسی کنید. سپس، مطمئن شوید که مرورگر شما به‌روز است و از مرورگرهای معتبر مانند Chrome، Firefox یا Edge استفاده می‌کنید. همچنین، ممکن است نیاز به نصب یا به‌روزرسانی Adobe Flash Player یا HTML5 داشته باشید.'
        },
        {
          question: 'چرا دانلود ویدیوها کند است؟',
          answer: 'سرعت دانلود به سرعت اینترنت شما بستگی دارد. اگر سرعت دانلود کند است، سعی کنید در ساعات غیر پیک دانلود کنید یا از ابزارهای مدیریت دانلود استفاده کنید. همچنین، می‌توانید کیفیت ویدیو را کاهش دهید تا حجم فایل کمتر شود.'
        },
        {
          question: 'آیا تاپ لرن برنامه موبایل دارد؟',
          answer: 'بله، تاپ لرن دارای اپلیکیشن موبایل برای سیستم‌های عامل اندروید و iOS است. می‌توانید این اپلیکیشن‌ها را از Google Play و App Store دانلود کنید و از تمامی امکانات تاپ لرن روی دستگاه موبایل خود استفاده کنید.'
        },
        {
          question: 'نام کاربری یا رمز عبور خود را فراموش کرده‌ام، چه کنم؟',
          answer: 'اگر نام کاربری یا رمز عبور خود را فراموش کرده‌اید، به صفحه ورود بروید و روی گزینه "فراموشی رمز عبور" کلیک کنید. ایمیلی حاوی دستورالعمل‌های بازیابی رمز عبور برای شما ارسال خواهد شد.'
        }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleFaq = (categoryId, index) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [`${categoryId}-${index}`]: !prev[`${categoryId}-${index}`]
    }));
  };

  // Filter FAQs based on search term
  const filteredFaqs = searchTerm.length > 2
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">سوالات متداول</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            پاسخ به سوالات رایج شما درباره تاپ لرن و خدمات آن. اگر پاسخ سوال خود را پیدا نکردید، 
            می‌توانید از طریق بخش <a href="/contact" className="text-primary-500 hover:text-primary-600">تماس با ما</a> با پشتیبانی تاپ لرن در ارتباط باشید.
          </p>
          
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full p-4 pr-10 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="جستجو در سوالات متداول..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="container mx-auto mb-16 px-4">
        {searchTerm.length > 2 ? (
          // Search Results
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">نتایج جستجو برای: {searchTerm}</h2>
            
            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600">هیچ نتیجه‌ای یافت نشد. لطفاً جستجوی دیگری را امتحان کنید.</p>
              </div>
            ) : (
              filteredFaqs.map(category => (
                <div key={category.id} className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          className="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none"
                          onClick={() => toggleFaq(category.id, index)}
                        >
                          <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                          {expandedFaqs[`${category.id}-${index}`] ? (
                            <FaChevronUp className="text-primary-500" />
                          ) : (
                            <FaChevronDown className="text-gray-400" />
                          )}
                        </button>
                        {expandedFaqs[`${category.id}-${index}`] && (
                          <div className="px-6 py-4 bg-gray-50">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          // Normal View
          <div className="max-w-3xl mx-auto">
            {/* Category tabs */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {faqCategories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    expandedCategory === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => toggleCategory(category.id)}
                >
                  {category.title}
                </button>
              ))}
            </div>
            
            {/* Category content */}
            {faqCategories.map(category => (
              <div
                key={category.id}
                className={`mb-8 ${expandedCategory === category.id ? 'block' : 'hidden'}`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-primary-500 pr-4">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none"
                        onClick={() => toggleFaq(category.id, index)}
                      >
                        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                        {expandedFaqs[`${category.id}-${index}`] ? (
                          <FaChevronUp className="text-primary-500" />
                        ) : (
                          <FaChevronDown className="text-gray-400" />
                        )}
                      </button>
                      {expandedFaqs[`${category.id}-${index}`] && (
                        <div className="px-6 py-4 bg-gray-50">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">هنوز سوالی دارید؟</h2>
          <p className="text-gray-600 mb-6">
            اگر پاسخ سوال خود را در بین سوالات متداول پیدا نکردید، می‌توانید با تیم پشتیبانی ما تماس بگیرید.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-md transition-colors inline-block"
            >
              تماس با پشتیبانی
            </a>
            <a
              href="/contact-form"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md transition-colors inline-block"
            >
              ارسال پیام
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage; 