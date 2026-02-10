import { useState } from 'react';
import { useAdminGuard } from '../hooks/useAdminGuard';
import { useManualIngestContent } from '../hooks/useQueries';
import AccessDeniedScreen from '../components/content/AccessDeniedScreen';
import FormStatusBanner from '../components/content/FormStatusBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

export default function OwnerIngestPage() {
  const { isAuthorized, isLoading: authLoading } = useAdminGuard();
  const ingestMutation = useManualIngestContent();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('education-news');
  const [body, setBody] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [stateTags, setStateTags] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  if (authLoading) {
    return (
      <div className="container py-12 px-4 text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        <p className="mt-4 text-muted-foreground">Checking authorization...</p>
      </div>
    );
  }

  if (!isAuthorized) {
    return <AccessDeniedScreen />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);

    try {
      const tags = stateTags
        .split(',')
        .map((t) => t.trim().toLowerCase())
        .filter((t) => t.length > 0);

      await ingestMutation.mutateAsync({
        title,
        category,
        body,
        excerpt,
        stateTags: tags,
      });

      setShowSuccess(true);
      // Reset form
      setTitle('');
      setBody('');
      setExcerpt('');
      setStateTags('');
      setCategory('education-news');
    } catch (error) {
      console.error('Ingestion error:', error);
      setShowError(true);
    }
  };

  return (
    <div className="container py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Content Ingestion</h1>
        <p className="text-muted-foreground mb-8">
          Submit new content for processing and automatic publishing. The system will rewrite, categorize, and add images automatically.
        </p>

        {showSuccess && (
          <div className="mb-6">
            <FormStatusBanner
              status="success"
              message="Content submitted successfully! It will be processed and published automatically."
            />
          </div>
        )}

        {showError && (
          <div className="mb-6">
            <FormStatusBanner
              status="error"
              message="Failed to submit content. Please try again or contact support."
            />
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border rounded-lg p-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter content title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="education-news">Education News</SelectItem>
                <SelectItem value="school-education">School Education</SelectItem>
                <SelectItem value="competitive-exams">Competitive Exams</SelectItem>
                <SelectItem value="scholarships">Scholarships</SelectItem>
                <SelectItem value="schemes">Schemes</SelectItem>
                <SelectItem value="results">Results</SelectItem>
                <SelectItem value="admit-cards">Admit Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt *</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary (1-2 sentences)"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="body">Content Body *</Label>
            <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Full content in HTML format"
              rows={12}
              required
            />
            <p className="text-xs text-muted-foreground">
              You can use HTML tags for formatting (h2, h3, p, ul, li, strong, em, etc.)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="stateTags">State Tags (optional)</Label>
            <Input
              id="stateTags"
              value={stateTags}
              onChange={(e) => setStateTags(e.target.value)}
              placeholder="e.g., bihar, uttar-pradesh, west-bengal"
            />
            <p className="text-xs text-muted-foreground">
              Comma-separated state slugs (lowercase, hyphenated)
            </p>
          </div>

          <Button type="submit" disabled={ingestMutation.isPending} className="w-full">
            {ingestMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Content'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
