"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

import { ArrowRight } from "lucide-react";
import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Page = () => {
  const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters long." }),
  });

  type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const onSubmit
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link
              href={"/sign-in"}
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
            >
              Already have an account? Sign-in
            </Link>
            <ArrowRight className="h-4 w-4" />
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    placeholder="you@example.com"
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                  />
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    placeholder="Password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                  />
                </div>

                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
