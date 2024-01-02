import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// import { Loader2 } from "lucide-react";
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from "next";
import { type Articles } from "~/server/api/routers/post";

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
  // if (isPostLoading) {
  //   return <Loader2 className="animate-spin" />;
  // }
  return (
    <main className="flex min-h-screen flex-col items-center px-[100px]">
      <article className="flex max-w-[85ch] flex-col gap-10">
        <header className="flex flex-col gap-2">
          <h1 className="text-[8.125rem] font-bold leading-[8rem] tracking-tight sm:text-[8.125rem]">
            {frontMatter.title}
          </h1>
          {frontMatter.mime?.startsWith("image") ? (
            <Image
              className="h-[400px] rounded-xl object-cover"
              src={frontMatter.image}
              alt="Picture of the author"
              width={2000}
              height={2000}
            />
          ) : (
            <video
              controls
              src={frontMatter.image}
              className="h-[400px] rounded-xl object-cover"
              width={2000}
              height={2000}
            />
          )}
        </header>
        <main className="prose-2xl">
          {/* <Suspense fallback={<Loader2 className="animate-spin" />}> */}
          <MDXRemote {...html} components={components} />
          {/* </Suspense> */}
        </main>
      </article>
    </main>
  );
}

export const getStaticPaths = (async () => {
  const res = await fetch(
    `http://localhost:1337/api/articles?locale=fi&populate=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    },
  );

  const postsData = (await res.json()) as Articles;
  const paths = postsData?.data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const res = await fetch(
    `http://localhost:1337/api/articles?locale=fi&filters[slug]=${
      context.params?.slug as string
    }&populate=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    },
  );

  const postData = (await res.json()) as Articles;
  const content = await serialize(postData?.data[0]?.attributes.content);

  return {
    props: {
      frontMatter: {
        title: postData?.data[0]?.attributes.title,
        slug: postData?.data[0]?.attributes.slug,
        mime: postData?.data[0]?.attributes.image.data.attributes.mime,
        image: postData?.data[0]?.attributes.image.data.attributes.url,
      },
      html: content,
    },
  };
}) satisfies GetStaticProps;