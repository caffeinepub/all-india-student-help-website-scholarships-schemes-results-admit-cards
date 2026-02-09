import { useParams, Link } from '@tanstack/react-router';
import { Calendar, ArrowLeft } from 'lucide-react';
import { getUpdateById } from '../content/seedUpdates';
import { usePageMeta } from '../seo/usePageMeta';
import { getCategoryLabel } from '../content/updateTypes';

export default function PostDetailPage() {
  const { postId } = useParams({ from: '/post/$postId' });
  const update = getUpdateById(postId);

  usePageMeta({
    title: update ? `${update.title} | Student Help Portal` : 'Post Not Found',
    description: update?.excerpt || 'Read detailed information about this update on Student Help Portal.',
  });

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

  return (
    <div className="container py-6 sm:py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 flex-shrink-0" />
          Back to Home
        </Link>

        <article className="bg-card border rounded-lg p-5 sm:p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
              {categoryLabel}
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
              <time dateTime={update.date} className="whitespace-nowrap">{formattedDate}</time>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight break-words">{update.title}</h1>

          <div
            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:break-words prose-p:break-words prose-li:break-words"
            dangerouslySetInnerHTML={{ __html: update.body }}
          />

          <div className="mt-8 pt-6 border-t">
            <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
              Disclaimer: This information is provided for guidance purposes only. Please verify all details on 
              official government websites before taking any action. We are not responsible for any changes in 
              dates, eligibility criteria, or procedures.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
