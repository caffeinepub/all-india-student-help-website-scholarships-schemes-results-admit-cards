import { useState } from 'react';
import UpdateCard from '../components/content/UpdateCard';
import { getUpdatesByCategory, getUpdatesByState } from '../content/seedUpdates';
import { UpdateCategory } from '../content/updateTypes';
import { usePageMeta } from '../seo/usePageMeta';

export default function ScholarshipsPage() {
  usePageMeta({
    title: 'Scholarships - National & State-wise | Student Help Portal',
    description: 'Find latest scholarship opportunities for students across India. Browse national scholarships and state-specific schemes for Jharkhand, Bihar, UP, West Bengal and more.',
  });

  const [selectedFilter, setSelectedFilter] = useState<'all' | string>('all');

  const allScholarships = getUpdatesByCategory(UpdateCategory.SCHOLARSHIPS);
  const jharkhandScholarships = getUpdatesByState('jharkhand');
  const biharScholarships = getUpdatesByState('bihar');
  const upScholarships = getUpdatesByState('uttar-pradesh');
  const wbScholarships = getUpdatesByState('west-bengal');

  const getFilteredUpdates = () => {
    switch (selectedFilter) {
      case 'jharkhand':
        return jharkhandScholarships.filter(u => u.category === UpdateCategory.SCHOLARSHIPS);
      case 'bihar':
        return biharScholarships.filter(u => u.category === UpdateCategory.SCHOLARSHIPS);
      case 'uttar-pradesh':
        return upScholarships.filter(u => u.category === UpdateCategory.SCHOLARSHIPS);
      case 'west-bengal':
        return wbScholarships.filter(u => u.category === UpdateCategory.SCHOLARSHIPS);
      default:
        return allScholarships;
    }
  };

  const filteredUpdates = getFilteredUpdates();

  const filters = [
    { label: 'All India', value: 'all' },
    { label: 'Jharkhand', value: 'jharkhand' },
    { label: 'Bihar', value: 'bihar' },
    { label: 'Uttar Pradesh', value: 'uttar-pradesh' },
    { label: 'West Bengal', value: 'west-bengal' },
  ];

  return (
    <div className="container py-6 sm:py-8 md:py-12 px-4">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Scholarships</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Explore scholarship opportunities for students across India. Find national and state-specific scholarships 
          to support your education journey.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6 sm:mb-8 border-b">
        <div className="flex gap-1 overflow-x-auto pb-px scroll-x-safe">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`px-3 sm:px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 flex-shrink-0 ${
                selectedFilter === filter.value
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scholarship Guide Section */}
      {selectedFilter === 'all' && (
        <div className="bg-card border rounded-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">How to Apply for Scholarships in India</h2>
          
          <h3 className="text-base sm:text-lg font-semibold mb-3 mt-6">Eligibility Overview</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Scholarship eligibility varies by scheme, but common criteria include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 leading-relaxed">
            <li>Indian citizenship and valid Aadhaar card</li>
            <li>Enrollment in a recognized educational institution</li>
            <li>Minimum academic performance (usually 50-60% marks)</li>
            <li>Family income below specified limits (typically ₹2-8 lakh per year)</li>
            <li>Category-specific criteria (SC/ST/OBC/Minority/General)</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold mb-3">Important Dates</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Most scholarship applications open between August and October for the current academic year. 
            Some schemes have multiple application windows. Always check the official portal for exact dates.
          </p>

          <h3 className="text-base sm:text-lg font-semibold mb-3">Required Documents</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 leading-relaxed">
            <li>Aadhaar Card (mandatory for most schemes)</li>
            <li>Income Certificate (issued within the last 6 months)</li>
            <li>Caste Certificate (if applicable)</li>
            <li>Previous year mark sheets and certificates</li>
            <li>Current year admission proof and fee receipt</li>
            <li>Bank account details (preferably student's own account)</li>
            <li>Passport size photographs</li>
            <li>Disability certificate (if applicable)</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold mb-3">How to Apply (General Guidance)</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6 leading-relaxed">
            <li>Visit the official scholarship portal (National Scholarship Portal or state portal)</li>
            <li>Register using your Aadhaar number and mobile number</li>
            <li>Verify your mobile number and email through OTP</li>
            <li>Log in with your credentials</li>
            <li>Fill in personal, academic, and bank details carefully</li>
            <li>Upload all required documents in the specified format (usually PDF/JPG, max 200KB)</li>
            <li>Review all information before final submission</li>
            <li>Submit the application and save the application number</li>
            <li>Track your application status regularly on the portal</li>
          </ol>

          <h3 className="text-base sm:text-lg font-semibold mb-3">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-1">Q: Can I apply for multiple scholarships?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A: Yes, eligible students can apply for multiple scholarships through the same portal, provided they meet 
                the eligibility criteria for each scheme.
              </p>
            </div>

            <div>
              <p className="font-medium mb-1">Q: What if I don't have an Aadhaar card?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A: Aadhaar is mandatory for most government scholarships. If you don't have one, apply immediately at 
                your nearest Aadhaar enrollment center.
              </p>
            </div>

            <div>
              <p className="font-medium mb-1">Q: When will the scholarship amount be credited?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A: After verification and approval by the concerned authorities, scholarship amounts are typically credited 
                within 2-3 months. The exact timeline varies by scheme.
              </p>
            </div>

            <div>
              <p className="font-medium mb-1">Q: What if my application is rejected?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A: Check the rejection reason on the portal. Common reasons include incomplete documents, incorrect information, 
                or not meeting eligibility criteria. You may be able to reapply after correcting the issues.
              </p>
            </div>

            <div>
              <p className="font-medium mb-1">Q: Do I need to apply every year?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A: For renewal scholarships, you need to apply each academic year. Fresh applications are required when 
                changing courses or institutions.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-accent/50 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Important:</strong> This is general guidance only. Each scholarship scheme has specific requirements 
              and procedures. Always verify all details on the official scholarship portal before applying. We recommend 
              visiting the National Scholarship Portal (scholarships.gov.in) or your state's scholarship portal for 
              accurate and up-to-date information.
            </p>
          </div>
        </div>
      )}

      {/* Updates Grid */}
      {filteredUpdates.length > 0 ? (
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredUpdates.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No scholarships found for the selected filter.</p>
        </div>
      )}
    </div>
  );
}
