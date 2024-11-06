"use client";
import React from "react";
import LoginButton from "../components/LoginButton";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <h1 className="text-3xl font-extrabold mb-6 text-center">
        Welcome to BSO-OpenID🔑
      </h1>
      <p className="text-lg mb-8 text-center max-w-md">
        Please log in with your preferred provider to continue. Choose either
        Discord or GitHub for authentication.
      </p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <LoginButton provider="discord" />
        <LoginButton provider="google" />
        <LoginButton provider="github" />
      </div>
    </div>
  );
};

export default Login;
