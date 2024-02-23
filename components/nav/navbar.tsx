import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

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
                    <span className="animate-background-shine inline-flex bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)]  bg-[length:250%_100%] bg-clip-text text-2xl font-semibold text-black text-transparent">
                        Genie Blog
                    </span>
                </Link>
                <Button size="lg">
                    <span className="font-semibold ">Sign in</span>
                </Button>
            </nav>
        </header>
    );
};

export default Navbar;
