import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

import Image from "next/image"
export default function RootLayout({ children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header>
              <nav className="bg-black flex justify-between items-center p-4 text-white no-underline">
                  <div className="flex items-center">
                  <Image
                    className="filter grayscale invert brightness-200 contrast-200"
                    src="/Logo.png"
                    alt="logo-image"
                    width={200}
                    height = {50}
                  />
                </div>
                <ul className="flex items-stretch">
                  <a className="hover:bg-gray-400 px-2 py-1 flex items-center" href="#">Models</a>
                  <a className="hover:bg-gray-400 px-2 py-1 flex items-center" href="/about">About</a>
                </ul>
              </nav>
        </header>
        {children}

        <footer className="bg-black text-white h-24 flex items-center justify-center">
          <p>all rights reserved</p>
        </footer>
      </body>
    </html>
  );
}
