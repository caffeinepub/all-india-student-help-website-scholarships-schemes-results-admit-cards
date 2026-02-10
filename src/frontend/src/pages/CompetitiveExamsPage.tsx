import { Trophy } from 'lucide-react';
import { useCombinedUpdatesByCategory } from '../hooks/useCombinedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import UpdateCard from '../components/content/UpdateCard';
import { usePageMeta } from '../seo/usePageMeta';

export default function CompetitiveExamsPage() {
  usePageMeta({
    title: 'Competitive Exams - UPSC, SSC, Railway, Banking, NEET, JEE | Student Help Portal',
    description: 'Complete guide to competitive exams in India including UPSC, SSC, Railway, Banking, NEET, JEE, and more. Get notifications, admit cards, results, and preparation tips.',
  });

  const { updates, isLoading } = useCombinedUpdatesByCategory(UpdateCategory.COMPETITIVE_EXAMS);

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-chart-3/10 rounded-lg">
          <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-chart-3" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">Competitive Exams</h1>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
        Your complete guide to competitive examinations in India. Get timely updates about exam notifications, 
        application dates, admit cards, results, and preparation strategies for various government job exams 
        and entrance tests.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3">Government Job Exams</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• UPSC (Civil Services, NDA, CDS)</li>
            <li>• SSC (CGL, CHSL, MTS, GD)</li>
            <li>• Railway (RRB NTPC, Group D, ALP)</li>
            <li>• Banking (IBPS, SBI, RBI)</li>
            <li>• State PSC Exams</li>
          </ul>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3">Entrance Exams</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• NEET (Medical entrance)</li>
            <li>• JEE Main & Advanced (Engineering)</li>
            <li>• CUET (Central Universities)</li>
            <li>• CLAT (Law entrance)</li>
            <li>• CAT, XAT (Management)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Latest Exam Updates</h2>

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
