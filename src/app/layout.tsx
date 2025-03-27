import type {Metadata} from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Rahul B Nair | AI & Software Engineer",
    description:
        "Welcome to my corner of the internet. I'm Rahul, an AI Software Engineer specializing in mobile and web applications, " +
        "with a deep interest in building scalable enterprise solutions.",
    openGraph: {
        title: "Rahul B Nair | AI & Software Engineer",
        description:
            "Explore the work and insights of Rahul, an AI Software Engineer passionate about developing cutting-edge mobile and web applications.",
        url: "https://sentients.in",
        siteName: "Rahul B Nair Portfolio",
        images: [
            {
                url: "https://yourwebsite.com/og-image.jpg", // OG image for LinkedIn, Facebook, etc.
                width: 1200,
                height: 630,
                alt: "Rahul B Nair Profile Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rahul B Nair | AI & Software Engineer",
        description:
            "I am Rahul B Nair, an AI Software Engineer specializing in mobile and web applications, building innovative enterprise solutions.",
        site: "@yourtwitterhandle", // Update my twitter handle
        creator: "@yourtwitterhandle", // Update my twitter handle
        images: [
            {
                url: "https://yourwebsite.com/twitter-image.jpg", // Use a custom Twitter image if needed
                width: 1200,
                height: 630,
                alt: "Rahul B Nair Profile Image",
            },
        ],
    },
    authors: [{ name: "Rahul B Nair", url: "https://yourwebsite.com" }],
    robots: "index, follow",
    alternates: {
        canonical: "https://yourwebsite.com",
    },
    other: {
        "github-profile": "https://github.com/nair-b-rahul",
        "linkedin-profile": "https://www.linkedin.com/in/rahulbnair-/",
        "leetcode-profile": "https://leetcode.com/u/rahulbnair/", //
        "twitter-profile": "https://twitter.com/your-handle", // Update later
    },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={``}>
        {children}
        </body>
        </html>
    );
}
