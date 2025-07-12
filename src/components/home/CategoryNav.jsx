import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import goldVip from '../../assets/images/goldVip.png';


const CategoryNav = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <motion.section 
      className="hidden lg:block pb-6 pt-5 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex justify-between mb-3">
        <nav className="flex items-center space-x-5 space-x-reverse">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.path} 
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-colors hover:text-primary-500 ${
                selectedCategory === category.id ? 'text-primary-500 font-medium' : ''
              }`}
            >
              {category.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center">
          <img src={goldVip} alt="gold" className="w-10 h-10" />
          <Link to="/vip" className="text-primary-500 text-sm hover:text-primary-600 transition-colors">
            مخصوص اعضای ویژه
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CategoryNav;