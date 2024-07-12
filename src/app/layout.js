import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navber from "./components/Navber";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor",
  description: "Car Doctor is the Best car servicing company in USA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber></Navber>
        {children}
        <Footer />
      </body>
    </html>
  );
}
