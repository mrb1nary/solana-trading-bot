"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchLLM = fetchLLM;
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const groq = new groq_sdk_1.default({ apiKey: process.env.GROQ_API_KEY });
function fetchLLM(tweetData) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const chat = yield groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are an AI agent that needs to tell me if this tweet is about buying a token. Return me either the address of the solana token, or return me null if you cant find a solana token address in this tweet. Return if the tweet is positively promoting a token. For example it could be a tweet from a user containing lesssgoo, to the moon, bullish, etc. Only return the address of the token if the tweet is positively promoting the token. If the tweet is not promoting a token, return null. Don't write anything else in the response just the token address.",
                },
                { role: "user", content: tweetData },
            ],
            model: "llama-3.3-70b-versatile",
        });
        return ((_b = (_a = chat.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || "";
    });
}
