import { usePageMeta } from '../seo/usePageMeta';
import UpdateCard from '../components/content/UpdateCard';
import { getUpdatesByCategory } from '../content/seedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import { Newspaper } from 'lucide-react';

export default function EducationNewsPage() {
  usePageMeta({
    title: 'Education News - Latest Updates on Education Policy & Announcements',
    description: 'Stay updated with the latest education news, government announcements, policy changes, and exam-related updates from across India. Verified information for students and parents.',
  });

  const newsUpdates = getUpdatesByCategory(UpdateCategory.EDUCATION_NEWS);

  return (
    <div className="container py-6 sm:py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Newspaper className="h-8 w-8 text-primary flex-shrink-0" />
          <h1 className="text-3xl sm:text-4xl font-bold">Education News</h1>
        </div>
        
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
          Get the latest news and updates on education policies, government announcements, board exam changes, 
          and important notifications. All information is for guidance purposes - please verify details on 
          official government websites before taking any action.
        </p>

        {newsUpdates.length > 0 ? (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {newsUpdates.map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-lg">
            <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No education news updates available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
