import { useState } from 'react';
import { useAdminGuard } from '../hooks/useAdminGuard';
import AccessDeniedScreen from '../components/content/AccessDeniedScreen';
import { usePageMeta } from '../seo/usePageMeta';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Loader2, Plus, Trash2, Settings, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { useIngestionSources, useAddIngestionSource, useRemoveIngestionSource, useTriggerIngestion, useBrandImage, useUpdateBrandImage } from '../hooks/useAutomationSettings';
import FormStatusBanner from '../components/content/FormStatusBanner';

export default function AutomationSettingsPage() {
  const { isAuthorized, isLoading: authLoading } = useAdminGuard();
  const { data: sources = [], isLoading: sourcesLoading } = useIngestionSources();
  const { data: brandImage } = useBrandImage();
  const addSourceMutation = useAddIngestionSource();
  const removeSourceMutation = useRemoveIngestionSource();
  const triggerIngestionMutation = useTriggerIngestion();
  const updateBrandImageMutation = useUpdateBrandImage();

  const [newSource, setNewSource] = useState({ url: '', imageRule: '' });
  const [brandImageUrl, setBrandImageUrl] = useState('');
  const [brandImageThumbnail, setBrandImageThumbnail] = useState('');
  const [brandImageColor, setBrandImageColor] = useState('#000000');

  usePageMeta({
    title: 'Automation Settings | Admin',
    description: 'Manage content ingestion sources and automation settings.',
  });

  if (authLoading) {
    return (
      <div className="container py-12 text-center px-4">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
        <p className="text-muted-foreground mt-4">Loading...</p>
      </div>
    );
  }

  if (!isAuthorized) {
    return <AccessDeniedScreen />;
  }

  const handleAddSource = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSource.url.trim()) return;

    try {
      await addSourceMutation.mutateAsync({
        id: `source-${Date.now()}`,
        url: newSource.url,
        imageRule: newSource.imageRule,
      });
      setNewSource({ url: '', imageRule: '' });
    } catch (error) {
      console.error('Failed to add source:', error);
    }
  };

  const handleRemoveSource = async (id: string) => {
    try {
      await removeSourceMutation.mutateAsync(id);
    } catch (error) {
      console.error('Failed to remove source:', error);
    }
  };

  const handleTriggerIngestion = async () => {
    try {
      await triggerIngestionMutation.mutateAsync();
    } catch (error) {
      console.error('Failed to trigger ingestion:', error);
    }
  };

  const handleUpdateBrandImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandImageUrl.trim()) return;

    try {
      await updateBrandImageMutation.mutateAsync({
        url: brandImageUrl,
        thumbnail: brandImageThumbnail || brandImageUrl,
        color: brandImageColor,
        lastUpdated: BigInt(Date.now()),
      });
      setBrandImageUrl('');
      setBrandImageThumbnail('');
      setBrandImageColor('#000000');
    } catch (error) {
      console.error('Failed to update brand image:', error);
    }
  };

  return (
    <div className="container py-8 px-4 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Automation Settings</h1>
        <p className="text-muted-foreground">
          Manage content ingestion sources and brand configuration
        </p>
      </div>

      {/* Brand Image Configuration */}
      <Card className="mb-8 border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            Brand Image Configuration
          </CardTitle>
          <CardDescription>
            Update the site logo displayed in the header
          </CardDescription>
        </CardHeader>
        <CardContent>
          {brandImage && (
            <div className="mb-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Current brand image:</p>
              <img 
                src={brandImage.url} 
                alt="Current brand" 
                className="h-12 w-auto border rounded"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-xs text-muted-foreground mt-2">
                Last updated: {new Date(Number(brandImage.lastUpdated)).toLocaleString()}
              </p>
            </div>
          )}

          {updateBrandImageMutation.isSuccess && (
            <div className="mb-4">
              <FormStatusBanner
                status="success"
                message="Brand image updated successfully!"
              />
            </div>
          )}
          {updateBrandImageMutation.isError && (
            <div className="mb-4">
              <FormStatusBanner
                status="error"
                message={updateBrandImageMutation.error?.message || 'Failed to update brand image'}
              />
            </div>
          )}

          <form onSubmit={handleUpdateBrandImage} className="space-y-4">
            <div>
              <Label htmlFor="brandImageUrl">Image URL</Label>
              <Input
                id="brandImageUrl"
                type="url"
                placeholder="https://example.com/logo.png"
                value={brandImageUrl}
                onChange={(e) => setBrandImageUrl(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="brandImageThumbnail">Thumbnail URL (optional)</Label>
              <Input
                id="brandImageThumbnail"
                type="url"
                placeholder="https://example.com/logo-thumb.png"
                value={brandImageThumbnail}
                onChange={(e) => setBrandImageThumbnail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="brandImageColor">Accent Color</Label>
              <Input
                id="brandImageColor"
                type="color"
                value={brandImageColor}
                onChange={(e) => setBrandImageColor(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              disabled={updateBrandImageMutation.isPending}
            >
              {updateBrandImageMutation.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Update Brand Image
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Ingestion Control */}
      <Card className="mb-8 border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            Manual Ingestion Trigger
          </CardTitle>
          <CardDescription>
            Manually trigger content ingestion from configured sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          {triggerIngestionMutation.isSuccess && (
            <div className="mb-4">
              <FormStatusBanner
                status="success"
                message="Ingestion triggered successfully!"
              />
            </div>
          )}
          {triggerIngestionMutation.isError && (
            <div className="mb-4">
              <FormStatusBanner
                status="error"
                message={triggerIngestionMutation.error?.message || 'Failed to trigger ingestion'}
              />
            </div>
          )}
          <Button
            onClick={handleTriggerIngestion}
            disabled={triggerIngestionMutation.isPending}
            size="lg"
          >
            {triggerIngestionMutation.isPending && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Run Ingestion Now
          </Button>
        </CardContent>
      </Card>

      {/* Content Sources */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Content Sources
          </CardTitle>
          <CardDescription>
            Add and manage content ingestion sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add New Source Form */}
          <form onSubmit={handleAddSource} className="mb-6 p-4 bg-muted/50 rounded-lg space-y-4">
            <h3 className="font-semibold">Add New Source</h3>
            {addSourceMutation.isSuccess && (
              <FormStatusBanner
                status="success"
                message="Source added successfully!"
              />
            )}
            {addSourceMutation.isError && (
              <FormStatusBanner
                status="error"
                message={addSourceMutation.error?.message || 'Failed to add source'}
              />
            )}
            <div>
              <Label htmlFor="sourceUrl">Source URL</Label>
              <Input
                id="sourceUrl"
                type="url"
                placeholder="https://example.com/feed.xml"
                value={newSource.url}
                onChange={(e) => setNewSource({ ...newSource, url: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="imageRule">Image Rule (optional)</Label>
              <Input
                id="imageRule"
                type="text"
                placeholder="CSS selector or pattern for images"
                value={newSource.imageRule}
                onChange={(e) => setNewSource({ ...newSource, imageRule: e.target.value })}
              />
            </div>
            <Button
              type="submit"
              disabled={addSourceMutation.isPending}
            >
              {addSourceMutation.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              <Plus className="mr-2 h-4 w-4" />
              Add Source
            </Button>
          </form>

          {/* Sources List */}
          <div className="space-y-3">
            <h3 className="font-semibold">Configured Sources</h3>
            {sourcesLoading ? (
              <div className="text-center py-8">
                <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
              </div>
            ) : sources.length === 0 ? (
              <p className="text-sm text-muted-foreground py-4">
                No sources configured yet. Add your first source above.
              </p>
            ) : (
              sources.map((source) => (
                <div
                  key={source.id}
                  className="flex items-start justify-between p-4 border rounded-lg bg-card"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{source.url}</p>
                    {source.imageRule && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Image rule: {source.imageRule}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveSource(source.id)}
                    disabled={removeSourceMutation.isPending}
                    className="ml-2 flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
