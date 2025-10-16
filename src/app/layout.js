import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Respicare - Respiratory Care Products",
    template: "%s | Respicare"
  },
  description: "Respicare provides trusted respiratory care solutions and medical devices.",
  openGraph: {
    siteName: "Respicare",
    type: "website",
    url: "https://www.respicare.com",
    images: [{ url: "/og-default.jpg" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
