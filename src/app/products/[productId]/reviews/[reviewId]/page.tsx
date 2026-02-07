import { error } from "console";
import { notFound, redirect } from "next/navigation";

function randomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReviews({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {

  const random = randomInt(2);

  // if(random === 1){
  //   throw new Error("Error loading error");
  // }
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 100) {
    // notFound();
    redirect("/products");
  }
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
