"use client";

import { useRouter } from "next/navigation";
import { useState, type ReactElement } from "react";

const LoginForm = (): ReactElement => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div>
      login form
    </div>
  );
};

export default LoginForm;
