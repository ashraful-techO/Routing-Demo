export default async function ArticleLayout({
  children,
  params,
  searchParams,
}: {
  children: React.ReactNode;
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "bn" }>;
}) {
  const { articleId } = await params;
//   const { lang } = await searchParams;
  return (
    <div>
      <h2>Article Layout</h2>
      <p>Article ID: {articleId}</p>
      {/* <p>Language: {lang}</p> */}
      {children}
    </div>
  );
}
