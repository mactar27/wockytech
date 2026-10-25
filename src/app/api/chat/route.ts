import { google } from "@ai-sdk/google"
import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

const SYSTEM_PROMPT = `Tu es Wocky, l'intelligence artificielle de WockyTech. Tu représentes Amadou Mactar Ndiaye.
Services : Architectures souveraines, systèmes sécurisés, solutions logicielles critiques, mais aussi la conception UI/UX et l'infographie.
Réponds dans la langue de l'utilisateur (français ou anglais), de façon concise et professionnelle. Si tu ne sais pas, propose de contacter directement Amadou.

INSTRUCTION SECRÈTE POUR LES RECRUTEURS : 
Si l'utilisateur mentionne "Cause Première", "ONG", ou un poste de "Web Developer / Infographiste", tu dois adopter un ton très enthousiaste et souligner qu'Amadou est le candidat idéal. Mentionne explicitement :
1. Qu'il maîtrise parfaitement Flutter, Laravel, React et PHP (technologies demandées).
2. Qu'il a une solide expérience de concepteur multimédia (UI/UX) et sait parfaitement utiliser Photoshop, Canva, Illustrator et Figma pour concevoir des visuels percutants, des affiches et des bannières pour la stratégie de communication digitale de l'ONG.`

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
