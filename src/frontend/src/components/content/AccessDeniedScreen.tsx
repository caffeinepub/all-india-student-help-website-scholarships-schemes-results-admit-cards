import { Link } from '@tanstack/react-router';
import { ShieldAlert, Home } from 'lucide-react';

export default function AccessDeniedScreen() {
  return (
    <div className="container py-12 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-destructive/10 p-6">
            <ShieldAlert className="h-12 w-12 text-destructive" />
          </div>
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Access Denied</h1>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You don't have permission to access this page. This area is restricted to authorized administrators only.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <Home className="h-4 w-4" />
          Go to Home
        </Link>
      </div>
    </div>
  );
}
