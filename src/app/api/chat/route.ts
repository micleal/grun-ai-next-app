import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  console.log(messages)

  const res = streamText({
    model: openai('gpt-3.5-turbo'),
    messages,
    
  })

  console.log(res)

  return res.toDataStreamResponse()
}
