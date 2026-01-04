import Link from "next/link";
import React from "react";

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "bn" }>;
}) {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Read in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
        <Link href={`/articles/${articleId}?lang=bn`}>Read in Bengali</Link>
      </div>
    </div>
  );
}
