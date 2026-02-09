import { Link, useNavigate } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'student-help-portal';

  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted source for scholarship updates, government schemes, exam results, and admit cards across India.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/scholarships" className="text-muted-foreground hover:text-primary transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-muted-foreground hover:text-primary transition-colors">
                  Government Schemes
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-muted-foreground hover:text-primary transition-colors">
                  Exam Results
                </Link>
              </li>
              <li>
                <Link to="/admit-cards" className="text-muted-foreground hover:text-primary transition-colors">
                  Admit Cards
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">States</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigate({ to: '/state/$stateSlug', params: { stateSlug: 'jharkhand' } })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Jharkhand
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate({ to: '/state/$stateSlug', params: { stateSlug: 'bihar' } })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Bihar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate({ to: '/state/$stateSlug', params: { stateSlug: 'uttar-pradesh' } })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Uttar Pradesh
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate({ to: '/state/$stateSlug', params: { stateSlug: 'west-bengal' } })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  West Bengal
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Student Help Portal. Built with{' '}
            <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
