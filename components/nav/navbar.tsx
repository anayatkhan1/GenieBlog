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
                    <span className="text-2xl font-bold">Genie Blog</span>
                </Link>
                <Button size="lg">
                    <span className="font-semibold ">Sign in</span>
                </Button>
            </nav>
        </header>
    );
};

export default Navbar;
