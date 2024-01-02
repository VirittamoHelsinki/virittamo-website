import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type Aboutpage = {
  data: AboutpageData;
  meta: Meta;
};

export type AboutpageData = {
  id: number;
  attributes: PurpleAttributes;
};

export type PurpleAttributes = {
  title: string;
  description: string;
  heading1: string;
  heading2: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  img: Img;
  contacts: Contact[];
  values: Value[];
  // localizations: Localizations;
};

export type Contact = {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
};

export type Img = {
  data: ImgData;
};

export type ImgData = {
  id: number;
  attributes: FluffyAttributes;
};

export type FluffyAttributes = {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
};

export type Formats = {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
};

export type Large = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};

export type Value = {
  id: number;
  title: string;
  description: string;
};

// export type Localizations = {
//   data: any[];
// }

export type Meta = object;

export const aboutRouter = createTRPCRouter({
  getPage: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:1337/api/about-page?locale=${input.lang}&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Aboutpage;
      return data;
    }),
});
