import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In – KVK",
};

export default function AuthLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
