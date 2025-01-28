import Groq from "groq-sdk";
import axios from "axios";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// System prompt for the LLM
const systemPrompt = `
You are an AI agent that needs to analyze a tweet and determine if it is positively promoting a Solana token. 
If the tweet contains a Solana token address, return the address. 
If the tweet does not contain a token address but contains a token symbol, return the symbol after removing any special characters that is prefixed to the token name. The token symbol is usually 3 to 6 characters long and is prefixed by $ and mostly uppercase. 
If the tweet is not promoting a token or does not contain a token address/symbol, return null.
Only return the token address, symbol, or null. Do not include any additional text in your response.
`;

// Function to find token address using symbol
async function findTokenWithSymbol(symbol: string): Promise<string | null> {
  try {
    
    const response = await axios.get(
      "https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json"
    );

    // Find the token by symbol (case-insensitive)
    const tokens = response.data.tokens;

    const token = tokens.find(
      (token: { symbol: string }) =>
        token.symbol.trim().toLowerCase() === symbol.trim().toLowerCase()
    );

    return token ? token.address : null; // Return the address if found, otherwise null
  } catch (error) {
    console.error("Error fetching token list:", error);
    return null;
  }
}

// Plan Phase: Decide what action to take
async function plan(
  tweetData: string
): Promise<{
  action: "extractAddress" | "extractSymbol" | "returnNull";
  data: string | null;
}> {
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

  const response = chat.choices[0]?.message?.content || "";

  if (response === "null") {
    return { action: "returnNull", data: null };
  } else if (response.startsWith("SOL") || response.length === 44) {
    // Check for Solana address format
    return { action: "extractAddress", data: response };
  } else {
    return { action: "extractSymbol", data: response };
  }
}

// Action Phase: Perform the decided action
async function action(planResult: {
  action: "extractAddress" | "extractSymbol" | "returnNull";
  data: string | null;
}): Promise<string | null> {
  switch (planResult.action) {
    case "extractAddress":
      return planResult.data; // Return the address directly
    case "extractSymbol":
      return await findTokenWithSymbol(planResult.data!); // Fetch address using symbol
    case "returnNull":
      return null; // Return null
    default:
      return null;
  }
}

// Observe Phase: Evaluate the result and return the final output
async function observe(tweetData: string): Promise<string | null> {
  const planResult = await plan(tweetData); // Plan
  const result = await action(planResult); // Action
  return result; // Observe
}

// Main function to use the AI agent
export async function fetchLLM(tweetData: string): Promise<string | null> {
  return await observe(tweetData);
}
