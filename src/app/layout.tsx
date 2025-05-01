import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Xiao's website",
  description: "The personal website of Xiao",
};

// Initialize the font with the weights you need
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 container mx-auto px-20 py-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
