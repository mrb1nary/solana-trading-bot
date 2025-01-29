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
const swapToken_1 = require("./swapToken");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let SOL_AMOUNT = 0.0001 * web3_js_1.LAMPORTS_PER_SOL;
const usePrompt = (0, prompt_sync_1.default)();
const username = [];
// Dummy data for testing LLM
// const tokenAddress = "5D27EZ1prg14zDFfDXZPfebej2Q4mX12VBqLeXdppump";
const tweets = [
    {
        description: "Guys let's buy this token 5D27EZ1prg14zDFfDXZPfebej2Q4mX12VBqLeXdppump",
    },
    //   {
    //     description:
    //       "I am bullish on this HHbkmJw49HLJehxPh2M16EFuF5CKFNxY1HeBYNY4pump",
    //   },
    //   {
    //     description: "We are going to the moon with this $RAY",
    //   },
    //   {
    //     description: "Random tweet with no data",
    //   },
];
function main(username) {
    return __awaiter(this, void 0, void 0, function* () {
        //1. Fetch tweets from a user/multiple user
        // console.log("\n\n 🔍 Fetching tweets from user: ", username);
        // const tweets = await fetchTweets(username);
        // console.log(tweets);
        //2. Send the tweet to AI Agent/LLM and extract the data
        console.log("🤖 Invoking AI Agent \n\n");
        const address = [];
        for (let tweet of tweets) {
            const data = yield (0, fetchLLM_1.fetchLLM)(tweet.description);
            if (data != null && !address.includes(data)) {
                address.push(data);
            }
            console.log(data);
        }
        console.log("\n✅ Final List of Unique Addresses:", address);
        //3. Use the data to create a txn on blockchain
        const solAmtInput = usePrompt("Enter the amount of SOL to swap: ");
        SOL_AMOUNT = parseFloat(solAmtInput) * web3_js_1.LAMPORTS_PER_SOL;
        for (let tokenAddress of address) {
            (0, swapToken_1.swapToken)(tokenAddress, SOL_AMOUNT);
        }
    });
}
while (true) {
    const usernameInput = usePrompt("Enter the Twitter/X username: ");
    username.push(usernameInput);
    const continueInput = usePrompt("Do you want to add another username? (y/n): ");
    if (continueInput.toLowerCase() !== "y") {
        break;
    }
}
// for (let user of username) {
//   main(user);
// }
main("test");
