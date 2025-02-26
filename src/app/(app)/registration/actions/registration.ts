"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import { cookies } from "next/headers";
import type { Customer } from "@/payload-types";

type RegistrationParams = {
  email: string;
  password: string;
}

export type RegistrationResponse = {
  success: boolean;
  error?: string
}

export type RegistrationResult = {
  exp?: number;
  token?: string;
  user?: Customer;
  error?: string;
}

export async function registration({ email, password }: RegistrationParams): Promise<RegistrationResponse> {
  const payload = await getPayload({ config });
  
  try {
    await payload.create({
      collection: "customers",
      data: { email, password }
    });
    
    const res = await payload.login({
      collection: "customers",
      data: { email, password }
    });
    
    if (res.token) {
      const cookieStore = await cookies();
      cookieStore.set({
        name: "payload-token",
        value: res.token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });

      return { success: true };
    }

    else {
      return { success: false, error: `Error logging in after registration.` };
    }
  } catch (err) {
    return { success: false, error: `Error registering user: ${err}` };
  }
};
