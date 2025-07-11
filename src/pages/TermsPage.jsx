import { useState } from 'react';
import { FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const TermsPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const termsSections = [
    {
      title: 'قوانین عضویت و استفاده از خدمات',
      content: (
        <div className="space-y-4">
          <p>
            عضویت در سایت تاپ لرن و استفاده از خدمات آن، به معنای پذیرش کامل قوانین و مقررات از سوی کاربر است. این قوانین ممکن است در طول زمان تغییر کنند و مسئولیت مطالعه قوانین به‌روزرسانی شده بر عهده کاربر است.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">شرایط عضویت:</h4>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>حداقل سن برای عضویت در سایت، ۱۵ سال تمام است.</li>
              <li>کاربر موظف است اطلاعات صحیح و به‌روز در هنگام ثبت‌نام ارائه دهد.</li>
              <li>هر کاربر تنها مجاز به داشتن یک حساب کاربری است.</li>
              <li>نام کاربری و کلمه عبور، شخصی بوده و مسئولیت حفظ و نگهداری آن بر عهده کاربر است.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'حقوق مالکیت معنوی',
      content: (
        <div className="space-y-4">
          <p>
            تمامی محتوای ارائه شده در وب‌سایت تاپ لرن، اعم از متن، تصویر، ویدیو، کد و نرم‌افزار، تحت حمایت قوانین مالکیت معنوی قرار دارند و متعلق به تاپ لرن یا شرکای آن هستند.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">موارد ممنوع:</h4>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>کپی، توزیع، یا استفاده تجاری از محتوای سایت بدون کسب اجازه کتبی.</li>
              <li>اشتراک‌گذاری محتوای دوره‌های خریداری شده با افراد دیگر.</li>
              <li>دانلود و انتشار محتوای سایت در پلتفرم‌های دیگر.</li>
              <li>مهندسی معکوس، تغییر یا استخراج کد منبع سایت.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'قوانین پرداخت و بازگشت وجه',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن سعی دارد بهترین خدمات را به کاربران ارائه دهد و در این راستا، سیاست‌های منصفانه‌ای برای پرداخت و بازگشت وجه در نظر گرفته است.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">پرداخت:</h4>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>قیمت‌های اعلام شده برای دوره‌ها، به تومان و شامل مالیات بر ارزش افزوده است.</li>
              <li>پرداخت از طریق درگاه‌های بانکی معتبر و به صورت آنلاین انجام می‌شود.</li>
              <li>پس از پرداخت موفق، دسترسی به دوره به صورت خودکار فعال می‌شود.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">بازگشت وجه:</h4>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>تاپ لرن سیاست بازگشت وجه ۷ روزه دارد. اگر از کیفیت دوره راضی نیستید، می‌توانید تا ۷ روز پس از خرید، درخواست بازگشت وجه خود را ارسال کنید.</li>
              <li>بازگشت وجه مشروط به استفاده کمتر از ۳۰٪ از محتوای دوره است.</li>
              <li>بازگشت وجه برای عضویت‌های ویژه، پس از ۴۸ ساعت از زمان خرید امکان‌پذیر نیست.</li>
              <li>مبلغ بازگشتی به همان حساب واریزکننده، طی ۷۲ ساعت کاری واریز می‌شود.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'قوانین انتشار محتوا توسط کاربران',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن به کاربران امکان ارسال نظر، پرسش و در برخی موارد، محتوا را می‌دهد. محتوای ارسالی توسط کاربران باید منطبق با قوانین زیر باشد:
          </p>
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>عدم ارسال محتوای توهین‌آمیز، غیراخلاقی، غیرقانونی یا نامناسب.</li>
              <li>رعایت حقوق مالکیت معنوی دیگران در محتوای ارسالی.</li>
              <li>عدم ارسال تبلیغات یا لینک‌های تبلیغاتی در نظرات و پرسش‌ها.</li>
              <li>عدم ارسال اطلاعات شخصی خود یا دیگران در بخش‌های عمومی سایت.</li>
            </ul>
          </div>
          <p>
            تاپ لرن حق حذف محتوای نامناسب، بدون اطلاع قبلی به کاربر را برای خود محفوظ می‌دارد.
          </p>
        </div>
      ),
    },
    {
      title: 'محدودیت مسئولیت',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن تلاش می‌کند تا خدمات خود را به بهترین شکل ممکن ارائه دهد، اما در موارد زیر مسئولیتی بر عهده نمی‌گیرد:
          </p>
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>خسارات ناشی از استفاده یا عدم امکان استفاده از خدمات سایت.</li>
              <li>نتایج حاصل از استفاده از اطلاعات و آموزش‌های ارائه شده در سایت.</li>
              <li>اختلالات فنی موقت در دسترسی به سایت یا خدمات آن.</li>
              <li>محتوای ارسالی توسط کاربران و نظرات آن‌ها.</li>
              <li>عملکرد سایت‌های شخص ثالث که از طریق لینک در سایت تاپ لرن قابل دسترسی هستند.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'قوانین لغو حساب کاربری',
      content: (
        <div className="space-y-4">
          <p>
            کاربران می‌توانند در هر زمان درخواست لغو حساب کاربری خود را از طریق بخش پشتیبانی ارسال کنند. شرایط لغو حساب کاربری به شرح زیر است:
          </p>
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>با لغو حساب کاربری، تمامی اطلاعات و سوابق کاربر از سیستم حذف می‌شود.</li>
              <li>دسترسی به دوره‌های خریداری شده پس از لغو حساب کاربری، امکان‌پذیر نخواهد بود.</li>
              <li>مبالغ پرداخت شده برای دوره‌ها یا عضویت‌های ویژه، پس از لغو حساب کاربری قابل بازگشت نیستند.</li>
              <li>تاپ لرن حق لغو یا تعلیق حساب کاربری در صورت نقض قوانین سایت را برای خود محفوظ می‌دارد.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'قوانین تغییرات در خدمات',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن ممکن است در طول زمان، تغییراتی در خدمات، محتوا یا قوانین خود ایجاد کند:
          </p>
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>تغییرات عمده در قوانین، از طریق ایمیل یا اعلان در سایت به اطلاع کاربران خواهد رسید.</li>
              <li>ادامه استفاده از خدمات پس از اعمال تغییرات، به معنای پذیرش قوانین جدید است.</li>
              <li>تاپ لرن می‌تواند خدمات جدید اضافه یا خدمات موجود را تغییر دهد.</li>
              <li>در صورت عدم پذیرش تغییرات، کاربر می‌تواند از خدمات استفاده نکرده یا حساب کاربری خود را لغو کند.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">قوانین و مقررات</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            لطفاً قوانین و مقررات استفاده از خدمات تاپ لرن را به دقت مطالعه کنید.
            استفاده از خدمات این وب‌سایت به معنای پذیرش این قوانین است.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="container mx-auto mb-10 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <div className="flex items-center text-gray-600">
            <FaCheckCircle className="text-green-500 ml-2" />
            <p>آخرین به‌روزرسانی: ۱۵ خرداد ۱۴۰۴</p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="container mx-auto mb-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {termsSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection(index)}
              >
                <span className="text-lg font-medium text-gray-900">{section.title}</span>
                {expandedSection === index ? (
                  <FaChevronUp className="text-primary-500" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>
              {expandedSection === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">سوالی دارید؟</h2>
          <p className="text-gray-600 mb-6">
            اگر در مورد قوانین و مقررات سایت سوالی دارید، می‌توانید با تیم پشتیبانی ما تماس بگیرید.
          </p>
          <a
            href="/toplearn-home/contact"
            className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-md transition-colors inline-block"
          >
            تماس با پشتیبانی
          </a>
        </div>
      </section>
    </div>
  );
};

export default TermsPage; 