import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account – KVK",
};

export default function AuthRegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
