import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Junaire Edris Buico Portfolio | Bohol, PH",
  description:
    "Hi, I'm Junaire Edris Buico. Are you in need of a web developer? Reach me out (+63) 9158 463 439",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "bg-black text-gray-100 leading-[1.5]")}
      >
        <main className="grid items-center h-screen">
          <div className="container mx-auto px-4 py-6">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
