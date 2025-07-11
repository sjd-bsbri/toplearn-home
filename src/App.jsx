import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const DailyDiscounts = lazy(() => import('./pages/DailyDiscounts'));
const Consultation  = lazy(() => import('./pages/Consultation'));
const Collaboration  = lazy(() => import('./pages/Collaboration'));
const JobOpportunities  = lazy(() => import('./pages/JobOpportunities'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const VIPMembershipPage = lazy(() => import('./pages/VIPMembershipPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactFormPage = lazy(() => import('./pages/ContactFormPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));

import LoadingSpinner from './components/ui/LoadingSpinner';

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="discounts" element={<DailyDiscounts />} />
          <Route path="jobs" element={<JobOpportunities  />} />
          <Route path="cooperation" element={<Collaboration  />} />
          <Route path="support" element={<Consultation  />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="vip" element={<VIPMembershipPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact-form" element={<ContactFormPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;