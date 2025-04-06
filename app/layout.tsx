import { ReactNode } from "react";

import './globals.css';

import Header from "./components/Header";



export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
        <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Green Dwarf Hosting | Reliable Hosting Services</title>
        <meta name="description" content="Green Dwarf Hosting provides premium hosting soultions at affordable price" />
        <meta name="keywords" content="hosting, cloud, server" />
        <meta name="author" content="Green Dwarf Hosting" />
        <meta property="og:title" content="Green Dwarf Hosting | Reliable Hosting Services" />
        <meta property="og:description" content="This is the homepage of my amazing app" />
       
        <meta property="og:url" content="https://greendwarfhosting.com/" />
        <meta name="twitter:card" content="Affordable hosting services" />
        <link rel="canonical" href="https://greendwarfhosting.com/" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        </head>
        <body>
          <Header/>
          <main>
          {children}
          </main>
        </body>
    </html>

    
  );
}