import { getAllBlogs } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";
import { formData } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const AllBlogs = async () => {
    const blogs = await getAllBlogs();
    return (
        <div className="mt-44">
            <h2 className="text-xl font-semibold leading-none tracking-tight">
                Recent Blogs
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {blogs?.map(blog => (
                    <Card key={blog.id} className="overflow-hidden">
                        <CardContent className="p-0">
                            <Link href={`/blog/${blog.id}`} key={blog.id}>
                                <Image
                                    alt={`${blog.id}`}
                                    src={blog.imageUrl}
                                    width={200}
                                    height={200}
                                    className="w-full"
                                />
                                <div className="px-4 pb-3 pt-2">
                                    <h3 className="font-medium">
                                        {blog.title}
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                        {formData(blog.created_at)}
                                    </p>
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AllBlogs;
