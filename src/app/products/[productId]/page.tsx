import { Metadata } from "next";

type Props = {
  params: {
    productId: string; // Adjust the type according to your requirements
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Welcome ProductDetails {params.productId}</h1>;
}
