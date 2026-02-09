import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { Search as SearchIcon, X } from 'lucide-react';
import { usePageMeta } from '../seo/usePageMeta';
import { seedUpdates } from '../content/seedUpdates';
import { searchUpdates, getAllUpdatesSorted } from '../utils/searchUpdates';
import UpdateCard from '../components/content/UpdateCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export default function SearchPage() {
  const navigate = useNavigate();
  const searchParams = useSearch({ from: '/search' }) as { q?: string };
  const initialQuery = searchParams.q || '';
  
  const [query, setQuery] = useState(initialQuery);
  
  usePageMeta({
    title: query ? `Search Results for "${query}" - Education Portal` : 'Search Updates - Education Portal',
    description: 'Search for educational updates, exam notifications, scholarships, results, and more across all categories.',
  });
  
  // Update local state when URL query changes
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);
  
  // Memoize search results for performance
  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return [];
    }
    return searchUpdates(seedUpdates, query);
  }, [query]);
  
  // Get latest updates for empty state
  const latestUpdates = useMemo(() => {
    return getAllUpdatesSorted(seedUpdates).slice(0, 6);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate({ to: '/search', search: { q: query.trim() } });
    }
  };
  
  const handleClear = () => {
    setQuery('');
    navigate({ to: '/search', search: {} });
  };
  
  const showEmptyState = !query.trim();
  const showNoResults = query.trim() && searchResults.length === 0;
  const showResults = query.trim() && searchResults.length > 0;
  
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Search Updates</h1>
          <p className="text-muted-foreground">
            Find educational updates, exam notifications, scholarships, and more
          </p>
        </div>
        
        {/* Search Input */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search updates..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-base"
              autoFocus
            />
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-accent rounded-md transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </form>
        
        {/* Empty State - No Query */}
        {showEmptyState && (
          <div className="space-y-8">
            <div className="bg-muted/50 rounded-lg p-6 sm:p-8 text-center">
              <SearchIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">Start Your Search</h2>
              <p className="text-muted-foreground mb-4">
                Enter keywords to search across all educational updates, exam notifications, scholarships, and more.
              </p>
              <p className="text-sm text-muted-foreground">
                Try searching for: "UPSC", "scholarship", "CBSE", "admit card", "result"
              </p>
            </div>
            
            {/* Latest Updates */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {latestUpdates.map((update) => (
                  <UpdateCard key={update.id} update={update} />
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* No Results State */}
        {showNoResults && (
          <div className="bg-muted/50 rounded-lg p-6 sm:p-8 text-center">
            <div className="max-w-md mx-auto">
              <SearchIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
              <p className="text-muted-foreground mb-4">
                We couldn't find any updates matching "<strong>{query}</strong>"
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Try different keywords or check the spelling. You can also browse our categories to find what you're looking for.
              </p>
              <Button onClick={handleClear} variant="outline">
                Clear Search
              </Button>
            </div>
          </div>
        )}
        
        {/* Search Results */}
        {showResults && (
          <div>
            <div className="mb-6">
              <p className="text-muted-foreground">
                Found <strong>{searchResults.length}</strong> {searchResults.length === 1 ? 'result' : 'results'} for "<strong>{query}</strong>"
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {searchResults.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
