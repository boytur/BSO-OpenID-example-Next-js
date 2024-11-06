import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

export const metadata: Metadata = {
  title: "BSO-OpenID",
  description: "A simple OpenID Connect provider for BSO.",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://open.bsospace.com",
    title: "BSO-OpenID",
    description: "A simple OpenID Connect provider for BSO.",
    images: [
      {
        url: "public/BSO LOGO.svg",
        width: 1200,
        height: 630,
        alt: "BSO-OpenID Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bsospace",
    title: "BSO-OpenID",
    description: "A simple OpenID Connect provider for BSO.",
    images: "public/BSO LOGO.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div>{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
