import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Loader2 } from "lucide-react";
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from "next";
import { useLang } from "~/utils/lang-provider";
import { translations } from "~/utils/translations";
import { useRouter } from 'next/router';

const components = {
  IFrame({ url }: { url: string }) {
    return (
      <div className="relative w-full overflow-hidden pt-[56.25%]">
        <iframe
          src={url}
          title="YouTube video player"
          frameBorder="0"
          loading="lazy"
          className="absolute left-0 top-0 aspect-video h-full w-full border-0"
        ></iframe>
      </div>
    );
  },
};


interface MediaAttributes {
  mime: string;
  url: string;
  alternativeText: string;
}

interface MediaData {
  attributes: MediaAttributes;
}

interface PostAttributes {
  title: string;
  slug: string;
  content: string;
  media: {
    data: MediaData;
  };
}

interface PostData {
  attributes: PostAttributes;
}

interface ApiResponse {
  data: PostData[];
}

type FrontMatter = {
  title: string;
  slug: string;
  mime: string;
  image: string;
  alt: string;
};

type PostPageProps = {
  frontMatter: FrontMatter;
  html: any;
};



export default function PostPage({
  frontMatter,
  html,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (frontMatter.image === undefined || html === undefined) {
    return <Loader2 className="animate-spin" />;
  }

  const router = useRouter();

  const { locale } = useLang();
  const {
    back,
  } = translations[locale];


  return (
    <main className="flex min-h-screen flex-col items-center">

      <article className="flex mx-[20px] flex-col">
        <div className="self-start mt-4 ml-0">
          <button
            onClick={() => router.push('/blog')}
            className="text-[20px] md:text-[30px] 2xl:text-[40px] pt-[20px] sm:pt-[50px]"
          >
            &larr; {back}
          </button>
        </div>
        <header className="flex flex-col gap-2">
          <h1 className="text-[32px] md:text-[52px] 2xl:text-[64px] mb-[40px] mt-[40px] md:mb-[60px] md:mt-[60px] font-bold leading-tight md:leading-[8rem] tracking-tight">
            {frontMatter.title}
          </h1>
          <div className="mx-[-20px] sm:mx-0">
            {frontMatter.mime.startsWith("image") ? (
              <div className="flex flex-col items-center">
                <Image
                  className="h-[200px] md:h-[400px] 2xl:h-[600px] w-full sm:rounded-xl object-cover"
                  src={frontMatter.image}
                  alt={frontMatter.alt}
                  width={2000}
                  height={2000}
                />
                {frontMatter.alt && (
                  <p className="md:mt-[20px] self-start mt-[8px] 2xl:text-[20px] md:text-[18px] text-[12px] text-[#2E2E2E] ml-[20px] sm:ml-[0px]">
                    {frontMatter.alt}
                  </p>
                )}
              </div>
            ) : (
              <video
                src={frontMatter.image}
                className="h-[200px] sm:h-[400px] w-full sm:rounded-xl object-cover"
                width={2000}
                height={2000}
                autoPlay
                loop
                controls
                playsInline
                webkit-playsinline
              />
            )}
          </div>
        </header>
        <main className="prose prose-lg mt-[40px] md:mt-[60px] 2xl:mt-[100px]">
          <MDXRemote {...html} components={components} />
        </main>
        <div className="self-start mt-4 ml-0">
          <button
            onClick={() => router.push('/blog')}
            className="text-[20px] md:text-[30px] 2xl:text-[40px] pt-[20px] sm:pt-[50px]"
          >
            &larr; {back}
          </button>
        </div>
      </article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ["fi", "sv", "en"];
  const fetchPathsForLocale = async (locale: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?locale=${locale}&populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      },
    );
    const postsData: ApiResponse = await res.json(); // Use the `ApiResponse` type here
    return postsData.data.map((post) => ({
      params: { slug: post.attributes.slug || "" },
    }));
  };

  const pathsArray = await Promise.all(locales.map(fetchPathsForLocale));
  const paths = pathsArray.flat(); // Flatten the array of arrays

  return {
    paths,
    fallback: "blocking",
  };
};


export const getStaticProps: GetStaticProps<PostPageProps> = async (context) => {
  const locales = ["fi", "sv", "en"];
  const slug = context.params?.slug as string;

  const fetchArticleForLocale = async (locale: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?locale=${locale}&filters[slug][$eq]=${slug}&populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      },
    );
    const response: ApiResponse = await res.json(); // Use the `ApiResponse` type here
    return response;
  };

  // Fetch articles for all locales
  const articlesData = await Promise.all(locales.map(fetchArticleForLocale));
  const articles = articlesData.flat(); // Flatten the array of arrays

  // Find the article in the requested locale
  const article = articles.find((data) => data.data.length > 0);

  if (!article) {
    return {
      notFound: true,
    };
  }

  const postData = article.data[0];
  const content = await serialize(postData!.attributes.content);

  return {
    props: {
      frontMatter: {
        title: postData!.attributes.title,
        slug: postData!.attributes.slug,
        mime: postData!.attributes.media.data.attributes.mime,
        image: postData!.attributes.media.data.attributes.url,
        alt: postData!.attributes.media.data.attributes.alternativeText,
      },
      html: content,
    },
  };
};
