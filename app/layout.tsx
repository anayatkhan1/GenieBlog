import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Genie Blog",
    description:
        "Step into GenieBlog, where your writing dreams come true with just a prompt! Our AI-powered platform transforms your ideas into polished blog posts in a blink. No more staring at a blank page  let GenieBlog unleash your creativity effortlessly!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="./favicon.ico" sizes="any" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
