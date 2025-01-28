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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const fetchLLM_1 = require("./fetchLLM");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        //TODO
        //4 step process
        //1. Fetch tweets from a user/multiple user
        //   const tweets = await fetchTweets("elonmusk");
        //   console.log(tweets);
        //2. Send the tweet to AI Agent/LLM and extract the data
        const exampleTweet = `I am liking this steady climb from the bottom on Butthole coin, forming a nice support leading in to a very bullish week We are just warming up! @thebuttholecoin 
  CboMcTUYUcy9E6B3yGdFn6aEsGUnYV6yWeoeukw6pump`;
        const data = (0, fetchLLM_1.fetchLLM)(exampleTweet).then((data) => {
            console.log(data);
        });
        //3. Use the data to create a txn on blockchain
        //4. Send the txn to the blockchain
    });
}
main();
