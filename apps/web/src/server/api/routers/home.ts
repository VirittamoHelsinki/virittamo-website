// import { z } from "zod";
import { z } from "zod";
import { type Articles } from "~/server/api/routers/post";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type Homepage = {
  data: HomepageData;
  meta: Meta;
};

export type HomepageData = {
  id: number;
  attributes: PurpleAttributes;
};

export type PurpleAttributes = {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  teamHeading: string;
  projectHeading: string;
  projectLinkName: string;
  applyHeading: string;
  applyDescription: string;
  locale: string;
  hero: Hero;
  partners: Partners;
  wwa: Wwa;
  teamAccordion: TeamAccordion[];
  employed: Employed;
  criterion: Criterion;
  benefit: AttributesBenefit;
};

export type AttributesBenefit = {
  id: number;
  name: string;
  benefits: BenefitElement[];
};

export type BenefitElement = {
  id: number;
  name: string;
  description: string;
  link: null | string;
  linkName: null | string;
};

export type Criterion = {
  id: number;
  name: string;
  heading: string;
  note: string;
  criterionList: CriterionList[];
};

export type CriterionList = {
  id: number;
  name: string;
  item: Item[];
};

export type Item = {
  id: number;
  name: string;
};

export type Employed = {
  id: number;
  title: string;
  logos: Logo[];
};

export type Logo = {
  id: number;
  img: Img;
};

export type Marquee = {
  id: number;
  name: string;
};

export type Hero = {
  id: number;
  title: string;
  description: string;
  img: Img;
  proofing: CtaButton[];
  ctaButton: CtaButton;
};

export type CtaButton = {
  id: number;
  name: string;
  action: string;
};

export type Partners = {
  id: number;
  title: string;
  partners: Partner[];
};

export type Partner = {
  id: number;
  img: Img;
};
export type TeamAccordion = {
  id: number;
  name: string;
  description: string;
  marquee: Marquee[];
  button: Button;
};

export type Button = {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
};

export type Wwa = {
  id: number;
  title: string;
  description: string;
  img: Img;
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

export type Meta = object;

export const homeRouter = createTRPCRouter({
  getPage: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${process.env.API_URL}/api/home-page?locale=${input.lang}&populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Homepage;

      return data;
    }),
  getHero: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${process.env.API_URL}/api/home-page?locale=${input.lang}&populate[hero][populate]=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Homepage;

      return data;
    }),
  getPartners: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${process.env.API_URL}/api/home-page?locale=${input.lang}&populate[partners][populate][partners][populate]=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Homepage;

      return data;
    }),
  getSlides: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `http://localhost:1337/api/articles?locale=${input.lang}&filters[feature][$eq]=true&populate=*`,
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
  getWwa: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${process.env.API_URL}/api/home-page?locale=${input.lang}&populate[wwa][populate]=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Homepage;

      return data;
    }),
  getTeams: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${process.env.API_URL}/api/home-page?locale=${input.lang}&populate[teamAccordion][populate][marquee][populate]=*&populate[teamAccordion][populate][button][populate]=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Homepage;

      return data;
    }),
  getProjects: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${process.env.API_URL}/api/articles?locale=${input.lang}&filters[feature][$eq]=true&filters[categories][name][$eq]=project&populate=*`,
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
  getCriterion: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${process.env.API_URL}/api/home-page?locale=${input.lang}&populate[criterion][populate][criterionList][populate]=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Homepage;

      return data;
    }),
  getBenefit: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${process.env.API_URL}/api/home-page?locale=${input.lang}&populate[benefit][populate]=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Homepage;

      return data;
    }),
  getEmployed: publicProcedure
    .input(z.object({ lang: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${process.env.API_URL}/api/home-page?locale=${input.lang}&populate[employed][populate][logos][populate]=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        },
      );

      const data = (await res.json()) as Homepage;

      return data;
    }),
});
