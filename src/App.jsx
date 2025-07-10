import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const DailyDiscounts = lazy(() => import('../src/components/features/DailyDiscounts'));
const Consultation  = lazy(() => import('../src/components/features/Consultation'));
const Collaboration  = lazy(() => import('../src/components/features/Collaboration'));
const JobOpportunities  = lazy(() => import('../src/components/features/JobOpportunities'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;