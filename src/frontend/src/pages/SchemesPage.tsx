import { FileText } from 'lucide-react';
import { useCombinedUpdatesByCategory } from '../hooks/useCombinedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import UpdateCard from '../components/content/UpdateCard';
import { usePageMeta } from '../seo/usePageMeta';

export default function SchemesPage() {
  usePageMeta({
    title: 'Government Schemes for Students - Central & State Welfare Programs | Student Help Portal',
    description: 'Explore government schemes and welfare programs for students in India. Information about education schemes, skill development programs, and student benefits.',
  });

  const { updates, isLoading } = useCombinedUpdatesByCategory(UpdateCategory.SCHEMES);

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-chart-2/10 rounded-lg">
          <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-chart-2" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">Government Schemes</h1>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
        Stay informed about government schemes and welfare programs designed for students across India. 
        Learn about education schemes, skill development initiatives, and various student benefit programs 
        launched by central and state governments.
      </p>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading schemes...</p>
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
