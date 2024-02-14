import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import * as userService from "~/server/api/services/user";

export const userRouter = createTRPCRouter({
    getUsers: publicProcedure.query(async () => {
        return await userService.getUsers();
    }),

    createUser: publicProcedure
        .input(z.object({ email: z.string().min(1) }))
        .mutation(async ({ input }) => {
            return await userService.createUser({ newUser: input });
        }),

    getUserById: publicProcedure
        .input(
            z.object({
                userId: z.number(),
            }),
        )
        .query(async ({ input: { userId } }) => {
            return await userService.getUserById({ userId });
        }),
});
