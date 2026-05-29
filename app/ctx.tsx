import { createContext, use, useState, type PropsWithChildren } from "react";

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session: string | null;
  isLoading: boolean;
} | null>(null);

export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }
  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  // Replace `useState(null)` with your real auth token/session logic.
  // e.g. load from expo-secure-store, Supabase, Clerk, etc.
  const [session, setSession] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => setSession("session-token"),
        signOut: () => setSession(null),
        session,
        isLoading: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
