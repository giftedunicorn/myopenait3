import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { chats } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const chatRouter = createTRPCRouter({
    get: publicProcedure.query(({ ctx }) => {
        return ctx.db.query.chats.findMany();
    }),

    create: publicProcedure
        .input(z.object({ title: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            await ctx.db.insert(chats).values({
                title: input.title,
            });
        }),

    getChatById: publicProcedure
        .input(
            z.object({
                chatId: z.number(),
            }),
        )
        .query(({ ctx, input: { chatId } }) => {
            return ctx.db.query.chats.findFirst({
                where: eq(chats.id, chatId),
            });
        }),
});
