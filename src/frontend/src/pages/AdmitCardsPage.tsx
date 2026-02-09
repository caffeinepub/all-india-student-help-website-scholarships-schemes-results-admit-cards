import UpdateCard from '../components/content/UpdateCard';
import { getUpdatesByCategory } from '../content/seedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import { usePageMeta } from '../seo/usePageMeta';

export default function AdmitCardsPage() {
  usePageMeta({
    title: 'Admit Cards - Download Hall Tickets | Student Help Portal',
    description: 'Download admit cards and hall tickets for board exams, competitive exams, and entrance tests. Get release dates, download links, and important instructions.',
  });

  const admitCards = getUpdatesByCategory(UpdateCategory.ADMIT_CARDS);

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Admit Cards</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Download admit cards and hall tickets for various examinations. Stay updated on release dates, 
          download procedures, and important instructions for exam day.
        </p>
      </div>

      {admitCards.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {admitCards.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No admit cards available at the moment. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
