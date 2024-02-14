import { users } from "~/server/db/schema";
import { db } from "~/server/db";
import { eq } from "drizzle-orm";

type NewUser = {
    email: string;
}

export async function getUsers() {
    return await db.query.users.findMany();
}

export async function createUser({ newUser }: { newUser: NewUser }) {
    return await db.insert(users).values({
        email: newUser.email,
    });
}

export async function getUserById({ userId }: { userId: number }) {
    return await db.query.users.findFirst({
        where: eq(users.id, userId),
    });
}
