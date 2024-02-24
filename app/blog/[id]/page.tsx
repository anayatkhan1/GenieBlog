import Link from "next/link";
import Image from "next/image";
import { getBlogId } from "@/lib/supabase";
import { ChevronLeft } from "lucide-react";

const Blog = async ({ params }: { params: { id: string } }) => {
    const { content, imageUrl } = await getBlogId(Number(params.id));
    return (
        <section className="mx-auto max-w-xl py-12">
            <Link
                href="/"
                className="-ml-2 inline-flex items-center text-sm font-light text-gray-400"
            >
                <ChevronLeft strokeWidth={1} size={20} />
                <span>Go back</span>
            </Link>

            <section>
                <Image alt=" " src={imageUrl} width={1792} height={1024} />
                {content}
            </section>
        </section>
    );
};

export default Blog;
