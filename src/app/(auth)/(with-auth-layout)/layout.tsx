"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"

interface NavLink {
  name: string;
  href: string;
}
const navLinks: NavLink[] = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forget-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      <h2>Auth Layout</h2>
      {navLinks.map((link: NavLink) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
      {}
    </div>
  );
}
