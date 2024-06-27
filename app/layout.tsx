import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Providers from "./Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pagaraplata",
  description: "Pagaraplata man",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center p-8 gap-8">
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
