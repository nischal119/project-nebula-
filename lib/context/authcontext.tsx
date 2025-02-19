"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import type { User, AuthState } from "@/lib/types/auth";

interface AuthContextType extends AuthState {
  signIn: (userData: User) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    // Check local storage for user data on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setState({
        user: JSON.parse(storedUser),
        isLoading: false,
      });
    } else {
      setState((prev: any) => ({ ...prev, isLoading: false }));
    }
  }, []);

  const signIn = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setState({ user: userData, isLoading: false });
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setState({ user: null, isLoading: false });
  };

  return (
    <AuthContext.Provider value={{ ...state, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
