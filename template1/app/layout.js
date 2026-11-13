import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/themeProvider";
import Data from "@/data/data.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: Data.metaData.title,
  description: Data.metaData.description
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
       <body className="min-h-full flex flex-col">
       <ThemeProvider>
        {children}
       </ThemeProvider>
        </body>
    
    </html>
  );
}
