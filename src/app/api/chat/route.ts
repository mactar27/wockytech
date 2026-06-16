import { google } from "@ai-sdk/google"
import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

const SYSTEM_PROMPT = `Tu es Wocky, l'intelligence artificielle de WockyTech, spécialisée dans les architectures souveraines et les systèmes sécurisés. Tu représentes l'architecte Amadou Mactar Ndiaye.
Services : Architectures souveraines, systèmes sécurisés, solutions logicielles critiques.
Réponds dans la langue de l'utilisateur (français ou anglais), de façon concise et professionnelle. Si tu ne sais pas, propose de contacter directement Amadou Mactar Ndiaye.`

export async function POST(req: Request) {
  const body = await req.json()
  console.log("ROUTE PAYLOAD:", JSON.stringify(body, null, 2))
  const { messages } = body

  const formattedMessages = (messages || []).map((m: any) => ({
    ...m,
    parts: m.parts ?? [{ type: "text", text: m.content || "" }],
  }))

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(formattedMessages),
  })

  return result.toTextStreamResponse()
}
