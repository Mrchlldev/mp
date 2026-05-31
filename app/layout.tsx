import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-archivo" });

export const metadata: Metadata = {
  title: "Marcellino F.A - Designer",
  description: "Portfolio designer milik Marcellino F.A.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${spaceGrotesk.variable} ${archivoBlack.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
