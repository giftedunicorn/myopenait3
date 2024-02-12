import { postRouter } from "~/server/api/routers/post";
import { userRouter } from "~/server/api/routers/user";
import { chatRouter } from "~/server/api/routers/chat";
import { messageRouter } from "~/server/api/routers/message";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    post: postRouter,
    user: userRouter,
    chat: chatRouter,
    message: messageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
