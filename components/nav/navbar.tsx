import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";
import { Button } from "../ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <header className="py-7">
            <nav className="container flex max-w-6xl items-center justify-between">
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/brand-logo.svg"
                        alt="Genie Blog"
                        width={50}
                        height={50}
                    />
                    <span className="text-2xl font-bold">Genie Blog</span>
                </Link>
                <Link
                    href="https://github.com/anayatkhan1/GenieBlog"
                    target="_blank"
                >
                    <Github />
                </Link>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button size="lg">
                            <span className="font-semibold ">Sign in</span>
                        </Button>
                    </SignInButton>
                </SignedOut>
            </nav>
        </header>
    );
};

export default Navbar;
