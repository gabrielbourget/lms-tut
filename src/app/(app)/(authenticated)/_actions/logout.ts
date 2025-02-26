"use server";

import { cookies } from "next/headers";

type LogoutResponse = {
  success: boolean;
  error?: string;
}

const logout = async (): Promise<LogoutResponse> => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("payload-token");

    return { success: true };
  } catch (error) {
    return { success: false, error: "Logout failed" };
  }
}

export default logout;
