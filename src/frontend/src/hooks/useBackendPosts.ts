import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { adaptBackendPosts, adaptBackendPost } from '../utils/backendPostAdapters';
import type { UpdateItem } from '../content/updateTypes';

/**
 * Fetch all published posts from backend (optionally filtered by category on backend)
 */
export function useBackendPosts(category?: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<UpdateItem[]>({
    queryKey: ['backendPosts', category],
    queryFn: async () => {
      if (!actor) return [];
      const posts = await actor.getPublishedPostsByCategory(category || '');
      return adaptBackendPosts(posts);
    },
    enabled: !!actor && !actorFetching,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

/**
 * Fetch a single post by ID from backend
 */
export function useBackendPostById(id: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<UpdateItem | null>({
    queryKey: ['backendPost', id],
    queryFn: async () => {
      if (!actor) return null;
      const post = await actor.getPostById(id);
      if (!post) return null;
      return adaptBackendPost(post);
    },
    enabled: !!actor && !actorFetching && !!id,
    staleTime: 1000 * 60 * 5,
  });
}
