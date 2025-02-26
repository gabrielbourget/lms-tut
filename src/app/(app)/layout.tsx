import type { ReactNode } from "react";
import "./styles.css";

type TRootLayoutProps = {
  children: ReactNode;
}

export default function RootLayout({ children }: TRootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}