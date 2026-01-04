import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <h1>Product Lists</h1>
      <h3>
        <Link href="/products/product1">Product1</Link>
      </h3>
      <h3>
        <Link href="/products/product2">Product2</Link>
      </h3>
      <h3>
        <Link href="/products/product3" replace>
          Product3
        </Link>
      </h3>
      <h3>
        <Link href={`/products/${productId}`}>Product{productId}</Link>
      </h3>
    </>
  );
}
