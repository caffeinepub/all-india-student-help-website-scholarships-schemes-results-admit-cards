import { useParams } from '@tanstack/react-router';
import { MapPin } from 'lucide-react';
import { useCombinedUpdates } from '../hooks/useCombinedUpdates';
import UpdateCard from '../components/content/UpdateCard';
import { usePageMeta } from '../seo/usePageMeta';

const stateNames: Record<string, string> = {
  'bihar': 'Bihar',
  'uttar-pradesh': 'Uttar Pradesh',
  'west-bengal': 'West Bengal',
  'jharkhand': 'Jharkhand',
  'madhya-pradesh': 'Madhya Pradesh',
  'rajasthan': 'Rajasthan',
  'maharashtra': 'Maharashtra',
  'karnataka': 'Karnataka',
  'tamil-nadu': 'Tamil Nadu',
  'kerala': 'Kerala',
  'andhra-pradesh': 'Andhra Pradesh',
  'telangana': 'Telangana',
  'gujarat': 'Gujarat',
  'punjab': 'Punjab',
  'haryana': 'Haryana',
};

export default function StatePage() {
  const { stateSlug } = useParams({ from: '/state/$stateSlug' });
  const { updates } = useCombinedUpdates();
  
  const stateName = stateNames[stateSlug] || stateSlug;

  const stateUpdates = updates.filter((update) =>
    update.stateTags?.includes(stateSlug)
  );

  usePageMeta({
    title: `${stateName} - Education Updates, Scholarships & Schemes | Student Help Portal`,
    description: `Get the latest education updates, scholarships, government schemes, and exam information specific to ${stateName}. Stay informed about state-specific opportunities for students.`,
  });

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold break-words">{stateName}</h1>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
        Find all education-related updates, scholarships, government schemes, and exam information 
        specific to {stateName}. We bring you state-specific opportunities and announcements to help 
        students stay informed.
      </p>

      {stateUpdates.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No updates available for {stateName} at the moment. Check back soon for new information.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stateUpdates.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      )}
    </div>
  );
}
