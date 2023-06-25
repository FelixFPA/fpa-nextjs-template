"use client";
import { Providers } from "./providers";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header /> 
          {children}
        </Providers>
        <Footer /> 
      </body>
    </html>
  );
}