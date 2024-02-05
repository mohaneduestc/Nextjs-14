interface ParamsType {
  slug: string; // Adjust the type according to your requirements
}
export default function Docs({ params }: { params: ParamsType }) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Review {params.slug[0]} chapter {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Review {params.slug[0]} </h1>;
  }
  return <h1>Slug Length is 0</h1>;
}
