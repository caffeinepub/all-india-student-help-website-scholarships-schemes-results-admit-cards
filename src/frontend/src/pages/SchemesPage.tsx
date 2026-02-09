import UpdateCard from '../components/content/UpdateCard';
import { getUpdatesByCategory } from '../content/seedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import { usePageMeta } from '../seo/usePageMeta';

export default function SchemesPage() {
  usePageMeta({
    title: 'Government Schemes for Students | Student Help Portal',
    description: 'Explore beneficial government schemes and welfare programs for students across India. Get information on eligibility, benefits, and application process.',
  });

  const schemes = getUpdatesByCategory(UpdateCategory.SCHEMES);

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Government Schemes</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Discover government schemes and welfare programs designed to support students and their families. 
          Stay informed about benefits, eligibility criteria, and application procedures.
        </p>
      </div>

      {schemes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {schemes.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No schemes available at the moment. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
