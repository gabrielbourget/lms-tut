import { redirect } from "next/navigation";
import React, { type FC, type ReactNode } from "react";

import { getUser } from "./actions/getUser";

type LayoutProps = {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = async ({ children }) => {
  const user = await getUser();

  if (!user) {
    redirect("/login");
    return null;
  }

  return (
    <>
      {children}
    </>
  );
};
