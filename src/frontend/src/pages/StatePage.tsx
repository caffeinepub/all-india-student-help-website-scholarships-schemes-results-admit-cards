import { useParams, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import UpdateCard from '../components/content/UpdateCard';
import { getUpdatesByState } from '../content/seedUpdates';
import { usePageMeta } from '../seo/usePageMeta';

const stateNames: Record<string, string> = {
  jharkhand: 'Jharkhand',
  bihar: 'Bihar',
  'uttar-pradesh': 'Uttar Pradesh',
  'west-bengal': 'West Bengal',
};

export default function StatePage() {
  const { stateSlug } = useParams({ from: '/state/$stateSlug' });
  const stateName = stateNames[stateSlug] || stateSlug;
  const updates = getUpdatesByState(stateSlug);

  usePageMeta({
    title: `${stateName} - Scholarships, Schemes & Results | Student Help Portal`,
    description: `Get latest updates on scholarships, government schemes, exam results, and admit cards specifically for ${stateName} students. State-specific educational information and notifications.`,
  });

  const categories = [
    { name: 'Scholarships', link: '/scholarships' },
    { name: 'Government Schemes', link: '/schemes' },
    { name: 'Exam Results', link: '/results' },
    { name: 'Admit Cards', link: '/admit-cards' },
  ];

  return (
    <div className="container py-6 sm:py-8 md:py-12 px-4">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{stateName}</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Find state-specific information on scholarships, government schemes, exam results, and admit cards for {stateName} students.
        </p>
      </div>

      {/* Quick Links */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Browse by Category</h2>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.link}
              to={category.link}
              className="bg-card border rounded-lg p-4 hover:shadow-card hover:border-primary/50 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold group-hover:text-primary transition-colors break-words flex-1">
                  {category.name}
                </h3>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* State Updates */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Latest Updates for {stateName}</h2>
        {updates.length > 0 ? (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {updates.map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground mb-4 leading-relaxed px-4">
              No state-specific updates available for {stateName} at the moment.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View all updates
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
