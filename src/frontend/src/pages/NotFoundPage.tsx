import { Link, useNavigate } from '@tanstack/react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../seo/usePageMeta';

export default function NotFoundPage() {
  const navigate = useNavigate();

  usePageMeta({
    title: '404 - Page Not Found | Student Help Portal',
    description: 'The page you are looking for could not be found. Return to Student Help Portal home page.',
  });

  return (
    <div className="container py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary mb-4 sm:mb-6">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Page Not Found</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed px-4">
          Sorry, the page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            <Home className="h-4 w-4 flex-shrink-0" />
            Go to Home
          </Link>
          <button
            onClick={() => navigate({ to: -1 as any })}
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4 flex-shrink-0" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
