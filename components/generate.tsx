"use client";
import { Input } from "./ui/input";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { createCompletion } from "@/app/action";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";

const Generate = () => {
    async function action(formData: FormData) {
        const prompt = formData.get("prompt");

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
                    <CardTitle className="text-5xl">
                        <span className="font-bold">Genie Ai Blogger</span>
                    </CardTitle>
                    <CardDescription className="mt-3 text-lg ">
                        Generate a blog post about anything
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={action} className="mt-3">
                        <Input
                            name="prompt"
                            placeholder="What should I write aboout ?"
                            className="w-full rounded-lg p-2 text-center "
                        />
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <>
            <SignedIn>
                <Button
                    size="lg"
                    type="submit"
                    className={cn(
                        "mt-3 w-full rounded-lg font-semibold",
                        pending && "animate-pulse"
                    )}
                >
                    {pending ? "Working on it..." : "Submit"}
                </Button>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button
                        size="lg"
                        type="button"
                        variant="secondary"
                        className="mt-3 w-full rounded-lg font-medium"
                    >
                        Sign in to start
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    );
};

export default Generate;
