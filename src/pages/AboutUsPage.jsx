import { FaGraduationCap, FaUsers, FaChalkboardTeacher, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">درباره تاپ لرن</h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            ما در تاپ لرن با ارائه آموزش‌های با کیفیت در حوزه فناوری اطلاعات، به دنبال 
            توانمندسازی افراد برای ورود به بازار کار و پیشرفت در مسیر شغلی هستیم.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-primary-500 pr-4">داستان ما</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                تاپ لرن در سال ۱۳۹۶ با هدف ارائه آموزش‌های کاربردی و باکیفیت در حوزه فناوری اطلاعات تأسیس شد. 
                ما معتقدیم که آموزش باید در دسترس همه باشد و با قیمت مناسب ارائه شود.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                در طول این سال‌ها، تیم ما متشکل از بهترین مدرسان و متخصصان حوزه آی‌تی، تلاش کرده‌اند 
                تا آموزش‌های به‌روز و کاربردی را در اختیار علاقه‌مندان قرار دهند.
              </p>
              <p className="text-gray-600 leading-relaxed">
                امروز، تاپ لرن به یکی از معتبرترین پلتفرم‌های آموزشی آنلاین در ایران تبدیل شده است 
                و هزاران دانشجو از سراسر کشور در دوره‌های ما شرکت کرده‌اند.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://bairesdev.mo.cloudinary.net/blog/2021/07/software-developing-team.jpg?tx=w_1920%2Cq_auto" 
                alt="تیم تاپ لرن" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="container mx-auto mb-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGraduationCap className="text-primary-600 text-3xl" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">۱۰۰+</h3>
            <p className="text-gray-600">دوره آموزشی</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-primary-600 text-3xl" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">۵۰,۰۰۰+</h3>
            <p className="text-gray-600">دانشجو</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaChalkboardTeacher className="text-primary-600 text-3xl" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">۵۰+</h3>
            <p className="text-gray-600">مدرس متخصص</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="text-primary-600 text-3xl" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">۹۸٪</h3>
            <p className="text-gray-600">رضایت دانشجویان</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="container mx-auto mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-primary-500 pr-4">ماموریت ما</h2>
            <p className="text-gray-600 leading-relaxed">
              ماموریت ما در تاپ لرن، ارائه آموزش‌های باکیفیت و کاربردی در حوزه فناوری اطلاعات، 
              با قیمت مناسب و در دسترس برای همه است. ما تلاش می‌کنیم تا با ارائه محتوای آموزشی 
              به‌روز و مبتنی بر نیازهای بازار کار، به توسعه مهارت‌های فنی و حرفه‌ای دانشجویان کمک کنیم.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-primary-500 pr-4">چشم‌انداز ما</h2>
            <p className="text-gray-600 leading-relaxed">
              چشم‌انداز ما، تبدیل شدن به بزرگترین و معتبرترین پلتفرم آموزش آنلاین در حوزه فناوری اطلاعات 
              در ایران و خاورمیانه است. ما می‌خواهیم با گسترش دسترسی به آموزش‌های باکیفیت، به پرورش نسل 
              جدیدی از متخصصان حوزه فناوری اطلاعات کمک کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">تیم ما</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            تیم تاپ لرن متشکل از متخصصان با تجربه و متعهد در حوزه‌های مختلف است 
            که با هدف ارائه بهترین تجربه آموزشی گرد هم آمده‌اند.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'علی محمدی',
              role: 'مدیر عامل و بنیانگذار',
              image: 'https://i.pravatar.cc/150?img=1'
            },
            {
              name: 'سارا احمدی',
              role: 'مدیر آموزش',
              image: 'https://i.pravatar.cc/150?img=43'
            },
            {
              name: 'محمد رضایی',
              role: 'مدیر فنی',
              image: 'https://i.pravatar.cc/150?img=13'
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-4">{member.role}</p>
                <p className="text-gray-600">
                  متخصص با بیش از ۱۰ سال تجربه در حوزه آموزش و توسعه نرم‌افزار
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage; 