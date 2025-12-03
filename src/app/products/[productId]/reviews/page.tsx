export default async function ReviewsListing({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <>
      <h1>Reviews</h1>
      <p>Product 1</p>
      <p>Product 2</p>
      <p>Product 3</p>
    </>
  );
}
