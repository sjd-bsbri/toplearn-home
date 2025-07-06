import { Link } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CourseCard = ({ course }) => {
  const { id, title, instructor, duration, price, image, isFree } = course;

  return (
    <motion.article 
      className="card group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        {isFree && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs py-1 px-2 rounded-md">
            رایگان
          </div>
        )}
      </div>
      
      <div className="py-5 px-4 space-y-3">
        <Link to={`/courses/${id}`} className="block hover:text-primary-500 transition-colors">
          <h3 className="font-medium text-lg line-clamp-2">{title}</h3>
        </Link>
        
        <div className="border-b-2 border-b-slate-200 pb-3">
          <div className="flex items-center space-x-2 space-x-reverse">
            <FaUser className="text-slate-400" />
            <Link to={`/instructors/${instructor}`} className="text-slate-500 text-sm hover:text-primary-500 transition-colors">
              {instructor}
            </Link>
          </div>
        </div>
      </div>

      <footer className="flex justify-between pb-4 px-4">
        <div className="flex items-center space-x-2 space-x-reverse text-primary-500">
          <FaClock />
          <p>{duration}</p>
        </div>
        <div>
          <h6 className={`text-lg ${isFree ? 'text-green-600' : 'text-primary-600'}`}>
            {price}
          </h6>
        </div>
      </footer>
    </motion.article>
  );
};

export default CourseCard;