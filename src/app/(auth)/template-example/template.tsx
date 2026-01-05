"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
  { name: "Forgot Password", path: "/forget-password" },
];

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  return <div className="auth-template">
    <input style={{border: "1px solid red"}} placeholder="Template Input" value={input} onChange={(e)=> setInput(e.target.value)} />
    {
      navLinks.map((link)=>{
        return (
          <Link href={link.path} key={link.name}>{link.name}</Link>
        )
      })
    }
    {children}
    </div>;
}