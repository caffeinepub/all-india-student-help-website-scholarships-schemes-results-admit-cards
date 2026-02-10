import { useState, useEffect } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { Search as SearchIcon } from 'lucide-react';
import { useCombinedUpdates } from '../hooks/useCombinedUpdates';
import { searchUpdates } from '../utils/searchUpdates';
import UpdateCard from '../components/content/UpdateCard';
import { Input } from '@/components/ui/input';
import { usePageMeta } from '../seo/usePageMeta';

export default function SearchPage() {
  const navigate = useNavigate();
  const searchParams = useSearch({ from: '/search' });
  const queryParam = (searchParams as { q?: string }).q || '';

  const [query, setQuery] = useState(queryParam);
  const { updates } = useCombinedUpdates();

  usePageMeta({
    title: query ? `Search Results for "${query}" | Student Help Portal` : 'Search Updates | Student Help Portal',
    description: 'Search for scholarships, schemes, exam results, admit cards, and education news across India. Find the information you need quickly and easily.',
  });

  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate({ to: '/search', search: { q: query.trim() } });
    }
  };

  const results = query.trim() ? searchUpdates(updates, query) : [];
  const latestUpdates = [...updates]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Search Updates</h1>
        
        <form onSubmit={handleSearch} className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for scholarships, exams, results, schemes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-4 py-6 text-base"
          />
        </form>
      </div>

      {!query.trim() ? (
        <div>
          <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestUpdates.map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </div>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            No results found for "<strong>{query}</strong>"
          </p>
          <p className="text-sm text-muted-foreground">
            Try different keywords or browse our latest updates below
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestUpdates.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Search Results ({results.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
