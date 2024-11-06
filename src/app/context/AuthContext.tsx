"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// User interface
interface User {
  username: string;
  email: string;
  image: string;
}

// Auth context type
interface AuthContextType {
  login: (provider: "discord" | "github") => void;
  logout: () => void;
  user: User | null;
}

// Auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State variables for loading and user
  const [isLoading, setIsLoading] = useState(true);

  // User state
  const [user, setUser] = useState<User | null>(null);

  // Router instance and pathname
  const router = useRouter();

  // Pathname hook for current path
  const pathname = usePathname();

  // OpenID Connect URL and redirect URL
  const openIdUrl = process.env.NEXT_PUBLIC_OPENID_URL;
  const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL;

  // Fetch user data on mount and update
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${openIdUrl}/me`, {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (user && pathname === "/login") {
        router.push("/");
      } else if (!user && pathname === "/") {
        router.push("/login");
      }
    }
  }, [user, pathname, isLoading, router]);

  /**
   * Login function for OpenID Connect
   * @param provider - OpenID Connect provider
   */
  const login = (provider: "discord" | "github" | "google") => {
    const service = "blog";
    router.push(
      `${openIdUrl}/${provider}?service=${service}&redirect=${redirectUrl}`
    );
  };

  /**
   * Logout function
   * @returns void
   */
  const logout = async () => {
    try {
      const response = await fetch(`${openIdUrl}/logout`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        setUser(null);
        router.push("/login");
      }
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * useAuth hook for consuming AuthContext
 * @returns AuthContextType
 */

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
