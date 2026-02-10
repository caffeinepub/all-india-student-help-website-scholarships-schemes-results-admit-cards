import { useState } from 'react';
import { DollarSign } from 'lucide-react';
import { useCombinedUpdatesByCategory } from '../hooks/useCombinedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import UpdateCard from '../components/content/UpdateCard';
import { usePageMeta } from '../seo/usePageMeta';

const stateFilters = [
  { label: 'All India', value: 'all' },
  { label: 'Bihar', value: 'bihar' },
  { label: 'Uttar Pradesh', value: 'uttar-pradesh' },
  { label: 'West Bengal', value: 'west-bengal' },
  { label: 'Jharkhand', value: 'jharkhand' },
  { label: 'Madhya Pradesh', value: 'madhya-pradesh' },
  { label: 'Rajasthan', value: 'rajasthan' },
];

export default function ScholarshipsPage() {
  usePageMeta({
    title: 'Scholarships for Students - Central & State Government Schemes | Student Help Portal',
    description: 'Find scholarships for students across India. Central and state government scholarship schemes for SC/ST/OBC, minority students, merit-based, and need-based financial aid.',
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const { updates, isLoading } = useCombinedUpdatesByCategory(UpdateCategory.SCHOLARSHIPS);

  const filteredUpdates =
    activeFilter === 'all'
      ? updates
      : updates.filter((update) => update.stateTags?.includes(activeFilter));

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">Scholarships</h1>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
        Discover scholarship opportunities for students across India. Find central and state government 
        scholarships, merit-based awards, and financial aid programs for SC/ST/OBC, minority students, 
        and economically weaker sections.
      </p>

      <div className="bg-card border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">How to Apply for Scholarships</h2>
        <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
          <li>Check eligibility criteria carefully (marks, income, category)</li>
          <li>Gather required documents (mark sheets, income certificate, caste certificate)</li>
          <li>Register on the scholarship portal with valid email and mobile number</li>
          <li>Fill the application form accurately and upload documents</li>
          <li>Submit before the deadline and save the application number</li>
          <li>Track your application status regularly on the portal</li>
        </ol>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Filter by State</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {stateFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === filter.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading scholarships...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUpdates.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      )}
    </div>
  );
}
