import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { users } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const userRouter = createTRPCRouter({
    get: publicProcedure.query(({ ctx }) => {
        return ctx.db.query.users.findMany();
    }),

    create: publicProcedure
        .input(z.object({ email: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            await ctx.db.insert(users).values({
                email: input.email,
            });
        }),

    getUserById: publicProcedure
        .input(
            z.object({
                userId: z.number(),
            }),
        )
        .query(({ ctx, input: { userId } }) => {
            return ctx.db.query.users.findFirst({
                where: eq(users.id, userId),
            });
        }),
});
