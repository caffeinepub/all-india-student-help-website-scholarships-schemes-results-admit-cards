import { useNavigate } from '@tanstack/react-router';
import { Calendar, ArrowRight } from 'lucide-react';
import { UpdateCategory, type UpdateItem, getCategoryLabel } from '../../content/updateTypes';

interface UpdateCardProps {
  update: UpdateItem;
}

const categoryColors: Record<string, string> = {
  'Scholarship': 'bg-primary/10 text-primary',
  'Scheme': 'bg-chart-2/10 text-chart-2',
  'Exam': 'bg-chart-3/10 text-chart-3',
  'News': 'bg-chart-4/10 text-chart-4',
  'School': 'bg-chart-5/10 text-chart-5',
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
  const categoryColor = categoryColors[categoryLabel] || 'bg-muted text-muted-foreground';

  return (
    <article className="group bg-card border rounded-lg p-5 hover:shadow-card transition-all duration-200 flex flex-col">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${categoryColor}`}>
          {categoryLabel}
        </span>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
          <time dateTime={update.date} className="whitespace-nowrap">{formattedDate}</time>
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
        <button onClick={handleClick} className="hover:underline text-left w-full break-words">
          {update.title}
        </button>
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
        {update.excerpt}
      </p>
      
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all mt-auto"
      >
        Read more
        <ArrowRight className="h-4 w-4 flex-shrink-0" />
      </button>
    </article>
  );
}
