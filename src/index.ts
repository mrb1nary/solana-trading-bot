require("dotenv").config();

import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { fetchLLM } from "./fetchLLM";
import { fetchTweets } from "./fetchTweet";
import { swapToken } from "./swapToken";
import prompt from "prompt-sync";

const SOL_AMOUNT = 0.00001 * LAMPORTS_PER_SOL;
const usePrompt = prompt();
const username: Array<string> = [];
const tokenAddress = "5D27EZ1prg14zDFfDXZPfebej2Q4mX12VBqLeXdppump";

// Dummy data for testing LLM
const tweets = [
  {
    description:
      "Guys let's buy this token 5D27EZ1prg14zDFfDXZPfebej2Q4mX12VBqLeXdppump",
  },
  {
    description:
      "I am bullish on this HHbkmJw49HLJehxPh2M16EFuF5CKFNxY1HeBYNY4pump",
  },
  {
    description: "We are going to the moon with this $RAY",
  },
  {
    description: "Random tweet with no data",
  },
];

async function main(username: string) {
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
    const data = await fetchLLM(tweet.description);
    console.log(data);
    if (data != null) {
      // address.push(data);3
    }
  }
  //3. Use the data to create a txn on blockchain
  //   for (let tokenAddress of address) {
  //   }
  //   swapToken(tokenAddress, SOL_AMOUNT);
  // console.log(await findTokenWithSymbol("BENJI"))
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
