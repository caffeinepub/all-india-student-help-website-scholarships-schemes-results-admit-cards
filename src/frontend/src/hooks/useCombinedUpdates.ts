import { useMemo } from 'react';
import { useBackendPosts } from './useBackendPosts';
import { seedUpdates } from '../content/seedUpdates';
import type { UpdateItem, UpdateCategory } from '../content/updateTypes';

/**
 * Combine backend posts with seed updates, preferring backend posts
 * Returns backend posts first, then seed updates
 */
export function useCombinedUpdates() {
  const { data: backendPosts = [], isLoading } = useBackendPosts();

  const combined = useMemo(() => {
    // Backend posts come first, then seed updates
    return [...backendPosts, ...seedUpdates];
  }, [backendPosts]);

  return {
    updates: combined,
    isLoading,
    hasBackendPosts: backendPosts.length > 0,
  };
}

/**
 * Get combined updates filtered by category
 */
export function useCombinedUpdatesByCategory(category: UpdateCategory) {
  const { updates, isLoading, hasBackendPosts } = useCombinedUpdates();

  const filtered = useMemo(() => {
    return updates.filter((u) => u.category === category);
  }, [updates, category]);

  return {
    updates: filtered,
    isLoading,
    hasBackendPosts,
  };
}

/**
 * Get latest N updates across all categories
 */
export function useLatestCombinedUpdates(count: number = 6) {
  const { updates, isLoading, hasBackendPosts } = useCombinedUpdates();

  const latest = useMemo(() => {
    return [...updates]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, count);
  }, [updates, count]);

  return {
    updates: latest,
    isLoading,
    hasBackendPosts,
  };
}

/**
 * Get a single update by ID (checks backend first, then seed)
 */
export function useCombinedUpdateById(id: string): UpdateItem | undefined {
  const { updates } = useCombinedUpdates();
  return updates.find((u) => u.id === id);
}
