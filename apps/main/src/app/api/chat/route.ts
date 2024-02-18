import { openaiChat } from "~/server/api/chat/openai";

export async function POST(req: Request) {
    console.log("api chat called")
    const { prompt } = await req.json()
    const stream =  await openaiChat(prompt)

    return new Response(stream, {
        headers: {
            "Content-Type": "text/event-stream; charset=utf-8",
            Connection: "keep-alive",
            "Cache-Control": "no-cache, no-transform",
            "X-Accel-Buffering": "no",
            "Content-Encoding": "none",
        },
    });
}