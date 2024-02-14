import { messages } from "~/server/db/schema";
import { db } from "~/server/db";
import { eq } from "drizzle-orm";

type NewMessage = {
    content: string;
}

export async function getMessages() {
    return await db.query.messages.findMany();
}

export async function createMessage({ newMessage }: { newMessage: NewMessage }) {
    return await db.insert(messages).values({
        content: newMessage.content,
    });
}

export async function getMessageById({ messageId }: { messageId: number }) {
    return await db.query.messages.findFirst({
        where: eq(messages.id, messageId),
    });
}
