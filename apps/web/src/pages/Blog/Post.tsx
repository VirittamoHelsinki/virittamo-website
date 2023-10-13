import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { getMe } from "../../utils/getStrapiData";
import { type Lang, LanguageContext } from "../../utils/langContext";

export default function Post() {
  const { lang, fi } = useContext(LanguageContext) as Lang;
  const { id } = useParams();
  const { isLoading, data: postData } = useQuery({
    queryKey: ["postData", lang],
    queryFn: () => getMe(`http://localhost:1337/api/articles/${id}?populate=*`),
  });
  const { isLoading: imgIsLoading, data: imageData } = useQuery({
    queryKey: ["imageData"],
    queryFn: () => getMe(`http://localhost:1337/api/articles/${id}?populate=*`),
  });

  return (
    <>
      {isLoading || imgIsLoading ? (
        "loading..."
      ) : (
        <article style={{ paddingBlock: "1rem", maxWidth: "75ch" }}>
          <h1 className="text-6xl">
            {lang === fi
              ? postData.data.attributes.title
              : postData.data.attributes.localizations.data[0].attributes.title}
          </h1>
          <p className="pb-2">
            {lang === fi
              ? postData.data.attributes.description
              : postData.data.attributes.localizations.data[0].attributes
                  .description}
          </p>
          <img
            className="pb-2 object-cover w-full"
            style={{ height: "300px" }}
           // src={`http://localhost:1337${imageData.data.attributes.banner.data.attributes.url}`}
            src='https://via.placeholder.com/300'
            alt="banner image"
          />
          <div className="prose-lg">
            <ReactMarkdown className="prose-lg">
              {lang === fi
                ? postData.data.attributes.content
                : postData.data.attributes.localizations.data[0].attributes
                    .content}
            </ReactMarkdown>
          </div>
        </article>
      )}
    </>
  );
}
