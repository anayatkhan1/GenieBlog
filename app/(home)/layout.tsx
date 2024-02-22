import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/nav";

export const metadata: Metadata = {
    title: "Ai Generated Blog content",
    description: "Generated Blog content with Powerful AI tool",
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
