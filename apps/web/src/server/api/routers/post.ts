import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type Articles = {
  data: ArticlesDatum[];
  meta: Meta;
};

export type ArticlesDatum = {
  id: number;
  attributes: PurpleAttributes;
};

export type PurpleAttributes = {
  title: string;
  description: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  feature: boolean;
  slug: string;
  locale: string;
  media: Image;
  categories: Categories;
  localizations: Categories;
};

export type Categories = {
  data: CategoriesDatum[];
};

export type CategoriesDatum = {
  id: number;
  attributes: FluffyAttributes;
};

export type FluffyAttributes = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export type Image = {
  data: Data;
};

export type Data = {
  id: number;
  attributes: DataAttributes;
};

export type DataAttributes = {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: "webp";
  mime: MIME;
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
  ext: "webp";
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};

export type MIME = "image/webp" | "image/jpeg";

export type Meta = {
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export const postRouter = createTRPCRouter({
  getPage: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:1337/api/blogpage?locale=${input.lang}&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as string;

      return data;
    }),
  getAllPost: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:1337/api/articles?locale=${input.lang}&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Articles;

      return data;
    }),

  getAllNews: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:1337/api/articles?locale=${input.lang}&filters[categories][name][$eq]=news&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as string;

      return data;
    }),
  getAllProjects: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:1337/api/articles?locale=${input.lang}&filters[categories][name][$eq]=project&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Articles;

      return data;
    }),
  getAllStories: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:1337/api/articles?locale=${input.lang}&filters[categories][name][$eq]=story&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as string;

      return data;
    }),
  getPost: publicProcedure
    .input(z.object({ lang: z.string(), slug: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:1337/api/articles?locale=${input.lang}&filters[slug]=${input.slug}&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Articles;

      return data;
    }),
  getFilteredPosts: publicProcedure
    .input(z.object({ lang: z.string(), category: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:1337/api/articles?locale=${input.lang}&filters[categories][name][$eq]=${input.category}&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Articles;

      return data;
    }),
});
