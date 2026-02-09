import UpdateCard from '../components/content/UpdateCard';
import { getUpdatesByCategory } from '../content/seedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import { usePageMeta } from '../seo/usePageMeta';

export default function ResultsPage() {
  usePageMeta({
    title: 'Exam Results - Board & Competitive Exams | Student Help Portal',
    description: 'Check latest exam results for board exams, competitive exams, and entrance tests. Get result dates, direct links, and step-by-step guides to check your results.',
  });

  const results = getUpdatesByCategory(UpdateCategory.RESULTS);

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Exam Results</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Get the latest updates on exam results for board examinations, competitive exams, and entrance tests. 
          Find result dates, checking procedures, and important information.
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No results available at the moment. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
