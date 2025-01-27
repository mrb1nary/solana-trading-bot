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
const fetchTweet_1 = require("./fetchTweet");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        //TODO
        //4 step process
        //1. Fetch tweets from a user/multiple user
        const tweets = yield (0, fetchTweet_1.fetchTweets)("elonmusk");
        console.log(tweets);
        //2. Send the tweet to AI Agent/LLM and extract the data
        //3. Use the data to create a txn on blockchain
        //4. Send the txn to the blockchain
    });
}
main();
