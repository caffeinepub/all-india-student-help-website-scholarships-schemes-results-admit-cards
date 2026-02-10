import { Link } from '@tanstack/react-router';
import { ArrowRight, BookOpen, GraduationCap, Trophy, DollarSign, FileText, Award, ClipboardCheck } from 'lucide-react';
import { useCombinedUpdatesByCategory } from '../hooks/useCombinedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import UpdateCard from '../components/content/UpdateCard';
import { usePageMeta } from '../seo/usePageMeta';

export default function HomePage() {
  usePageMeta({
    title: 'Student Help Portal - Scholarships, Schemes, Results & Admit Cards',
    description: 'Your one-stop destination for education news, scholarships, government schemes, exam results, and admit cards across India. Stay updated with the latest opportunities for students.',
  });

  const { updates: educationNews } = useCombinedUpdatesByCategory(UpdateCategory.EDUCATION_NEWS);
  const { updates: schoolEducation } = useCombinedUpdatesByCategory(UpdateCategory.SCHOOL_EDUCATION);
  const { updates: competitiveExams } = useCombinedUpdatesByCategory(UpdateCategory.COMPETITIVE_EXAMS);
  const { updates: scholarships } = useCombinedUpdatesByCategory(UpdateCategory.SCHOLARSHIPS);
  const { updates: schemes } = useCombinedUpdatesByCategory(UpdateCategory.SCHEMES);
  const { updates: results } = useCombinedUpdatesByCategory(UpdateCategory.RESULTS);
  const { updates: admitCards } = useCombinedUpdatesByCategory(UpdateCategory.ADMIT_CARDS);

  const latestEducationNews = educationNews.slice(0, 3);
  const latestSchoolEducation = schoolEducation.slice(0, 3);
  const latestCompetitiveExams = competitiveExams.slice(0, 3);
  const latestScholarships = scholarships.slice(0, 3);
  const latestSchemes = schemes.slice(0, 3);
  const latestResults = results.slice(0, 3);
  const latestAdmitCards = admitCards.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/8 via-background to-accent/5 border-b">
        <div className="container py-16 sm:py-20 md:py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight break-words">
              Your Complete Student Help Portal
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Stay updated with the latest education news, scholarships, government schemes, exam results, and admit cards. 
              All information verified and presented in simple language for Indian students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/scholarships"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-soft"
              >
                <DollarSign className="h-5 w-5 flex-shrink-0" />
                Browse Scholarships
              </Link>
              <Link
                to="/search"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 rounded-lg hover:bg-muted transition-colors font-medium shadow-soft"
              >
                Search Updates
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education News Section */}
      {latestEducationNews.length > 0 && (
        <section className="py-12 sm:py-16 border-b bg-accent/5">
          <div className="container px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-chart-4/15 rounded-xl">
                  <BookOpen className="h-7 w-7 text-chart-4" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">Education News</h2>
              </div>
              <Link
                to="/education-news"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View All
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestEducationNews.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* School Education Section */}
      {latestSchoolEducation.length > 0 && (
        <section className="py-12 sm:py-16 border-b">
          <div className="container px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-chart-5/15 rounded-xl">
                  <GraduationCap className="h-7 w-7 text-chart-5" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">School Education</h2>
              </div>
              <Link
                to="/school-education"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View All
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestSchoolEducation.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Competitive Exams Section */}
      {latestCompetitiveExams.length > 0 && (
        <section className="py-12 sm:py-16 border-b bg-accent/5">
          <div className="container px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-chart-3/15 rounded-xl">
                  <Trophy className="h-7 w-7 text-chart-3" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">Competitive Exams</h2>
              </div>
              <Link
                to="/competitive-exams"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View All
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestCompetitiveExams.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scholarships Section */}
      {latestScholarships.length > 0 && (
        <section className="py-12 sm:py-16 border-b">
          <div className="container px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/15 rounded-xl">
                  <DollarSign className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">Scholarships</h2>
              </div>
              <Link
                to="/scholarships"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View All
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestScholarships.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Schemes Section */}
      {latestSchemes.length > 0 && (
        <section className="py-12 sm:py-16 border-b bg-accent/5">
          <div className="container px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-chart-2/15 rounded-xl">
                  <FileText className="h-7 w-7 text-chart-2" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">Government Schemes</h2>
              </div>
              <Link
                to="/schemes"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View All
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestSchemes.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {latestResults.length > 0 && (
        <section className="py-12 sm:py-16 border-b">
          <div className="container px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-chart-3/15 rounded-xl">
                  <Award className="h-7 w-7 text-chart-3" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">Exam Results</h2>
              </div>
              <Link
                to="/results"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View All
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestResults.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Admit Cards Section */}
      {latestAdmitCards.length > 0 && (
        <section className="py-12 sm:py-16 bg-accent/5">
          <div className="container px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-chart-3/15 rounded-xl">
                  <ClipboardCheck className="h-7 w-7 text-chart-3" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">Admit Cards</h2>
              </div>
              <Link
                to="/admit-cards"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View All
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestAdmitCards.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
