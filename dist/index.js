"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const web3_js_1 = require("@solana/web3.js");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let SOL_AMOUNT = 0.0001 * web3_js_1.LAMPORTS_PER_SOL;
let MAX_TIME_OF_TWEET = 1 * 60 * 1000; // 1 minute
let SCRIPT_RUNTIME = 1 * 60 * 1000; // 1 minute
const usePrompt = (0, prompt_sync_1.default)();
const username = [];
// Dummy data for testing LLM
// const tokenAddress = "5D27EZ1prg14zDFfDXZPfebej2Q4mX12VBqLeXdppump";
// const tweets = [
//   {
//     description:
//       "Guys let's buy this token 5D27EZ1prg14zDFfDXZPfebej2Q4mX12VBqLeXdppump",
//   },
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
// ];
async function main(username) {
    //1. Fetch tweets from a user/multiple user
    // console.log("\n\n 🔍 Fetching tweets from user: ", username);
    // const tweets = await fetchTweets(username, MAX_TIME_OF_TWEET);
    // console.log(tweets);
    //2. Send the tweet to AI Agent/LLM and extract the data
    // console.log("🤖 Invoking AI Agent \n\n");
    // const address: string[] = [];
    // for (let tweet of tweets) {
    //   const data = await fetchLLM(tweet.description);
    //   if (data != null && !address.includes(data)) {
    //     address.push(data);
    //   }
    //   console.log(data);
    // }
    // console.log("\n✅ Final List of Unique Addresses:", address);
    //3. Use the data to create a txn on blockchain
    // const solAmtInput = usePrompt("Enter the amount of SOL to swap: ");
    // SOL_AMOUNT = parseFloat(solAmtInput) * LAMPORTS_PER_SOL;
    // for (let tokenAddress of address) {
    //   swapToken(tokenAddress, SOL_AMOUNT);
    // }
    console.log("Fetching tweets from: ", username);
    console.log("You are inside main function");
}
const scriptRuntimeInput = usePrompt("How long do you want the script to run? Enter in minutes(Default is 1 min): ");
let runtime = parseInt(scriptRuntimeInput);
if (!isNaN(runtime)) {
    SCRIPT_RUNTIME = runtime * 60 * 1000;
}
const startTime = Date.now();
const timeInput = usePrompt("How recent tweets do you want to scrape? Enter time in minutes(Default is 1 min): ");
let time = parseInt(timeInput);
if (!isNaN(time)) {
    MAX_TIME_OF_TWEET = time * 60 * 1000;
}
while (true) {
    const usernameInput = usePrompt("Enter the Twitter/X username: ");
    username.push(usernameInput);
    const continueInput = usePrompt("Do you want to add another username? (y/n): ");
    if (continueInput.toLowerCase() !== "y") {
        break;
    }
}
async function entrypoint() {
    while (Date.now() - startTime < SCRIPT_RUNTIME) {
        for (let user of username) {
            if (Date.now() - startTime >= SCRIPT_RUNTIME) {
                console.log("\n⏳ Time's up! Stopping execution.\n");
                break; // Exit if runtime exceeds limit
            }
            console.log(`\n🔄 Scraping data for @${user}...`);
            main(user);
        }
        console.log("\n🕐 Cooldown before next iteration...", SCRIPT_RUNTIME);
        const timer = await new Promise((resolve) => setTimeout(resolve, 30000));
    }
    console.log("\n🎯 Script execution completed.");
}
entrypoint();
//Main function to test the code
// main("test");
