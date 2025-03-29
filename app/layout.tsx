import Header from "@/components/header";
import "./globals.css";
// import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";


// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eyuel | Personal Portfolio",
  description: "Hi, I'm Eyuel, a full-stack software developer with 8 years of experience, specializing in creating interactive and elegant functional applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="!scroll-smooth min-h-screen relative">
      <body
        className={`relative p-0 m-0 text-gray-50 text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}