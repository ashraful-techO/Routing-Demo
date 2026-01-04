"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../global.css";

const navLinks = [
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
  { name: "Forgot Password", path: "/forget-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="auth-layout">
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            href={link.path}
            key={link.name}>
            {" "}
            {""}
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
