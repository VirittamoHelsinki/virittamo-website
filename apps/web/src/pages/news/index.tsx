import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../utils/getStrapiData";

type PostData = {
  id: number;
  attributes: Attributes;
};

type Attributes = {
  title: string;
  description: string;
};
export function NewsPage() {
  const { isLoading, data: blogData } = useQuery({
    queryKey: ["newsData"],
    queryFn: () => getMe("http://localhost:1337/api/articles"),
  });
  return (
    <main style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <h1>Kaikki Postaukset</h1>
      <ul>
        {isLoading
          ? "loading..."
          : blogData.data.map((post: PostData) => (
              <a href={`/news/${post.id}`} key={post.id}>
                <h2>{post.attributes.title}</h2>
                <p>{post.attributes.description}</p>
              </a>
            ))}
      </ul>
    </main>
  );
}
