require("dotenv").config();

import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { fetchLLM } from "./fetchLLM";
import { fetchTweets } from "./fetchTweet";
import { swapToken } from "./swapToken";
import prompt from "prompt-sync";

let SOL_AMOUNT = 0.0001 * LAMPORTS_PER_SOL;
const usePrompt = prompt();
const username: Array<string> = [];

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

async function main(username: string) {
  //1. Fetch tweets from a user/multiple user
  console.log("\n\n 🔍 Fetching tweets from user: ", username);
  const tweets = await fetchTweets(username);
  console.log(tweets);

  //2. Send the tweet to AI Agent/LLM and extract the data
  console.log("🤖 Invoking AI Agent \n\n");
  const address: string[] = [];

  for (let tweet of tweets) {
    const data = await fetchLLM(tweet.description);
    if (data != null && !address.includes(data)) {
      address.push(data);
    }
    console.log(data);
  }
  console.log("\n✅ Final List of Unique Addresses:", address);

  //3. Use the data to create a txn on blockchain
  // const solAmtInput = usePrompt("Enter the amount of SOL to swap: ");
  // SOL_AMOUNT = parseFloat(solAmtInput) * LAMPORTS_PER_SOL;
  // for (let tokenAddress of address) {
  //   swapToken(tokenAddress, SOL_AMOUNT);
  // }
}

while (true) {
  const usernameInput = usePrompt("Enter the Twitter/X username: ");
  username.push(usernameInput);

  const continueInput = usePrompt(
    "Do you want to add another username? (y/n): "
  );
  if (continueInput.toLowerCase() !== "y") {
    break;
  }
}

for (let user of username) {
  main(user);
}
