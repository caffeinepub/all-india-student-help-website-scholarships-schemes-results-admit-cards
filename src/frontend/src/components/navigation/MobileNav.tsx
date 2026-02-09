import { Link, useNavigate } from '@tanstack/react-router';
import { X, Home, Newspaper, GraduationCap, Trophy, Award, FileText, ClipboardCheck, BookOpen, Info, Mail, Search } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const mainLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/education-news', label: 'Education News', icon: Newspaper },
    { to: '/school-education', label: 'School (Class 1–12)', icon: GraduationCap },
    { to: '/competitive-exams', label: 'Competitive Exams', icon: Trophy },
    { to: '/scholarships', label: 'Scholarships', icon: Award },
    { to: '/schemes', label: 'Government Schemes', icon: FileText },
    { to: '/results', label: 'Exam Results', icon: ClipboardCheck },
    { to: '/admit-cards', label: 'Admit Cards', icon: BookOpen },
  ];

  const states = [
    { name: 'Jharkhand', slug: 'jharkhand' },
    { name: 'Bihar', slug: 'bihar' },
    { name: 'Uttar Pradesh', slug: 'uttar-pradesh' },
    { name: 'West Bengal', slug: 'west-bengal' },
  ];

  const footerLinks = [
    { to: '/about', label: 'About Us', icon: Info },
    { to: '/contact', label: 'Contact Us', icon: Mail },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: '/search', search: { q: searchQuery.trim() } });
      onClose();
      setSearchQuery('');
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-6 mt-6">
          {/* Search Section */}
          <div className="px-2">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Search updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!searchQuery.trim()}>
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Main Navigation */}
          <div className="space-y-2">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-accent transition-colors text-left"
                >
                  <Icon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* State-wise Section */}
          <div>
            <h3 className="px-4 text-sm font-semibold text-muted-foreground mb-2">State-wise Information</h3>
            <div className="space-y-2">
              {states.map((state) => (
                <Link
                  key={state.slug}
                  to="/state/$stateSlug"
                  params={{ stateSlug: state.slug }}
                  onClick={onClose}
                  className="block w-full px-4 py-3 rounded-lg hover:bg-accent transition-colors text-left"
                >
                  <span className="font-medium">{state.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t pt-4 space-y-2">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-accent transition-colors text-left"
                >
                  <Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
