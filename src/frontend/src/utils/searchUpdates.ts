import type { UpdateItem } from '../content/updateTypes';

/**
 * Normalize a search query by trimming, collapsing whitespace, and converting to lowercase
 */
function normalizeQuery(query: string): string {
  return query.trim().replace(/\s+/g, ' ').toLowerCase();
}

/**
 * Check if an update matches the search query
 */
function matchesQuery(update: UpdateItem, normalizedQuery: string): boolean {
  if (!normalizedQuery) return false;
  
  const searchableText = [
    update.title,
    update.excerpt,
    update.body || '',
  ].join(' ').toLowerCase();
  
  return searchableText.includes(normalizedQuery);
}

/**
 * Search updates by query string
 * Returns results sorted by date (newest first) with stable ordering
 */
export function searchUpdates(updates: UpdateItem[], query: string): UpdateItem[] {
  const normalizedQuery = normalizeQuery(query);
  
  if (!normalizedQuery) {
    return [];
  }
  
  const matches = updates.filter(update => matchesQuery(update, normalizedQuery));
  
  // Sort by date descending (newest first), with stable tie-breaker by original index
  return matches.sort((a, b) => {
    const dateCompare = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateCompare !== 0) return dateCompare;
    
    // Stable tie-breaker: maintain original order
    return updates.indexOf(a) - updates.indexOf(b);
  });
}

/**
 * Get all updates sorted by date (newest first)
 */
export function getAllUpdatesSorted(updates: UpdateItem[]): UpdateItem[] {
  return [...updates].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
