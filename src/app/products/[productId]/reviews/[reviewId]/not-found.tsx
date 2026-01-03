"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  // console.log("Product ID from pathname:", productId);
  // console.log("Review ID from pathname:", reviewId);
  return (
    <h1>
      Review for {reviewId} was not found under Product {productId}.
    </h1>
  );
}
