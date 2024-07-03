import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NextImage-Loader",
    description: "Next.js Image Loader with TailwindCSS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(sora.className, "")}>
                <main className="flex flex-col min-h-screen justify-between">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
