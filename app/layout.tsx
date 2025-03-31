import Header from "@/components/header";
import "./globals.css";
// import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
// import { Toaster } from "react-hot-toast";


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
  <html
    lang="en"
    suppressHydrationWarning={true}
    className="!scroll-smooth min-h-screen w-full overflow-x-hidden relative p-0 m-0"
  >
    <body
      className="relative p-0 m-0 w-full min-h-screen text-gray-50 text-opacity-90 overflow-x-hidden"
    >
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          {children}

          {/* <Toaster position="top-right" /> */}
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </body>
  </html>
);

}