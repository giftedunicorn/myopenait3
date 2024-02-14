import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import * as messageService from "~/server/api/services/message";

export const messageRouter = createTRPCRouter({
    getMessages: publicProcedure.query(async () => {
        return await messageService.getMessages()
    }),

    createMessage: publicProcedure
        .input(z.object({ content: z.string().min(1) }))
        .mutation(async ({ input }) => {
            await messageService.createMessage({ newMessage: input})
        }),

    getMessageById: publicProcedure
        .input(
            z.object({
                messageId: z.number(),
            }),
        )
        .query(async ({ input: { messageId } }) => {
            return await messageService.getMessageById({ messageId })
        }),
});
