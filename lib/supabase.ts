import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getBlogId(id: number) {
    const { data, error } = await supabase
        .from("blogs")
        .select()
        .eq("id", id)
        .single();

    if (error) {
        // alert(error.message);
        return error.message; //abort
    }
    return data;
}

export async function getAllBlogs() {
    const { data, error } = await supabase
        .from("blogs")
        .select()
        .order("created_at", { ascending: false });

    if (error) {
        // alert(error.message);
        return error.message; //abort
    }
    return data;
}
