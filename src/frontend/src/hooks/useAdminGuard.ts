import { useQuery } from '@tanstack/react-query';
import { useInternetIdentity } from './useInternetIdentity';
import { useActor } from './useActor';

/**
 * Hook to check if the current user is an admin
 * Returns loading state and authorization status
 */
export function useAdminGuard() {
  const { identity, isInitializing } = useInternetIdentity();
  const { actor, isFetching: actorFetching } = useActor();

  const isAuthenticated = !!identity;

  const { data: isAdmin = false, isLoading: isCheckingAdmin } = useQuery({
    queryKey: ['isAdmin'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !actorFetching && isAuthenticated,
    retry: false,
  });

  const isLoading = isInitializing || actorFetching || (isAuthenticated && isCheckingAdmin);

  return {
    isAuthenticated,
    isAdmin,
    isLoading,
    isAuthorized: isAuthenticated && isAdmin,
  };
}
