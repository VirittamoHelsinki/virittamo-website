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
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?locale=fi&filters[slug]=${context.params?.slug as string
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
        alt: postData?.data[0]?.attributes.media.data.attributes.alternativeText,
      },
      html: content,
    },
  };
}) satisfies GetStaticProps;