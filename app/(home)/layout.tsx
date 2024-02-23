import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/nav";

export const metadata: Metadata = {
    title: "Genie Blog",
    description: "Generated Blog content with Powerful AI tool",
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/** Background Snippet */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] ">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
            </div>
            <main className="h-dvh">
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    );
}
