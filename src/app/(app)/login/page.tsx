import type { ReactElement } from "react";
import LoginForm from "./components/LoginForm";

export default async function page(): Promise<ReactElement> {

  return (
    <>
      <LoginForm />
    </>
  );
};
