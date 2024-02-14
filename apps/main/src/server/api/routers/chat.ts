import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import * as chatService from "~/server/api/services/chat";

export const chatRouter = createTRPCRouter({
    getChats: publicProcedure.query(async () => {
        return await chatService.getChats()
    }),

    createChat: publicProcedure
        .input(z.object({ title: z.string().min(1) }))
        .mutation(async ({ input }) => {
            await chatService.createChat({ newChat: input })
        }),

    getChatById: publicProcedure
        .input(
            z.object({
                chatId: z.number(),
            }),
        )
        .query(async ({ input: { chatId } }) => {
            return await chatService.getChatById({ chatId })
        }),
});
