"use client";

import React from "react";
import { redirect, useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order placed");
    //   router.push("/");
    redirect("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button style={{ backgroundColor: "cyan" }} onClick={handleClick}>
        Place Order
      </button>
    </>
  );
}
