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
  if (isBlogLoading || !blogData) return;
  if (isCategoryLoading || !categoryData) return;
  if (isBlogPageLoading || !blogPage) return;
  const {
    all,
    news, 
    projects, 
    stories, 
  } = translations[locale];

  const filteredData =
    category == "news" || category === "projects" || category === "stories"
      ? categoryData
      : blogData;
  return (
    <main className="flex min-h-screen flex-col gap-10 px-[100px]">
      <Suspense fallback={"loading..."}>
        <div className="flex flex-col gap-10">
          <h1 className="text-[8.125rem] font-bold leading-[8rem] tracking-tight sm:text-[8.125rem]">
          {blogPage.attributes.title}
          </h1>
          <p className="text-[1.875rem]">
          {blogPage.attributes.description}
          </p>
        </div>

        <div className="flex gap-5">
        <Toggle
            pressed={category === ""}
            onPressedChange={(value) => setCategory(value ? "" : "")}
            variant="outline"
            className="rounded-full border-black text-[1.5625rem]"
          >
            {all}
          </Toggle>
          <Toggle
            pressed={category === "news"}
            onPressedChange={(value) => setCategory(value ? "news" : "")}
            variant="outline"
            className="rounded-full border-black text-[1.5625rem]"
          >
            {news}
          </Toggle>
          <Toggle
            pressed={category === "projects"}
            onPressedChange={(value) => setCategory(value ? "projects" : "")}
            variant="outline"
            className="rounded-full border-black  text-[1.5625rem]"
          >
            {projects}
          </Toggle>
          <Toggle
            pressed={category === "stories"}
            onPressedChange={(value) => setCategory(value ? "stories" : "")}
            variant="outline"
            className="rounded-full border-black  text-[1.5625rem]"
          >
            {stories}
          </Toggle>
        </div>

        <ul className="grid grid-cols-3 gap-[62px]">
          {filteredData?.data.map((article, index) => (
            <li key={index} className="flex max-w-[508px] flex-col gap-[10px]">
              <Link href={`/blog/${article.attributes.slug}`} passHref>
                {article.attributes.media?.data?.attributes?.mime.startsWith(
                  "image",
                ) ? (
                  <Image
                    className="h-[500px] w-[535px] rounded-xl object-cover"
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
                    className="h-[500px] w-[535px] rounded-xl object-cover"
                    width={2000}
                    height={800}
                    autoPlay
                    loop
                  />
                )}
                <h3 className="text-[2.5rem] font-bold">
                  {article.attributes.title}
                </h3>
                <p className="text-[1.5625rem]">
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
