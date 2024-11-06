"use client";
import React from "react";

const DocsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
        {/* Title Section */}
        <h1 className="text-3xl font-extrabold text-center mb-6">
          API Documentation
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Comprehensive guide for developers to integrate with our API.
        </p>

        {/* Table of Contents */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-200 mb-4">
            Table of Contents
          </h2>
          <ul className="text-gray-400 list-disc ml-5 space-y-2">
            <li>
              <a href="#authentication" className="hover:text-white">
                Authentication
              </a>
            </li>
            <li>
              <a href="#endpoints" className="hover:text-white">
                API Endpoints
              </a>
            </li>
            <li>
              <a href="#example-request" className="hover:text-white">
                Example Request
              </a>
            </li>
          </ul>
        </div>

        {/* Section: Authentication */}
        <section id="authentication" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">
            Authentication
          </h2>
          <p className="text-gray-400 mb-4">
            Authenticate users with OAuth2 providers like Discord, GitHub, and
            Google.
          </p>
          <div className="bg-gray-700 rounded-md p-4 mb-4 overflow-x-auto">
            <pre className="text-sm text-gray-200">
              <code>{`GET /auth/:provider?service={service}&redirect={redirectUrl}`}</code>
            </pre>
          </div>
          <p className="text-gray-400">
            Replace <code className="text-gray-200">:provider</code> with either{" "}
            <code className="text-gray-200">discord</code>,{" "}
            <code className="text-gray-200">github</code>, or{" "}
            <code className="text-gray-200">google</code>. Provide the{" "}
            <code className="text-gray-200">service</code> and{" "}
            <code className="text-gray-200">redirect</code> parameters.
          </p>
        </section>

        {/* Section: API Endpoints */}
        <section id="endpoints" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">
            API Endpoints
          </h2>

          <div className="bg-gray-700 rounded-md p-4 mb-4 overflow-x-auto">
            <pre className="text-sm text-gray-200">
              <code>{`GET /auth/me
Returns user information if authenticated.`}</code>
            </pre>
          </div>
          <p className="text-gray-400 mb-4">
            Retrieves the details of the authenticated user.
          </p>

          <div className="bg-gray-700 rounded-md p-4 mb-4 overflow-x-auto">
            <pre className="text-sm text-gray-200">
              <code>{`DELETE /auth/logout
Logs the user out and clears session.`}</code>
            </pre>
          </div>
          <p className="text-gray-400">
            Ends the user session and removes authentication tokens.
          </p>
        </section>

        {/* Section: Example Request */}
        <section id="example-request" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">
            Example Request
          </h2>
          <p className="text-gray-400 mb-4">
            Here is an example request to retrieve authenticated user data:
          </p>
          <div className="bg-gray-700 rounded-md p-4 mb-4 overflow-x-auto">
            <pre className="text-sm text-gray-200">
              <code>{`fetch("http://localhost:3000/auth/me", {
  method: "GET",
  credentials: "include"
}).then(response => response.json());`}</code>
            </pre>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 mt-12">
          <p>
            For additional information, please refer to our API documentation.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DocsPage;
