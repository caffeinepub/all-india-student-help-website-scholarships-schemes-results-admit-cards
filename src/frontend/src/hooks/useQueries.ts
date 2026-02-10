import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      await actor.submitContactForm(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });
}

export function useManualIngestContent() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      title,
      category,
      body,
      excerpt,
      stateTags,
    }: {
      title: string;
      category: string;
      body: string;
      excerpt: string;
      stateTags: string[];
    }) => {
      if (!actor) throw new Error('Actor not available');
      await actor.manualIngestContent(title, category, body, excerpt, stateTags);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['backendPosts'] });
    },
  });
}
