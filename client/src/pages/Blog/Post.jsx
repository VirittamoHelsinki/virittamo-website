import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Loading from "../../components/Loading/Loading";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { getMe } from "../../utils/getStrapiData";

export function Post() {
  const { id } = useParams();
  const { isLoading, data: postData } = useQuery({
    queryKey: ["postData"],
    queryFn: () => getMe(`http://localhost:1337/api/articles/${id}?populate=*`),
  });
  return (
    <Suspense fallback={<Loading />}>
      {isLoading ? (
        "loading..."
      ) : (
        <article style={{ marginBlock: "1rem", maxWidth: "75ch" }}>
          <h1>{postData.data.attributes.title}</h1>
          <p className="pb-2">{postData.data.attributes.description}</p>
          <img
            className="pb-2"
            style={{ height: "300px" }}
            src={`http://localhost:1337${postData.data.attributes.banner.data.attributes.url}`}
            alt="banner image"
          />
          <div className="prose-lg">
            <ReactMarkdown className="prose-lg">
              {postData.data.attributes.body}
            </ReactMarkdown>
          </div>
        </article>
      )}
    </Suspense>
  );
}
