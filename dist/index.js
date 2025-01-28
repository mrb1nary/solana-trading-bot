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
require("dotenv").config();
const web3_js_1 = require("@solana/web3.js");
const fetchLLM_1 = require("./fetchLLM");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const SOL_AMOUNT = 0.00001 * web3_js_1.LAMPORTS_PER_SOL;
const usePrompt = (0, prompt_sync_1.default)();
const username = [];
const tokenAddress = "5D27EZ1prg14zDFfDXZPfebej2Q4mX12VBqLeXdppump";
// Dummy data for testing LLM
const tweets = [
    {
        description: "Guys let's buy this token 5D27EZ1prg14zDFfDXZPfebej2Q4mX12VBqLeXdppump",
    },
    {
        description: "I am bullish on this HHbkmJw49HLJehxPh2M16EFuF5CKFNxY1HeBYNY4pump",
    },
    {
        description: "We are going to the moon with this $RAY",
    },
    {
        description: "Random tweet with no data",
    },
];
function main(username) {
    return __awaiter(this, void 0, void 0, function* () {
        //1. Fetch tweets from a user/multiple user
        //   console.log("\n\n 🔍 Fetching tweets from user: ", username);
        //   const tweets = await fetchTweets(username);
        //   console.log(tweets);
        //2. Send the tweet to AI Agent/LLM and extract the data
        //   console.log("🤖 Invoking AI Agent \n\n");
        //   const address = [];
        //   console.log(
        //     "These are the addresses of the tokens fetched from the tweet\n\n:"
        //   );
        for (let tweet of tweets) {
            const data = yield (0, fetchLLM_1.fetchLLM)(tweet.description);
            console.log(data);
            // address.push(data);3
        }
        //3. Use the data to create a txn on blockchain
        //   for (let tokenAddress of address) {
        //   }
        //   swapToken(tokenAddress, SOL_AMOUNT);
        // console.log(await findTokenWithSymbol("BENJI"))
    });
}
// while (true) {
//   const usernameInput = usePrompt("Enter the Twitter/X username: ");
//   username.push(usernameInput);
//   const continueInput = usePrompt(
//     "Do you want to add another username? (y/n): "
//   );
//   if (continueInput.toLowerCase() !== "y") {
//     break; // Exit the loop if the user doesn't say "yes"
//   }
// }
// for (let user of username) {
// main(user);
// }
main("elonmusk");
