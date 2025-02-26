"use client";

import { useRouter } from "next/navigation";
import { useState, type ReactElement } from "react";

const LoginForm = (): ReactElement => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="flex gap-8 min-h-full flex-col justify-center items-center">
      <div className="text-3xl">
        Login
      </div>
      <div className="w-full mx-auto sm:max-w-sm">
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input className="textInput" type="email" id="email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input className="textInput" type="password" id="password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
