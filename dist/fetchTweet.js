"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTweets = fetchTweets;
const axios = require("axios");
async function fetchTweets(username, MAX_TIME_OF_TWEET) {
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
        const response = await axios.request(options);
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
}
