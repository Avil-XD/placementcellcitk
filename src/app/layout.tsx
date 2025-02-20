"use client";

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/common/footer";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/common/error-fallback";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-gray-900 text-gray-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <ErrorBoundary 
            FallbackComponent={ErrorFallback}
            onReset={() => window.location.reload()}
          >
            <MotionConfig reducedMotion="user">
              <NextTopLoader
                color="#3b82f6"
                speed={400}
                showSpinner={false}
                height={3}
                shadow={false}
              />
              <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </MotionConfig>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
