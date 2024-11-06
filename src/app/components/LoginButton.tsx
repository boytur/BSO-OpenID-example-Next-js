"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";

/**
 * Login button component
 * @param provider - Login provider
 * @returns Login button component
 */

interface LoginButtonProps {
  provider: "discord" | "github" | "google";
}

const LoginButton: React.FC<LoginButtonProps> = ({ provider }) => {
  // Router
  const router = useRouter();

  // Handle login
  const handleLogin = () => {
    // Env variables
    const openIdUrl = process.env.NEXT_PUBLIC_OPENID_URL;
    const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL;

    // Example service for blog
    const service = "blog";

    // Redirect to OpenID Connect provider
    router.push(
      `${openIdUrl}/${provider}?service=${service}&redirect=${redirectUrl}`
    );
  };

  return (
    <button
      onClick={handleLogin}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
        provider === "discord"
          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
          : provider === "github"
          ? "bg-gray-800 hover:bg-gray-900 text-white"
          : "bg-red-500 hover:bg-red-600 text-white"
      } shadow-lg hover:shadow-xl`}
    >
      {provider === "discord" ? (
        <>
          <FaDiscord size={24} />
          <span>Login with Discord</span>
        </>
      ) : provider === "github" ? (
        <>
          <FaGithub size={24} />
          <span>Login with GitHub</span>
        </>
      ) : provider === "google" ? (
        <>
          <FaGoogle size={24} />
          <span>Login with Google</span>
        </>
      ) : null}
    </button>
  );
};

export default LoginButton;
