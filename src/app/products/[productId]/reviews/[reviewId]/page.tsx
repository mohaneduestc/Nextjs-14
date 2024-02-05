"use client";

import { notFound } from "next/navigation";

interface ParamsType {
  productId: string; // Adjust the type according to your requirements
  reviewId: string; // Adjust the type according to your requirements
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ProductDetails({ params }: { params: ParamsType }) {
  const random = getRandomInt(2);
  console.log(random)
  if (random === 1) {
    throw new Error("Error Loading Review");
  }

  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for Product {params.productId}
    </h1>
  );
}
