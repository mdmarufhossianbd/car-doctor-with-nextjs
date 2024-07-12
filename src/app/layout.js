import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navber from "./components/Navber";
import "./globals.css";
import AuthProvider from "./services/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor",
  description: "Car Doctor is the Best car servicing company in USA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <Navber></Navber>
        {children}
        <Footer />
      </AuthProvider>
      </body>
    </html>
  );
}
