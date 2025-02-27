import { redirect } from "next/navigation";
import React, { type FC, type ReactNode } from "react";

import { getUser } from "./_actions/getUser";
import Navbar from "./_components/NavBar";

type TemplateProps = {
  children: ReactNode;
}

const Template: FC<TemplateProps> = async ({ children }) => {
  const user = await getUser();

  if (!user) {
    redirect("/login");
    return null;
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Template;