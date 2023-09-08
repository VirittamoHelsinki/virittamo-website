import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Loading from "../../components/Loading/Loading";
import { getMe } from "../../utils/getStrapiData";

export function Blog() {
  const { isLoading, data: blogData } = useQuery({
    queryKey: ["postData"],
    queryFn: () => getMe("http://localhost:1337/api/articles"),
  });
  return (
    <Suspense fallback={<Loading />}>
      <main style={{ display: 'flex', flexDirection: 'column', flexGrow: 1}}>
      <h1>Kaikki Postaukset</h1>
      <ul>
        {isLoading
          ? "loading..."
          : blogData.data.map((post) => (
              <a href={`/blog/${post.id}`} key={post.id}>
                <h2>{post.attributes.title}</h2>
                <p>{post.attributes.description}</p>
              </a>
            ))}
      </ul>
      </main>
    </Suspense>
  );
}
