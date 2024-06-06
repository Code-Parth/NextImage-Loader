import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/theme-provider";

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
            <head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6R9WG8S1FF"></Script>
                <Script id="google-analytics">
                    {
                        `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-6R9WG8S1FF');
                        `
                    }
                </Script>
            </head>
            <body className={sora.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col min-h-screen justify-between">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
