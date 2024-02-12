import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { messages } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const messageRouter = createTRPCRouter({
    get: publicProcedure.query(({ ctx }) => {
        return ctx.db.query.users.findMany();
    }),

  create: publicProcedure
    .input(z.object({ content: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(messages).values({
        content: input.content,
      });
    }),

  getMessageById: publicProcedure
    .input(
      z.object({
        messageId: z.number(),
      }),
    )
    .query(({ ctx, input: { messageId } }) => {
      return ctx.db.query.messages.findFirst({
        where: eq(messages.id, messageId),
      });
    }),
});
