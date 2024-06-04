import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Loader2 } from "lucide-react";
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from "next";
import { type Articles } from "~/server/api/routers/post";

// export default function PostPage(){
//     return <h1>Broke hmmm</h1>
// }

const components = {
  IFrame({ url }: { url: string }) {
    return (
      <div className="relative w-full overflow-hidden pt-[56.25%]">
        <iframe
          src={url}
          title="YouTube video player"
          frame-border="0"
          loading="lazy"
          className="absolute left-0 top-0 aspect-video h-full w-full border-0"
        ></iframe>
      </div>
    );
  },
};

export default function PostPage({
  frontMatter,
  html,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (frontMatter.image === undefined || html === undefined) {
    return <Loader2 className="animate-spin" />;
  }
  return (
    <main className="flex min-h-screen flex-col items-center px-[100px]">
      <article className="flex max-w-[85ch] flex-col gap-10">
        <header className="flex flex-col gap-2">
          <h1 className="text-[4rem] font-bold leading-[8rem] tracking-tight sm:text-[4rem]">
            {frontMatter.title}
          </h1>
          {frontMatter.mime.startsWith("image") ? (
            <Image
              className="h-[400px] rounded-xl object-cover"
              src={frontMatter.image}
              alt="Picture of the author"
              width={2000}
              height={2000}
            />
          ) : (
            <video
              src={frontMatter.image}
              className="h-[400px] rounded-xl object-cover"
              width={2000}
              height={2000}
              autoPlay
              loop
            />
          )}
        </header>
        <main className="prose-2xl">
          <MDXRemote {...html} components={components} />
        </main>
      </article>
    </main>
  );
}

export const getStaticPaths = (async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?locale=fi&populate=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    },
  );

  const postsData = (await res.json()) as Articles;
  const paths = postsData?.data.map((post) => ({
    params: { slug: post.attributes.slug || "" },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?locale=fi&filters[slug]=${
      context.params?.slug as string
    }&populate=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    },
  );

  const postData = (await res.json()) as Articles;
  if (postData?.data[0] === undefined) {
    return {
      notFound: true,
    };
  }
  const content = await serialize(postData?.data[0]?.attributes.content);

  return {
    props: {
      frontMatter: {
        title: postData?.data[0]?.attributes.title,
        slug: postData?.data[0]?.attributes.slug,
        mime: postData?.data[0]?.attributes.media.data.attributes.mime,
        image: postData?.data[0]?.attributes.media.data.attributes.url,
      },
      html: content,
    },
  };
}) satisfies GetStaticProps;
