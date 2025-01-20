import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather forecast",
  description: "Used to check the weather forecast in Iceland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="dark text-foreground bg-background flex min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
