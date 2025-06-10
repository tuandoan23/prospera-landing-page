import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

export const metadata: Metadata = {
  title: "Prospera",
  description: "Your modern business platform.",
  icons: {
    icon: "/favicon.png",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
