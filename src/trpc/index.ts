import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    anyApiRoute : publicProcedure.query(() => {
        return 'Hello from public procedure'
    })
})

export type AppRouter = typeof appRouter