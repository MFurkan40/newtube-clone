// Router Modules
import { categoriesRouter } from "@/modules/categories/server/procedures";

// TRPC
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
