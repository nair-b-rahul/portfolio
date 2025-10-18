import type {Metadata} from "next";
import "./globals.css";
import {twMerge} from "tailwind-merge";
import localFont from "next/font/local";
import React from "react";
import {ThemeProvider} from "@/app/ThemeProvider";

const inter = localFont({
    src: "../../public/Inter.woff2",
    variable: "--font-inter",
});
export const metadata: Metadata = {
    title: "Sentient Knights | AI Research & Solutions",
    description: ".",
    keywords: [
        "Rahul B Nair",
    ],
    authors: [{name: "Rahul B Nair"}],
    creator: "Rahul B Nair",
    publisher: "Rahul B nair",
    robots: "index, follow",
    openGraph: {
        title: "Rahul B Nair | Ai Researcher, Software Engineer",
        description:
            "",
        url: "https://sentients.in",
        siteName: "Rahul B Nair",
        images: [
            {
                url: "",
                width: 1200,
                height: 630,
                alt: "Ai Researcher, Software Engineer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={twMerge(inter.variable, " antialiased")}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
