import { useNavigate } from '@tanstack/react-router';
import { Calendar, ArrowRight } from 'lucide-react';
import { UpdateCategory, type UpdateItem, getCategoryLabel } from '../../content/updateTypes';

interface UpdateCardProps {
  update: UpdateItem;
}

const categoryColors: Record<string, string> = {
  'Scholarship': 'bg-primary/15 text-primary border-primary/20',
  'Scheme': 'bg-chart-2/15 text-chart-2 border-chart-2/20',
  'Exam': 'bg-chart-3/15 text-chart-3 border-chart-3/20',
  'News': 'bg-chart-4/15 text-chart-4 border-chart-4/20',
  'School': 'bg-chart-5/15 text-chart-5 border-chart-5/20',
};

export default function UpdateCard({ update }: UpdateCardProps) {
  const navigate = useNavigate();
  
  const formattedDate = new Date(update.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleClick = () => {
    navigate({ to: '/post/$postId', params: { postId: update.id } });
  };

  const categoryLabel = getCategoryLabel(update.category);
  const categoryColor = categoryColors[categoryLabel] || 'bg-muted text-muted-foreground border-muted';

  const fallbackImage = '/assets/generated/site-logo.dim_512x128.png';
  const imageUrl = update.imageUrl || fallbackImage;

  return (
    <article className="group bg-card border rounded-xl overflow-hidden hover:shadow-paper transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48 bg-muted overflow-hidden">
        <img
          src={imageUrl}
          alt={update.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap border ${categoryColor}`}>
            {categoryLabel}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
            <time dateTime={update.date} className="whitespace-nowrap">{formattedDate}</time>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
          <button onClick={handleClick} className="hover:underline text-left w-full break-words">
            {update.title}
          </button>
        </h3>
        
        <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
          {update.excerpt}
        </p>
        
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all mt-auto"
        >
          Read more
          <ArrowRight className="h-4 w-4 flex-shrink-0" />
        </button>
      </div>
    </article>
  );
}
