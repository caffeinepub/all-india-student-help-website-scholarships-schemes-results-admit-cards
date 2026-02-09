import { usePageMeta } from '../seo/usePageMeta';
import UpdateCard from '../components/content/UpdateCard';
import { getUpdatesByCategory } from '../content/seedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import { Trophy, FileText, Bell, Download } from 'lucide-react';

export default function CompetitiveExamsPage() {
  usePageMeta({
    title: 'Competitive Exams - UPSC, SSC, Railway, Banking, NEET, JEE, CUET',
    description: 'Complete information on competitive exams in India. Get updates on UPSC, SSC, Railway, Banking, NEET, JEE, CUET, state-level exams, admit cards, results, and notifications.',
  });

  const competitiveExamUpdates = getUpdatesByCategory(UpdateCategory.COMPETITIVE_EXAMS);

  return (
    <div className="container py-6 sm:py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="h-8 w-8 text-primary flex-shrink-0" />
          <h1 className="text-3xl sm:text-4xl font-bold">Competitive Exams</h1>
        </div>
        
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
          Your complete guide to competitive examinations in India. Find notifications, admit cards, 
          results, syllabus, and preparation tips for all major exams.
        </p>

        {/* Exam Categories */}
        <div className="grid gap-6 sm:gap-8 mb-12">
          {/* Government Job Exams */}
          <section className="bg-card border rounded-lg p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">Government Job Exams</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="font-bold mb-2">UPSC (Civil Services)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Union Public Service Commission conducts exams for IAS, IPS, IFS, and other 
                  Group A & B services. Prelims, Mains, and Interview.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">SSC (Staff Selection)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Staff Selection Commission exams - CGL, CHSL, MTS, GD, Stenographer for 
                  various government departments.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Railway Exams</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Railway Recruitment Board conducts NTPC, Group D, ALP, RPF, and other exams 
                  for Indian Railways jobs.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Banking Exams</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  IBPS, SBI, RBI exams for PO, Clerk, SO positions in public sector banks. 
                  Prelims and Mains pattern.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">State PSC Exams</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  State Public Service Commission exams for state government jobs - BPSC, UPPSC, 
                  WBPSC, JPSC, and others.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Defense Exams</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  NDA, CDS, AFCAT, Indian Army, Navy, Air Force recruitment exams for officer 
                  and other ranks.
                </p>
              </div>
            </div>
          </section>

          {/* Engineering & Medical Entrance */}
          <section className="bg-card border rounded-lg p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">Engineering & Medical Entrance Exams</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="font-bold mb-2">JEE Main & Advanced</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Joint Entrance Examination for admission to IITs, NITs, IIITs, and other 
                  engineering colleges. Two sessions per year.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">NEET UG</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  National Eligibility cum Entrance Test for MBBS, BDS, AYUSH, and other 
                  undergraduate medical courses.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">CUET (UG & PG)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Common University Entrance Test for admission to central universities and 
                  participating institutions.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">State Engineering Exams</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  State-level engineering entrance exams - WBJEE, UPSEE, KCET, COMEDK, MHT CET, 
                  and others.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">NEET PG & SS</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  National Eligibility cum Entrance Test for postgraduate and super specialty 
                  medical courses.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">GATE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Graduate Aptitude Test in Engineering for M.Tech admission and PSU recruitment. 
                  Multiple subject papers.
                </p>
              </div>
            </div>
          </section>

          {/* Exam Updates Types */}
          <section className="bg-card border rounded-lg p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-6 w-6 text-primary flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold">What You'll Find Here</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Bell className="h-4 w-4 text-primary flex-shrink-0" />
                  Exam Notifications
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Latest exam notifications, vacancy details, eligibility criteria, important dates, 
                  and application process for all competitive exams.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Download className="h-4 w-4 text-primary flex-shrink-0" />
                  Admit Cards
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Download admit cards, hall tickets, exam center details, and important instructions 
                  for various competitive examinations.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                  Results & Answer Keys
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Check exam results, answer keys, cut-off marks, merit lists, and scorecard 
                  download links for all major exams.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary flex-shrink-0" />
                  Syllabus & Pattern
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Detailed syllabus, exam pattern, marking scheme, and preparation strategy for 
                  various competitive examinations.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Latest Competitive Exam Updates */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Latest Competitive Exam Updates</h2>
          {competitiveExamUpdates.length > 0 ? (
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {competitiveExamUpdates.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No competitive exam updates available at the moment.</p>
            </div>
          )}
        </section>

        {/* Important Notice */}
        <div className="mt-12 bg-accent/50 border border-primary/20 rounded-lg p-5 sm:p-6">
          <h3 className="font-bold text-base sm:text-lg mb-2">Important Notice for Exam Aspirants</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All information provided here is for guidance purposes only. Candidates should verify 
            exam dates, eligibility criteria, syllabus, and other details on the official websites 
            of respective exam conducting authorities (UPSC, SSC, NTA, RRB, IBPS, etc.) before 
            applying. We are not affiliated with any exam conducting body.
          </p>
        </div>
      </div>
    </div>
  );
}
