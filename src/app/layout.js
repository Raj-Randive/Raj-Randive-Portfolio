import AppLayout from "@/Components/AppLayout";
import StartsCanvas from "@/Components/StarBackground";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raj Randive",
  description: "Raj Randive's Portfolio",
};

export default function RootLayout({ children, className = "" }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`${className} w-full h-full`}>
          <AppLayout>
            {/* <StartsCanvas /> */}
            {children}
          </AppLayout>
        </div>
      </body>
    </html>
  );
}
