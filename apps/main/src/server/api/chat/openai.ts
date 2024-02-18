import OpenAI from "openai";
import { OpenAIStream } from "ai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export const runtime = "edge";

export async function openaiChat(prompt: string) {
    console.log("openaiChat called")
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.6,
        max_tokens: 300,
        stream: true,
    })

    return OpenAIStream(response)
}
