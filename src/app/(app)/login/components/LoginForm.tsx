"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState, type ReactElement } from "react";
import SubmitButton from "@/app/(app)/components/SubmitButton";
import { login, LoginResponse } from "../actions/login";

const LoginForm = (): ReactElement => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(evt.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res: LoginResponse = await login({ email, password });

    setIsPending(false);

    if (res.success) router.push("/dashboard");
    else setError(res.error || "An error occurred while logging in.");
  };

  return (
    <div className="flex gap-8 min-h-full flex-col justify-center items-center">
      <div className="text-3xl">
        Login
      </div>
      <div className="w-full mx-auto sm:max-w-sm">
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input className="textInput" name="email" type="email" id="email" />
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <label htmlFor="password">Password</label>
            <input className="textInput" name="password" type="password" id="password" />
          </div>

          { error && <div className="text-red-500">{error}</div> }

          <SubmitButton text="Login" loading={isPending} />
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Don&apos;t have an account? <a href="/registration" className="text-blue-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
