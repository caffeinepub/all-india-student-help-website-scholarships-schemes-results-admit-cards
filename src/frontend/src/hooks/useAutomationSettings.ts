import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { IngestionSource, BrandImage } from '../backend';

export function useIngestionSources() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<IngestionSource[]>({
    queryKey: ['ingestionSources'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getIngestionSources();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useAddIngestionSource() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (source: IngestionSource) => {
      if (!actor) throw new Error('Actor not available');
      await actor.addIngestionSource(source);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ingestionSources'] });
    },
  });
}

export function useRemoveIngestionSource() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      if (!actor) throw new Error('Actor not available');
      await actor.removeIngestionSource(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ingestionSources'] });
    },
  });
}

export function useTriggerIngestion() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not available');
      await actor.triggerAutomatedIngestion();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['backendPosts'] });
    },
  });
}

export function useBrandImage() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<BrandImage | null>({
    queryKey: ['brandImage'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getBrandImage();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useUpdateBrandImage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (image: BrandImage) => {
      if (!actor) throw new Error('Actor not available');
      await actor.updateBrandImage(image);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brandImage'] });
    },
  });
}
