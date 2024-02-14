import { chats } from "~/server/db/schema";
import { db } from "~/server/db";
import { eq } from "drizzle-orm";

type NewChat = {
    title: string;
}

export async function getChats() {
    return await db.query.chats.findMany();
}

export async function createChat({ newChat }: { newChat: NewChat }) {
    return await db.insert(chats).values({
        title: newChat.title,
    });
}

export async function getChatById({ chatId }: { chatId: number }) {
    return await db.query.chats.findFirst({
        where: eq(chats.id, chatId),
    });
}
