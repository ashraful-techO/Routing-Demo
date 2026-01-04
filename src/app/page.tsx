import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Go to Blog</Link>
      <Link href="/products">Go to Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=bn">Read in Bengali</Link>
      
    </>
  );
}
