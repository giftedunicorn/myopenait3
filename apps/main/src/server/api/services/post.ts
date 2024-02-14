import { posts } from "~/server/db/schema";
import { db } from "~/server/db";

type NewPost = {
    name: string;
}

export async function create({ newPost }: { newPost: NewPost }) {
    return await db.insert(posts).values({
        name: newPost.name,
    });
}

export async function getLatest() {
    return await db.query.posts.findFirst({
        orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
}
