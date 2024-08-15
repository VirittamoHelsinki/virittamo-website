import { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Toggle } from "~/@/components/ui/toggle";
import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";
import { translations } from "~/utils/translations";

type Category = "" | "news" | "projects" | "stories";

export default function BlogPage() {
  const { locale } = useLang();
  const [category, setCategory] = useState<Category>("");
  const { data: blogData, isLoading: isBlogLoading } =
    api.post.getAllPost.useQuery({ lang: locale });
  const { data: categoryData, isLoading: isCategoryLoading } =
    api.post.getFilteredPosts.useQuery({ lang: locale, category });
  const { data: blogPage, isLoading: isBlogPageLoading } =
    api.post.getPage.useQuery({ lang: locale });
  if (
    isBlogLoading || !blogData ||
    isCategoryLoading || !categoryData ||
    isBlogPageLoading || !blogPage
  ) {
    return <div className="bg-white min-h-screen"></div>;
  }

  const { all, news, projects, stories } = translations[locale];

  const filteredData =
    category == "news" || category === "projects" || category === "stories"
      ? categoryData
      : blogData;
  return (
    <main className="flex min-h-screen flex-col px-[20px] sm:px-10 md:px-[100px] lg:mx-[150px]">
      <Suspense fallback={"loading..."}>
        <div className="flex flex-col sm:gap-6 sm:gap-10">
          <h1 className="text-[2.5rem] sm:text-[4rem] mt-[40px] sm:mt-[0px] font-bold leading-tight sm:leading-[8rem] tracking-tight">
            {blogPage.data.attributes.title}
          </h1>
          <p className="text-lg sm:text-[1.25rem]">
            {blogPage.data.attributes.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-[25px] pt-[40px] sm:pt-[3.375rem] pb-[24px] sm:pb-[40px]">
          <Toggle
            pressed={category === ""}
            onPressedChange={(value) => setCategory(value ? "" : "")}
            variant="outline"
            className="rounded-full border-black text-lg sm:text-[1.5625rem]"
          >
            {all}
          </Toggle>
          <Toggle
            pressed={category === "news"}
            onPressedChange={(value) => setCategory(value ? "news" : "")}
            variant="outline"
            className="rounded-full border-black text-lg sm:text-[1.5625rem]"
          >
            {news}
          </Toggle>
          <Toggle
            pressed={category === "projects"}
            onPressedChange={(value) => setCategory(value ? "projects" : "")}
            variant="outline"
            className="rounded-full border-black text-lg sm:text-[1.5625rem]"
          >
            {projects}
          </Toggle>
          <Toggle
            pressed={category === "stories"}
            onPressedChange={(value) => setCategory(value ? "stories" : "")}
            variant="outline"
            className="rounded-full border-black text-lg sm:text-[1.5625rem]"
          >
            {stories}
          </Toggle>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-[24px] sm:gap-[40px]">
          {filteredData?.data.map((article, index) => (
            <li key={index} className="flex max-w-full sm:max-w-[508px] flex-col gap-[10px]">
              <Link href={`/blog/${article.attributes.slug}`} passHref>
                {article.attributes.media?.data?.attributes?.mime.startsWith(
                  "image",
                ) ? (
                  <Image
                    className="h-[200px] sm:h-[400px] w-full rounded-xl object-cover"
                    src={article.attributes.media.data.attributes.url}
                    alt="Picture of the author"
                    width={2000}
                    height={2000}
                  />
                ) : (
                  <video
                    disablePictureInPicture={true}
                    controls={false}
                    src={article.attributes.media.data.attributes.url}
                    className="h-[200px] sm:h-[400px] w-full rounded-xl object-cover"
                    width={2000}
                    height={800}
                    autoPlay
                    loop
                  />
                )}
                <h3 className="text-xl sm:text-[2.5rem] sm:mt-[20px] leading-[40px]">
                  {article.attributes.title}
                </h3>
                <p className="hidden sm:block text-lg sm:text-[25px] sm:mt-[10px]">
                  {article.attributes.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  );
}