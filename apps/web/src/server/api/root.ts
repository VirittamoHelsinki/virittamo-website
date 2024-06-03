import { aboutRouter } from "~/server/api/routers/about";
import { companyRouter } from "~/server/api/routers/company";
import { homeRouter } from "~/server/api/routers/home";
import { postRouter } from "~/server/api/routers/post";
import { jobseekerRouter } from "~/server/api/routers/jobseeker";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  about: aboutRouter,
  company: companyRouter,
  home: homeRouter,
  post: postRouter,
  jobseeker: jobseekerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
