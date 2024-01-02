import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type Companypage = {
  data: CompanypageData;
  meta: Meta;
};

export type CompanypageData = {
  id: number;
  attributes: PurpleAttributes;
};

export type PurpleAttributes = {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  description: string;
  locale: string;
  img: Img;
  services: Service[];
  // localizations: Localizations;
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

// export type Localizations = {
//   data: any[];
// }

export type Service = {
  id: number;
  title: string;
  description: string;
};

export type Meta = object;

export const companyRouter = createTRPCRouter({
  getPage: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:1337/api/companies-page?locale=${input.lang}&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Companypage;
      return data;
    }),
});
