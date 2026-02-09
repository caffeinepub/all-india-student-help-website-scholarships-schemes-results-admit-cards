import { Link, useNavigate } from '@tanstack/react-router';
import { BookOpen, FileText, Award, ClipboardCheck, ArrowRight, Newspaper, GraduationCap, Trophy } from 'lucide-react';
import UpdateCard from '../components/content/UpdateCard';
import { getLatestByCategory } from '../content/seedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import { usePageMeta } from '../seo/usePageMeta';

export default function HomePage() {
  const navigate = useNavigate();
  
  usePageMeta({
    title: 'All-India Education Portal - School, Exams, Scholarships, Results & News',
    description: 'Complete education information platform for students across India. Get updates on school education, competitive exams, scholarships, government schemes, exam results, admit cards, and education news.',
  });

  const latestNews = getLatestByCategory(UpdateCategory.EDUCATION_NEWS, 3);
  const latestSchool = getLatestByCategory(UpdateCategory.SCHOOL_EDUCATION, 3);
  const latestExams = getLatestByCategory(UpdateCategory.COMPETITIVE_EXAMS, 3);
  const latestScholarships = getLatestByCategory(UpdateCategory.SCHOLARSHIPS, 2);
  const latestSchemes = getLatestByCategory(UpdateCategory.SCHEMES, 2);

  const mainCategories = [
    {
      title: 'Education News',
      description: 'Latest policy updates & announcements',
      icon: Newspaper,
      link: '/education-news',
      color: 'text-chart-4',
    },
    {
      title: 'School Education',
      description: 'Class 1-12, CBSE, ICSE, State Boards',
      icon: GraduationCap,
      link: '/school-education',
      color: 'text-chart-5',
    },
    {
      title: 'Competitive Exams',
      description: 'UPSC, SSC, Railway, NEET, JEE',
      icon: Trophy,
      link: '/competitive-exams',
      color: 'text-chart-3',
    },
    {
      title: 'Scholarships',
      description: 'Central & state scholarships',
      icon: Award,
      link: '/scholarships',
      color: 'text-primary',
    },
    {
      title: 'Government Schemes',
      description: 'Student welfare schemes',
      icon: FileText,
      link: '/schemes',
      color: 'text-chart-2',
    },
    {
      title: 'Exam Results',
      description: 'Board & competitive exam results',
      icon: ClipboardCheck,
      link: '/results',
      color: 'text-chart-3',
    },
    {
      title: 'Admit Cards',
      description: 'Download hall tickets',
      icon: BookOpen,
      link: '/admit-cards',
      color: 'text-chart-4',
    },
  ];

  const states = [
    { name: 'Jharkhand', slug: 'jharkhand' },
    { name: 'Bihar', slug: 'bihar' },
    { name: 'Uttar Pradesh', slug: 'uttar-pradesh' },
    { name: 'West Bengal', slug: 'west-bengal' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background border-b">
        <div className="container py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                All-India Education Information Platform
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Your trusted source for school education, competitive exams, scholarships, government schemes, 
                exam results, and education news. Complete information for students across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/education-news"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto"
                >
                  Latest News
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </Link>
                <Link
                  to="/scholarships"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors w-full sm:w-auto"
                >
                  Find Scholarships
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/assets/generated/hero-banner.dim_1600x600.png"
                alt="Students learning together"
                className="w-full h-auto rounded-lg shadow-soft"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="container py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Explore by Category</h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {mainCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.link}
                to={category.link}
                className="group bg-card border rounded-lg p-5 sm:p-6 hover:shadow-card transition-all duration-200"
              >
                <Icon className={`h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4 ${category.color} flex-shrink-0`} />
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest Education News */}
      {latestNews.length > 0 && (
        <section className="bg-muted/30 py-8 sm:py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">Latest Education News</h2>
              <Link
                to="/education-news"
                className="text-sm font-medium text-primary hover:underline flex items-center gap-1 self-start sm:self-auto"
              >
                View all news
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </div>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* School Education Updates */}
      {latestSchool.length > 0 && (
        <section className="container py-8 sm:py-12 md:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">School Education (Class 1–12)</h2>
            <Link
              to="/school-education"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              View all updates
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {latestSchool.map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </div>
        </section>
      )}

      {/* Competitive Exams */}
      {latestExams.length > 0 && (
        <section className="bg-muted/30 py-8 sm:py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">Competitive Exams</h2>
              <Link
                to="/competitive-exams"
                className="text-sm font-medium text-primary hover:underline flex items-center gap-1 self-start sm:self-auto"
              >
                View all exams
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
            </div>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {latestExams.map((update) => (
                <UpdateCard key={update.id} update={update} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scholarships & Schemes */}
      <section className="container py-8 sm:py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Scholarships */}
          {latestScholarships.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold">Scholarships</h2>
                <Link
                  to="/scholarships"
                  className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                >
                  View all
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </Link>
              </div>
              <div className="space-y-4">
                {latestScholarships.map((update) => (
                  <UpdateCard key={update.id} update={update} />
                ))}
              </div>
            </div>
          )}

          {/* Government Schemes */}
          {latestSchemes.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold">Government Schemes</h2>
                <Link
                  to="/schemes"
                  className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                >
                  View all
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </Link>
              </div>
              <div className="space-y-4">
                {latestSchemes.map((update) => (
                  <UpdateCard key={update.id} update={update} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* State-wise Information */}
      <section className="bg-muted/30 py-8 sm:py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">State-wise Education Information</h2>
          <p className="text-center text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Get state-specific updates on scholarships, schemes, board exams, and notifications
          </p>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {states.map((state) => (
              <button
                key={state.slug}
                onClick={() => navigate({ to: '/state/$stateSlug', params: { stateSlug: state.slug } })}
                className="bg-card border rounded-lg p-4 sm:p-5 text-center hover:shadow-card hover:border-primary/50 transition-all duration-200 group w-full"
              >
                <h3 className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors">
                  {state.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="container py-8 sm:py-12">
        <div className="bg-accent/50 border border-primary/20 rounded-lg p-5 sm:p-6 max-w-4xl mx-auto">
          <h3 className="font-bold text-base sm:text-lg mb-2">Important Notice</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All information provided on this portal is for guidance purposes only. We provide original, 
            informational content in simple English to help students across India. Students are advised 
            to verify all details on official government and education board websites before applying or 
            taking any action. We are not affiliated with any government body, education board, or exam 
            conducting authority.
          </p>
        </div>
      </section>
    </div>
  );
}
