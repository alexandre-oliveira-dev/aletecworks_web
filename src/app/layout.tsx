import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <head>
        <meta name="theme-color" content="#121212" />
        <meta property="og:theme-color" content="#121212" />
        <meta
          property="og:image"
          content="https://aletecworks-web.vercel.app/logo.png"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1PCTTQRLDX"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1PCTTQRLDX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
