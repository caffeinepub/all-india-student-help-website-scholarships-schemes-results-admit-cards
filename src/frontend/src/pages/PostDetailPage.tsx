import { useParams, Link } from '@tanstack/react-router';
import { Calendar, ArrowLeft } from 'lucide-react';
import { useBackendPostById } from '../hooks/useBackendPosts';
import { getUpdateById } from '../content/seedUpdates';
import { usePageMeta } from '../seo/usePageMeta';
import { getCategoryLabel } from '../content/updateTypes';

export default function PostDetailPage() {
  const { postId } = useParams({ from: '/post/$postId' });
  
  const { data: backendPost, isLoading } = useBackendPostById(postId);
  
  const seedPost = getUpdateById(postId);
  
  const update = backendPost || seedPost;

  usePageMeta({
    title: update ? `${update.title} | Student Help Portal` : 'Post Not Found',
    description: update?.excerpt || 'Read detailed information about this update on Student Help Portal.',
  });

  if (isLoading) {
    return (
      <div className="container py-12 text-center px-4">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!update) {
    return (
      <div className="container py-12 text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          The post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          <ArrowLeft className="h-4 w-4 flex-shrink-0" />
          Back to Home
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(update.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const categoryLabel = getCategoryLabel(update.category);

  const fallbackHeroImage = '/assets/generated/ncert-sample-papers.dim_1600x900.jpg';
  const heroImage = update.imageUrl || fallbackHeroImage;

  return (
    <div className="container py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 flex-shrink-0" />
          Back to Home
        </Link>

        <article className="bg-card border rounded-xl overflow-hidden shadow-paper">
          {/* Hero Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-muted overflow-hidden">
            <img
              src={heroImage}
              alt={update.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = fallbackHeroImage;
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold px-4 py-2 rounded-full bg-primary/15 text-primary border border-primary/20 whitespace-nowrap">
                {categoryLabel}
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 flex-shrink-0" />
                <time dateTime={update.date} className="whitespace-nowrap">{formattedDate}</time>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight break-words">{update.title}</h1>

            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-foreground prose-ol:text-foreground"
              dangerouslySetInnerHTML={{ __html: update.body }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
