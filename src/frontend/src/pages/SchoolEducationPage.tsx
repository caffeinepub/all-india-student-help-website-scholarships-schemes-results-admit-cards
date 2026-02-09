import { usePageMeta } from '../seo/usePageMeta';
import UpdateCard from '../components/content/UpdateCard';
import { getUpdatesByCategory } from '../content/seedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';

export default function SchoolEducationPage() {
  usePageMeta({
    title: 'School Education (Class 1-12) - CBSE, ICSE, State Boards Information',
    description: 'Complete information on school education for Class 1 to 12. Get updates on CBSE, ICSE, State Boards, exam dates, syllabus, timetables, results, and school scholarships.',
  });

  const schoolUpdates = getUpdatesByCategory(UpdateCategory.SCHOOL_EDUCATION);

  return (
    <div className="container py-6 sm:py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
          <h1 className="text-3xl sm:text-4xl font-bold">School Education (Class 1–12)</h1>
        </div>
        
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
          Your complete guide to school education in India. Find information on board exams, syllabus, 
          timetables, results, and scholarships for students from Class 1 to 12.
        </p>

        {/* Information Sections */}
        <div className="grid gap-6 sm:gap-8 mb-12">
          {/* Boards Section */}
          <section className="bg-card border rounded-lg p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">Education Boards</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="font-bold mb-2">CBSE (Central Board)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Central Board of Secondary Education - National level board with schools across India. 
                  Follows NCERT curriculum.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">ICSE / ISC</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Council for the Indian School Certificate Examinations - Detailed syllabus with 
                  emphasis on English language.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">State Boards</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  State-level education boards (Bihar Board, UP Board, West Bengal Board, etc.) 
                  conducting Class 10 and 12 exams.
                </p>
              </div>
            </div>
          </section>

          {/* Exams & Timetable Section */}
          <section className="bg-card border rounded-lg p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">Board Exams & Timetable</h2>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold mb-1">Class 10 Board Exams</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Check exam dates, timetable, syllabus, and preparation tips for Class 10 board 
                  examinations from CBSE, ICSE, and State Boards.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-1">Class 12 Board Exams</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get complete information on Class 12 board exam schedule, subject-wise syllabus, 
                  exam pattern, and important guidelines.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-1">Results & Mark Sheets</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Find out how to check board exam results online, download mark sheets, and 
                  understand the grading system.
                </p>
              </div>
            </div>
          </section>

          {/* Scholarships Section */}
          <section className="bg-card border rounded-lg p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">School Scholarships & Schemes</h2>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold mb-1">Pre-Matric Scholarships (Class 1-10)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Financial assistance for students from Class 1 to 10 belonging to SC/ST/OBC/Minority 
                  and economically weaker sections.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-1">Merit-Based Scholarships</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scholarships for meritorious students who score high marks in board examinations. 
                  State and central government schemes available.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-1">State-Specific Schemes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Various state governments offer special scholarship schemes for school students. 
                  Check eligibility and application process for your state.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Latest School Updates */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Latest School Education Updates</h2>
          {schoolUpdates.length > 0 ? (
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {schoolUpdates.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No school education updates available at the moment.</p>
            </div>
          )}
        </section>

        {/* Important Notice */}
        <div className="mt-12 bg-accent/50 border border-primary/20 rounded-lg p-5 sm:p-6">
          <h3 className="font-bold text-base sm:text-lg mb-2">Important Notice for Students & Parents</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All information provided here is for guidance purposes only. Students and parents should 
            verify exam dates, syllabus, and other details on the official websites of respective 
            education boards (CBSE, ICSE, State Boards) before taking any action. We are not affiliated 
            with any education board.
          </p>
        </div>
      </div>
    </div>
  );
}
