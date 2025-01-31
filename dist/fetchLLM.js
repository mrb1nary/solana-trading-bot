"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchLLM = fetchLLM;
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const axios_1 = __importDefault(require("axios"));
const groq = new groq_sdk_1.default({ apiKey: process.env.GROQ_API_KEY });
// System prompt for the LLM
const systemPrompt = `
You are an AI agent that needs to analyze a tweet and determine if it is positively promoting a Solana token. 
If the tweet contains a Solana token address, return the address. 
If the tweet does not contain a token address but contains a token symbol, return the symbol after removing any special characters that is prefixed to the token name. The token symbol is usually 3 to 6 characters long and is prefixed by $ and mostly uppercase. 
If the tweet is not promoting a token or does not contain a token address/symbol, return null.
Only return the token address, symbol, or null. Do not include any additional text in your response.
`;
// Function to find token address using symbol
async function findTokenWithSymbol(symbol) {
    try {
        const response = await axios_1.default.get("https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json");
        // Find the token by symbol (case-insensitive)
        const tokens = response.data.tokens;
        const token = tokens.find((token) => token.symbol.trim().toLowerCase() === symbol.trim().toLowerCase());
        return token ? token.address : null; // Return the address if found, otherwise null
    }
    catch (error) {
        console.error("Error fetching token list:", error);
        return null;
    }
}
// Plan Phase: Decide what action to take
async function plan(tweetData) {
    var _a, _b;
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
    const response = ((_b = (_a = chat.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || "";
    if (response === "null") {
        return { action: "returnNull", data: null };
        //More edge cases can be added here later or maybe a separate function altogether
    }
    else if (response.endsWith("pump") ||
        response.length === 44 ||
        response.length === 43) {
        // Check for Solana address format
        return { action: "extractAddress", data: response };
    }
    else {
        return { action: "extractSymbol", data: response };
    }
}
// Action Phase: Perform the decided action
async function action(planResult) {
    switch (planResult.action) {
        case "extractAddress":
            return planResult.data; // Return the address directly
        case "extractSymbol":
            return await findTokenWithSymbol(planResult.data); // Fetch address using symbol
        case "returnNull":
            return null; // Return null
        default:
            return null;
    }
}
// Observe Phase: Evaluate the result and return the final output
async function observe(tweetData) {
    const planResult = await plan(tweetData); // Plan
    const result = await action(planResult); // Action
    return result; // Observe
}
// Main function to use the AI agent
async function fetchLLM(tweetData) {
    return await observe(tweetData);
}
