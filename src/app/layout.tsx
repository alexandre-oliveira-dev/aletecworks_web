import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Ale Tecworks",
  description: "Eleve sua presença online com inovação e tecnologia. 💻🚀",
  authors: [
    {
      name: "Ceo",
      url: "https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
