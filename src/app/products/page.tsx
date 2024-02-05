import Link from "next/link";

export default function Products() {
  return (
    <>
      <Link href={"/"}>Home</Link>

      <h1>List Products</h1>
      <h2>
        <Link href={"/products/1"}>Welcome Products 1</Link>
      </h2>
      <h2>
        <Link href={"/products/2"}>Welcome Products 2</Link>
      </h2>
      <h2>
        <Link href={"/products/3"} replace>
          Welcome Products 3
        </Link>
      </h2>
    </>
  );
}
