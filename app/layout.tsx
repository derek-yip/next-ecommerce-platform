import Footer from "@/components/Footer";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce Store",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={font.className}>{children}</body>
      <Footer/>
    </html>
  );
}
