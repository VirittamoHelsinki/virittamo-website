import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type Jobseekerpage = {
  data: JobseekerpageData;
  meta: Meta;
};

export type JobseekerpageData = {
  id: number;
  attributes: PurpleAttributes;
};

export type PurpleAttributes = {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  applyHeading: string;
  applyDescription: string;
  offerHeading: string;
  offerDescription: string;
  criterionHeading: string;
  criterionDescription: string;
  criterionLink: string;
  criterionList: CriterionList[];
  description: string;
  locale: string;
  services: Service[];
  image: Img;
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


export type Service = {
  id: number;
  title: string;
  description: string;
};

  export type CriterionList = {
    id: number;
    name: string;
  };

export type Meta = object;

export const jobseekerRouter = createTRPCRouter({
  getPage: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${process.env.API_URL}/api/job-seekerpage?locale=${input.lang}&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );
      const data = (await res.json()) as Jobseekerpage;
      return data;
    }),
});