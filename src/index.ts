require("dotenv").config();

import { fetchLLM } from "./fetchLLM";
import { fetchTweets } from "./fetchTweet";

async function main() {
  //TODO
  //4 step process
  //1. Fetch tweets from a user/multiple user

  //   const tweets = await fetchTweets("elonmusk");
  //   console.log(tweets);
  //2. Send the tweet to AI Agent/LLM and extract the data
  const exampleTweet = `I am liking this steady climb from the bottom on Butthole coin, forming a nice support leading in to a very bullish week We are just warming up! @thebuttholecoin 
  CboMcTUYUcy9E6B3yGdFn6aEsGUnYV6yWeoeukw6pump`;


  const data = fetchLLM(exampleTweet).then((data) => {
    console.log(data);
  });

  //3. Use the data to create a txn on blockchain
  //4. Send the txn to the blockchain
}

main();
