const axios = require("axios");

interface Tweet {
  id: string;
  createdAt: string;
  description: string;
}

const MAX_TIME_OF_TWEET = 1 * 60 * 60 * 1000; // 60 minutes

export async function fetchTweets(username: string) {
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
    const tweets: Tweet[] = [];

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

  } catch (error) {
    console.error("Error fetching tweets:", error);
    return [];
  }
}
