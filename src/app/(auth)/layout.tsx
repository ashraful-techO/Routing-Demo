"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


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
  const [input, setInput] = useState("");
  return (
    <div className="auth-layout">
      <div>
        <input style={{border: "1px solid black"}} value={input} onChange={(e)=> setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.path ||
          (pathname.startsWith(link.path) && link.path !== "/");
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
