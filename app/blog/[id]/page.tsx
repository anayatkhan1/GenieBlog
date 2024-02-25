import Link from "next/link";
import Image from "next/image";
import { getBlogId } from "@/lib/supabase";
import { ChevronLeft } from "lucide-react";
import Markdown from "react-markdown";

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

            <section className="prose mt-6 prose-strong:text-4xl prose-strong:font-extrabold">
                <Image alt=" " src={imageUrl} width={1000} height={1024} />
                <Markdown>{content}</Markdown>
            </section>
        </section>
    );
};

export default Blog;
