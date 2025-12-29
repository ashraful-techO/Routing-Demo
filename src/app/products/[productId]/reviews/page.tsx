export default async function ProductReviews({ params, }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  return (
    <>
      <h1>Product {productId}</h1>
      <p>Reviews1</p>
      <p>Reviews2</p>
      <p>Reviews3</p>
      <p>Reviews4</p>
    </>
  );
}