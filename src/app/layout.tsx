import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/nunito-sans"; // Defaults to weight 400
import "@fontsource/nunito-sans/600.css"; // Specify weight
import "@fontsource/nunito-sans/400-italic.css"; // Specify weight and style
/*import localFont from '@next/font/local'

const poppins = localFont({
  src: [
    {
      path: './public/fonts/SHOWG.TTF', 
      weight: '400'
    },
  ],
  variable: '--Showcard Gothic'
})*/


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duck Coin",
  description: "Powered by Duckcoin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
          <link rel='icon' href='/favicon.jpg'/>
        </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      
      </body>
    </html>
  );
}
