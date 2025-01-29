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
exports.fetchTweets = fetchTweets;
const axios = require("axios");
const MAX_TIME_OF_TWEET = 1 * 3 * 60 * 60 * 1000; // 60 minutes
function fetchTweets(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: "GET",
            url: "https://twitter-api45.p.rapidapi.com/timeline.php",
            params: {
                screenname: username,
            },
            headers: {
                "x-rapidapi-key": "686f44df1fmsh9d34af184325120p10f750jsnb29f03ab1cba",
                "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
            },
        };
        try {
            const response = yield axios.request(options);
            const cleanedResponse = response.data.timeline;
            const tweets = [];
            for (const tweet of cleanedResponse) {
                if (tweet.text.length > 0) {
                    tweets.push({
                        id: tweet.tweet_id,
                        createdAt: tweet.created_at,
                        description: tweet.text,
                    });
                }
            }
            const now = Date.now();
            const filteredTweets = tweets.filter((tweet) => {
                const tweetTime = new Date(tweet.createdAt).getTime();
                return tweetTime > now - MAX_TIME_OF_TWEET;
            });
            console.log(filteredTweets);
            return filteredTweets;
        }
        catch (error) {
            console.error("Error fetching tweets:", error);
            return [];
        }
    });
}
