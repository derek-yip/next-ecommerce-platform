import "./globals.css";
import { Urbanist } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";

import Footer from "@/components/Footer";
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
      <body className={font.className}>
        <ModalProvider/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
