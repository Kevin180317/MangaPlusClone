import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Jujutsu Kaisen Manga",
  description: "Se distribuye los leaks de jujutsu kaisen de una forma mas dinamica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
