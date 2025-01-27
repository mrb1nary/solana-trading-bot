require("dotenv").config();

import { fetchTweets } from "./fetchTweet";

async function main() {
  //TODO
  //4 step process
  //1. Fetch tweets from a user/multiple user

  const tweets = await fetchTweets("elonmusk");
  console.log(tweets);
  //2. Send the tweet to AI Agent/LLM and extract the data
  //3. Use the data to create a txn on blockchain
  //4. Send the txn to the blockchain
}

main();
