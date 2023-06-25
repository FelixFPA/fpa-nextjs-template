"use client";
import { Providers } from "./providers";
import Header from "./components/organisms/Header";

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
      </body>
    </html>
  );
}