import { LanguageContext } from "../../utils/langContext";
import { useContext } from "react";

import { FeaturedStoryContext } from "../../utils/featuredStoryContext";

import { Image } from "../Image";

export function StoriesCarousel_Item({
  index,
  alt,
  img_src,
  full_name,
  job_title,
}: {
  index: number;
  alt: string;
  img_src: string;
  full_name: string;
  job_title: string;
}) {
  // Get the current language from LanguageContext
  const { lang } = useContext(LanguageContext);

  // Extract the title, text, and stories from lang.stories_page
  const { view_story_btn } = lang.stories_page;

  const { setFeatStory } = useContext(FeaturedStoryContext);

  return (
    <div className="">
      <figure className="max-w-[200px] max-h-[200px]">
        <Image src={img_src} alt={alt} className="rounded" />
      </figure>
      <div className="max-w-[200px]">
        <h3>{full_name}</h3>
        <p className="text-lg font-thin">{job_title}</p>
      </div>
      <button className="hover:underline" onClick={() => setFeatStory(index)}>
        {view_story_btn}
      </button>
    </div>
  );
}
