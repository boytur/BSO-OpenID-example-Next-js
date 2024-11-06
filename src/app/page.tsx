"use client";
import React from "react";
import Image from "next/image";
import { useAuth } from "./context/AuthContext";

const Profile: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {user ? (
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full text-center transform transition-transform hover:scale-105 relative">
          <div className="relative mb-4">
            <Image
              src={user.image || "/default-avatar.png"}
              alt={user.username}
              width={96}
              height={96}
              className="rounded-full mx-auto shadow-md border-4 border-blue-500 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {user.username}
            </h2>
            <p className="text-gray-300 mb-6 text-sm">{user.email}</p>

            <button
              onClick={logout}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none shadow-md transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-500 h-24 w-24 mb-4 animate-spin"></div>
          <p className="text-white text-xl font-semibold">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
