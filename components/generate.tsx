"use client";
import { Input } from "./ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { createCompletion } from "@/app/action";

const Generate = () => {
    async function action(formData: FormData) {
        const prompt = formData.get("prompt");

        // if (!prompt) {
        //     //toast notification
        //     toast.error("Ohho! Biatch Do it again");
        // }

        // call server action

        const result = await createCompletion(prompt as string);
        if (result?.error) {
            toast.error(result.error);
        }
    }

    return (
        <section className="mx-auto max-w-2xl">
            <Card className="border-0 bg-white shadow-none hover:border-blue-400">
                <CardHeader className="text-center">
                    <CardTitle className="text-6xl ">
                        <span className="font-bold"> Ginie AI Blog</span>
                        <CardDescription className="mt-3 text-lg ">
                            Generate a blog post about anything
                        </CardDescription>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={action} className="mt-3">
                        <Input
                            name="prompt"
                            placeholder="What should I write aboout ?"
                            className="w-full rounded-lg p-2 text-center "
                        />
                        <Button
                            size="lg"
                            type="submit"
                            className="mt-3 w-full rounded-lg  text-xl font-semibold"
                        >
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default Generate;
