import { useState } from 'react';
import { FaShieldAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const PrivacyPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const privacySections = [
    {
      title: 'اطلاعاتی که ما جمع‌آوری می‌کنیم',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن برای ارائه خدمات بهتر، اطلاعاتی را از کاربران جمع‌آوری می‌کند. این اطلاعات شامل موارد زیر است:
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">اطلاعات شخصی:</h4>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>نام و نام خانوادگی</li>
              <li>آدرس ایمیل</li>
              <li>شماره تلفن همراه (در صورت ارائه)</li>
              <li>اطلاعات پرداخت (شماره کارت به صورت ناقص)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">اطلاعات غیرشخصی:</h4>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>مرورگر و سیستم‌عامل مورد استفاده</li>
              <li>آدرس IP</li>
              <li>صفحاتی که بازدید می‌کنید</li>
              <li>زمان و تاریخ بازدید</li>
              <li>دستگاه مورد استفاده برای دسترسی به سایت</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'نحوه استفاده از اطلاعات',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن از اطلاعات جمع‌آوری شده برای موارد زیر استفاده می‌کند:
          </p>
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>ارائه، بهبود و شخصی‌سازی خدمات برای کاربران</li>
              <li>پردازش پرداخت‌ها و مدیریت حساب کاربری</li>
              <li>ارسال اطلاعیه‌های مهم در مورد حساب کاربری یا تغییرات در خدمات</li>
              <li>ارسال خبرنامه و اطلاعات مربوط به دوره‌ها و تخفیف‌ها (در صورت رضایت کاربر)</li>
              <li>تحلیل رفتار کاربران برای بهبود عملکرد سایت و تجربه کاربری</li>
              <li>تشخیص و جلوگیری از فعالیت‌های تقلبی یا غیرمجاز</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'اشتراک‌گذاری اطلاعات',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن به حریم خصوصی کاربران خود احترام می‌گذارد و اطلاعات شخصی آن‌ها را با اشخاص ثالث به اشتراک نمی‌گذارد، مگر در موارد زیر:
          </p>
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>با ارائه‌دهندگان خدمات پرداخت برای پردازش تراکنش‌های مالی</li>
              <li>با شرکای تجاری که در ارائه خدمات به ما کمک می‌کنند (مانند خدمات میزبانی وب، تحلیل داده و پشتیبانی مشتری)</li>
              <li>در صورت الزام قانونی یا درخواست مراجع قضایی</li>
              <li>برای محافظت از حقوق، دارایی‌ها یا امنیت تاپ لرن، کاربران آن یا عموم مردم</li>
            </ul>
          </div>
          <p>
            در تمامی موارد فوق، ما تنها اطلاعات ضروری را به اشتراک می‌گذاریم و از طرف‌های مقابل می‌خواهیم که از اطلاعات کاربران محافظت کنند.
          </p>
        </div>
      ),
    },
    {
      title: 'کوکی‌ها و فناوری‌های مشابه',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن از کوکی‌ها و فناوری‌های مشابه برای جمع‌آوری اطلاعات و بهبود تجربه کاربری استفاده می‌کند:
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">انواع کوکی‌های مورد استفاده:</h4>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>کوکی‌های ضروری: برای عملکرد اصلی سایت مورد نیاز هستند</li>
              <li>کوکی‌های عملکردی: برای به خاطر سپردن ترجیحات کاربر و بهبود کارایی سایت</li>
              <li>کوکی‌های تحلیلی: برای درک نحوه استفاده کاربران از سایت و بهبود آن</li>
              <li>کوکی‌های تبلیغاتی: برای نمایش تبلیغات متناسب با علایق کاربر</li>
            </ul>
          </div>
          <p>
            کاربران می‌توانند از طریق تنظیمات مرورگر خود، کوکی‌ها را مدیریت یا غیرفعال کنند. توجه داشته باشید که غیرفعال کردن برخی کوکی‌ها ممکن است بر تجربه کاربری تأثیر بگذارد.
          </p>
        </div>
      ),
    },
    {
      title: 'حفظ و نگهداری اطلاعات',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن اطلاعات کاربران را تا زمانی که برای اهداف ذکر شده در این سیاست حریم خصوصی لازم باشد، نگهداری می‌کند. مدت زمان نگهداری اطلاعات به نوع داده و الزامات قانونی بستگی دارد:
          </p>
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>اطلاعات حساب کاربری: تا زمانی که حساب کاربری فعال است</li>
              <li>سوابق پرداخت: مطابق با قوانین مالی و مالیاتی (معمولاً ۵ سال)</li>
              <li>داده‌های تعامل با سایت: معمولاً تا ۲ سال</li>
              <li>گزارش‌های خطا و امنیتی: تا ۱ سال</li>
            </ul>
          </div>
          <p>
            پس از پایان دوره نگهداری، اطلاعات به صورت ایمن حذف یا بی‌نام می‌شوند.
          </p>
        </div>
      ),
    },
    {
      title: 'امنیت اطلاعات',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن متعهد به حفاظت از اطلاعات کاربران است و اقدامات امنیتی مناسبی را برای محافظت در برابر دسترسی غیرمجاز، افشا، تغییر یا تخریب اطلاعات اتخاذ می‌کند:
          </p>
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>استفاده از پروتکل SSL برای رمزگذاری انتقال داده‌ها</li>
              <li>ذخیره‌سازی رمزهای عبور به صورت رمزنگاری شده</li>
              <li>محدودیت دسترسی به اطلاعات شخصی کاربران برای کارکنان</li>
              <li>به‌روزرسانی منظم سیستم‌های امنیتی</li>
              <li>انجام تست‌های نفوذ دوره‌ای</li>
            </ul>
          </div>
          <p>
            با این حال، هیچ روش انتقال اطلاعات از طریق اینترنت یا ذخیره‌سازی الکترونیکی کاملاً ایمن نیست. در صورت اطلاع از هرگونه نقض امنیتی، به سرعت به کاربران اطلاع‌رسانی خواهیم کرد.
          </p>
        </div>
      ),
    },
    {
      title: 'حقوق کاربران',
      content: (
        <div className="space-y-4">
          <p>
            کاربران تاپ لرن دارای حقوق زیر در رابطه با اطلاعات شخصی خود هستند:
          </p>
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>دسترسی به اطلاعات شخصی که از آن‌ها جمع‌آوری شده است</li>
              <li>اصلاح یا به‌روزرسانی اطلاعات نادرست یا ناقص</li>
              <li>محدود کردن پردازش اطلاعات در شرایط خاص</li>
              <li>درخواست حذف اطلاعات (حق فراموش شدن)</li>
              <li>دریافت اطلاعات خود در قالب قابل استفاده و انتقال آن به سرویس دیگر</li>
              <li>اعتراض به پردازش اطلاعات برای بازاریابی مستقیم</li>
            </ul>
          </div>
          <p>
            برای اعمال هر یک از این حقوق، کاربران می‌توانند از طریق ایمیل privacy@toplearn.com با ما تماس بگیرند. ما به درخواست‌های کاربران در اسرع وقت (حداکثر ظرف ۳۰ روز) پاسخ خواهیم داد.
          </p>
        </div>
      ),
    },
    {
      title: 'تغییرات در سیاست حریم خصوصی',
      content: (
        <div className="space-y-4">
          <p>
            تاپ لرن ممکن است این سیاست حریم خصوصی را به منظور انعکاس تغییرات در روش‌های جمع‌آوری و استفاده از اطلاعات، به‌روزرسانی کند. تغییرات عمده از طریق موارد زیر اطلاع‌رسانی می‌شوند:
          </p>
          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>اعلان در وب‌سایت</li>
              <li>ارسال ایمیل به کاربران ثبت‌نام شده</li>
              <li>به‌روزرسانی تاریخ "آخرین به‌روزرسانی" در بالای این صفحه</li>
            </ul>
          </div>
          <p>
            ادامه استفاده از خدمات تاپ لرن پس از اعمال تغییرات، به معنای پذیرش سیاست حریم خصوصی جدید است. توصیه می‌کنیم کاربران به طور منظم این صفحه را بررسی کنند.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">حریم خصوصی</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            تاپ لرن متعهد به حفظ حریم خصوصی کاربران است. این سیاست حریم خصوصی نحوه جمع‌آوری، استفاده و محافظت از اطلاعات شما را توضیح می‌دهد.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="container mx-auto mb-10 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <div className="flex items-center text-gray-600">
            <FaShieldAlt className="text-primary-500 ml-2" />
            <p>آخرین به‌روزرسانی: ۱۵ خرداد ۱۴۰۴</p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="container mx-auto mb-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {privacySections.map((section, index) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">سوالات یا نگرانی‌ها</h2>
          <p className="text-gray-600 mb-6">
            اگر در مورد نحوه جمع‌آوری و استفاده از اطلاعات شخصی خود سوال یا نگرانی دارید، لطفاً با ما تماس بگیرید.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:privacy@toplearn.com"
              className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-md transition-colors inline-block"
            >
              privacy@toplearn.com
            </a>
            <a
              href="/toplearn-home/contact"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md transition-colors inline-block"
            >
              تماس با پشتیبانی
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage; 