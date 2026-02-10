import { BookOpen } from 'lucide-react';
import { useCombinedUpdatesByCategory } from '../hooks/useCombinedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import UpdateCard from '../components/content/UpdateCard';
import { usePageMeta } from '../seo/usePageMeta';

export default function EducationNewsPage() {
  usePageMeta({
    title: 'Education News - Latest Updates for Students | Student Help Portal',
    description: 'Stay informed with the latest education news, policy updates, and important announcements for students across India. Verified information in simple language.',
  });

  const { updates, isLoading } = useCombinedUpdatesByCategory(UpdateCategory.EDUCATION_NEWS);

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-chart-4/10 rounded-lg">
          <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-chart-4" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">Education News</h1>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
        Get the latest education news, policy updates, and important announcements from across India. 
        We bring you verified information about changes in curriculum, exam patterns, new educational 
        initiatives, and more. Always verify important details on official government websites before taking action.
      </p>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading updates...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      )}
    </div>
  );
}
