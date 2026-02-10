import { ClipboardCheck } from 'lucide-react';
import { useCombinedUpdatesByCategory } from '../hooks/useCombinedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import UpdateCard from '../components/content/UpdateCard';
import { usePageMeta } from '../seo/usePageMeta';

export default function AdmitCardsPage() {
  usePageMeta({
    title: 'Admit Cards - Download Hall Tickets for Exams | Student Help Portal',
    description: 'Download admit cards and hall tickets for board exams, competitive exams, and entrance tests. Get direct links and instructions to download your admit card.',
  });

  const { updates, isLoading } = useCombinedUpdatesByCategory(UpdateCategory.ADMIT_CARDS);

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-chart-3/10 rounded-lg">
          <ClipboardCheck className="h-6 w-6 sm:h-8 sm:w-8 text-chart-3" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">Admit Cards</h1>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
        Download admit cards and hall tickets for various examinations. Get timely updates about admit card 
        release dates, direct download links, and step-by-step instructions for board exams, competitive exams, 
        and entrance tests.
      </p>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading admit cards...</p>
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
