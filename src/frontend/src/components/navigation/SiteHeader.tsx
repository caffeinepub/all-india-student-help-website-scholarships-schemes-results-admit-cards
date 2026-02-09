import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, Search } from 'lucide-react';
import { useState } from 'react';
import MobileNav from './MobileNav';
import { Button } from '../ui/button';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate({ to: '/search' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="/assets/generated/site-logo.dim_512x128.png" 
              alt="Education Portal" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <Link
              to="/education-news"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Education News
            </Link>
            <Link
              to="/school-education"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              School (1–12)
            </Link>
            <Link
              to="/competitive-exams"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Competitive Exams
            </Link>
            <Link
              to="/scholarships"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Scholarships
            </Link>
            <Link
              to="/schemes"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Schemes
            </Link>
            <Link
              to="/results"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Results
            </Link>
            <Link
              to="/admit-cards"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Admit Cards
            </Link>
          </nav>

          {/* Desktop Search Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSearchClick}
            className="hidden lg:flex flex-shrink-0"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors flex-shrink-0"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
