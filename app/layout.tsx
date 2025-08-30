import type { Metadata } from "next";
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
  title: 'MicroDisk Systems - Servicii IT Profesionale în România',
  description: 'Oferim servicii IT complete: mentenanță IT, reparații hardware, suport tehnic și training. Experiență de peste 10 ani în domeniu.',
  keywords: 'servicii IT Craiova, servicii IT Dolj reparații calculatoare, mentenanță IT, suport tehnic, IT Romania, service calculatoare',
  openGraph: {
    title: 'MicroDisk Systems - Servicii IT Profesionale',
    description: 'Solutii IT complete pentru afacerea ta',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
