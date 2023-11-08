"use client"

import Loader from "@/components/ui/Loader";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

const LoginButton = () => {
    const mutation = useMutation({
        mutationFn: async() => signIn(
                undefined, 
                { callbackUrl: '/' }
            )
    });

    return (
        <Button 
            variant="outline" size="sm" onClick={() => mutation.mutate()} disabled={mutation.isPending}>
            {mutation.isPending ? 
                <Loader size={12} /> :
                <LogIn className="mr-2" size={12}></LogIn>
            }
             Log In
        </Button>
    );
}

export default LoginButton;