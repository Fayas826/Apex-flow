import { trpc } from '@/lib/trpc';

export interface User {
  name: string;
  email: string;
}

export function useAuth() {
  const utils = trpc.useUtils();
  const { data: serverUser, isLoading, refetch } = trpc.auth.me.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const loginMutation = trpc.auth.login.useMutation();
  const logoutMutation = trpc.auth.logout.useMutation();

  const login = async (email: string, name: string) => {
    try {
      await loginMutation.mutateAsync({ email, name });
      await utils.auth.me.invalidate();
      await refetch();
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const logout = async () => {
    try {
      await logoutMutation.mutateAsync();
      await utils.auth.me.invalidate();
      await refetch();
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const user = serverUser ? { name: serverUser.name || "", email: serverUser.email || "" } : null;

  return {
    user,
    isAuthenticated: !!user,
    loading: isLoading,
    login,
    logout,
  };
}

