"use server";

import OpenAI from "openai";
import { auth } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import { decode } from "base64-arraybuffer";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function createCompletion(prompt: string) {
    if (!prompt) {
        return { error: "Ohho! Prompt is required" };
    }

    const { userId } = auth();
    if (!userId) {
        return { error: "User is not logged in" };
    }

    // generate blog post using openai
    const messages: any = [
        {
            role: "user",
            content: `write a blog post around 200 words about the following topics: [${prompt}]`,
        },
    ];

    const completion = await openai.chat.completions.create({
        messages,
        model: "gpt-3.5-turbo",
    });

    const content = completion?.choices?.[0]?.message?.content;
    if (!content) {
        return { error: "Unable to generate the blog content" };
    }

    // generate an image using openai
    const image = await openai.images.generate({
        model: "dall-e-2",
        prompt: `Generate an image for a blog post about [${prompt}]`,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json",
    });
    const imageName = `blog-${Date.now()}`;
    const imageData = image?.data?.[0]?.b64_json as string;
    if (!imageData) {
        return { error: "Unable to generate the blog image" };
    }

    //upload the image to supabase storage
    const { data, error } = await supabase.storage
        .from("blogs")
        .upload(imageName, decode(imageData), {
            contentType: "image/png",
        });
    if (error) {
        return { error: "Unable to Upload the blog image to Storage" };
    }

    const path = data?.path;
    const url = process.env.SUPABASE_URL;
    const imageUrl = `${url}/storage/v1/object/public/blogs/${path}`;

    // create a new blog post in supabase
    const { data: blog, error: blogError } = await supabase
        .from("blogs")
        .insert([{ title: prompt, content, imageUrl, userId }])
        .select();

    if (blogError) {
        return { error: "Unable to insert the blog into the database." };
    }
    const blogId = blog?.[0]?.id;
    revalidatePath("/");
    redirect(`/blog/${blogId}`);
}
