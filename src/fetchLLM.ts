import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const systemPrompt =
  "You are an AI agent that needs to tell me if this tweet is about buying a token. Return me either the address of the solana token, or return me null if you cant find a solana token address in this tweet. Return if the tweet is positively promoting a token. For example it could be a tweet from a user containing lesssgoo, to the moon, bullish, etc. Only return the address of the token if the tweet is positively promoting the token. If the tweet is not promoting a token, return null. Don't write anything else in the response just the token address.";

export async function fetchLLM(tweetData: string) {
  const chat = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },

      { role: "user", content: tweetData },
    ],

    model: "llama-3.3-70b-versatile",
  });

  return chat.choices[0]?.message?.content || "";
}
