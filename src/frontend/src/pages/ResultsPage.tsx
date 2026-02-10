import { Award } from 'lucide-react';
import { useCombinedUpdatesByCategory } from '../hooks/useCombinedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import UpdateCard from '../components/content/UpdateCard';
import { usePageMeta } from '../seo/usePageMeta';

export default function ResultsPage() {
  usePageMeta({
    title: 'Exam Results - Board, Competitive & Entrance Exam Results | Student Help Portal',
    description: 'Check latest exam results for board exams, competitive exams, and entrance tests. Get direct links to result portals and step-by-step guides to check your results.',
  });

  const { updates, isLoading } = useCombinedUpdatesByCategory(UpdateCategory.RESULTS);

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-chart-3/10 rounded-lg">
          <Award className="h-6 w-6 sm:h-8 sm:w-8 text-chart-3" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">Exam Results</h1>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
        Get the latest updates about exam results for board examinations, competitive exams, and entrance tests. 
        Find direct links to official result portals and step-by-step instructions to check your results online.
      </p>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading results...</p>
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
