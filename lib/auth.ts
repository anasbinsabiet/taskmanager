import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";

export function useAuth() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { signIn, signOut } = useAuthActions();

  return {
    isLoading,
    isAuthenticated,
    signIn,
    signOut,
  };
}

export type AuthError = {
  message: string;
  code?: string;
};

export function getAuthErrorMessage(error: any): string {
  if (typeof error === "string") {
    return error;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  if (error?.toString) {
    return error.toString();
  }
  
  return "An unexpected error occurred";
}