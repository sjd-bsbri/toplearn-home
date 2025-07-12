import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaTags, FaArrowRight } from 'react-icons/fa';
import { sampleBlogPosts } from './BlogPage';
import { motion } from 'framer-motion';

const BlogPostDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const foundBlog = sampleBlogPosts.find(post => post.id === id);
            setBlog(foundBlog);
            setLoading(false);
        }, 500);
    }, [id]);

    if (loading) {
        return (
            <div className="container mx-auto py-16 flex justify-center items-center h-screen">
                <div className="animate-pulse flex flex-col items-center w-full max-w-3xl px-4">
                    <div className="h-10 w-3/4 bg-slate-200 rounded mb-8"></div>
                    <div className="h-64 md:h-96 w-full bg-slate-200 rounded-xl mb-8"></div>
                    <div className="flex flex-wrap gap-4 mb-8 w-full justify-center">
                        <div className="h-6 w-32 bg-slate-200 rounded"></div>
                        <div className="h-6 w-24 bg-slate-200 rounded"></div>
                        <div className="h-6 w-28 bg-slate-200 rounded"></div>
                    </div>
                    <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 w-5/6 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                    <div className="mt-8 h-6 w-20 bg-slate-200 rounded"></div>
                    <div className="flex flex-wrap gap-2 mt-4 w-full justify-center">
                        <div className="h-8 w-20 bg-slate-200 rounded-full"></div>
                        <div className="h-8 w-24 bg-slate-200 rounded-full"></div>
                        <div className="h-8 w-16 bg-slate-200 rounded-full"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-600 text-lg font-inter">
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <h3 className="text-xl font-medium mb-2 text-gray-800">بلاگ مورد نظر یافت نشد!</h3>
                    <p className="text-gray-600">ممکن است لینک اشتباه باشد یا بلاگ حذف شده باشد.</p>
                    <Link to="/blog" className="mt-4 inline-block text-blue-600 hover:underline">
                        بازگشت به لیست بلاگ‌ها
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="container mx-auto p-4 md:p-8 font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="mb-6">
                <Link to="/blog" className="inline-flex items-center space-x-2 space-x-reverse text-primary-500 hover:text-primary-600 transition-colors">
                    <FaArrowRight />
                    <span>بازگشت به لیست بلاگ‌ها</span>
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-10">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 md:h-96 object-cover rounded-xl mb-8 shadow-md"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/900x600/CCCCCC/FFFFFF?text=Image+Not+Found`; }}
                />
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                    {blog.title}
                </h1>

                <div className="flex flex-wrap items-center text-gray-600 text-sm md:text-base mb-8 border-b pb-6 border-gray-200">
                    <div className="flex items-center mr-6 mb-2 md:mb-0">
                        <FaUser className="ml-2 text-blue-500" />
                        <span>نویسنده: <span className="font-semibold text-gray-800">{blog.author}</span></span>
                    </div>
                    <div className="flex items-center mr-6 mb-2 md:mb-0">
                        <FaCalendarAlt className="ml-2 text-green-500" />
                        <span>تاریخ: <span className="font-semibold text-gray-800">{blog.date}</span></span>
                    </div>
                    <div className="flex items-center">
                        <FaTags className="ml-2 text-purple-500" />
                        <span>دسته بندی: <span className="font-semibold text-gray-800">{blog.category}</span></span>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: blog.fullContent || blog.description }}>
                </div>

                <div className="mt-8 border-t pt-6 border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">تگ‌ها:</h3>
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogPostDetail;
