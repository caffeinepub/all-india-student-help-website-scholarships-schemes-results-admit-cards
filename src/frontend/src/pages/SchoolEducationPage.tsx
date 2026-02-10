import { GraduationCap } from 'lucide-react';
import { useCombinedUpdatesByCategory } from '../hooks/useCombinedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import UpdateCard from '../components/content/UpdateCard';
import { usePageMeta } from '../seo/usePageMeta';

export default function SchoolEducationPage() {
  usePageMeta({
    title: 'School Education (Class 1-12) - CBSE, ICSE, State Boards | Student Help Portal',
    description: 'Complete information about school education in India including CBSE, ICSE, and state board updates. Syllabus, exam dates, results, and scholarships for Class 1 to 12 students.',
  });

  const { updates, isLoading } = useCombinedUpdatesByCategory(UpdateCategory.SCHOOL_EDUCATION);

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-chart-5/10 rounded-lg">
          <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-chart-5" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">School Education</h1>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
        Everything you need to know about school education in India from Class 1 to Class 12. 
        Get updates about CBSE, ICSE, and various state boards including syllabus, exam patterns, 
        timetables, results, and scholarship opportunities for school students.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3">Education Boards</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• CBSE (Central Board of Secondary Education)</li>
            <li>• ICSE/ISC (Council for Indian School Certificate Examinations)</li>
            <li>• State Boards (Bihar, UP, West Bengal, Maharashtra, etc.)</li>
          </ul>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3">What We Cover</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Syllabus and curriculum updates</li>
            <li>• Exam dates and timetables</li>
            <li>• Board exam results</li>
            <li>• Scholarships for school students</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Latest School Education Updates</h2>

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
