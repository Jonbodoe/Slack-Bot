const { App } = require("@slack/bolt");
require('dotenv').config();
const axios = require("axios")

const bot = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
});

const composeMessage = (imageURL, text) => {
    return {
      blocks: [
        {
          type: "image",
          image_url: imageURL,
          alt_text: text || "Huskyssss"
        }
      ]
    };
  };

  
const fetchDoggo = () => {
console.log("GOT THE DOGGGGGGGGGGGG")
  return axios("https://dog.ceo/api/breed/husky/images/random")
    .then(function(response) {
        console.log(response.data.message)
      // handle success
      return composeMessage(response.data.message, "Random Husky Image");
    })
    .catch(err => console.log(err));
  }

bot.event('app_mention', async ({ event, context, say }) => {  
  const doggo = await fetchDoggo();
    try {
       bot.client.chat.postMessage(
            {
                token: context.botToken,
                channel: event.channel,
                // contains channel ID 
                text: "hello",
                ...doggo
            }
        );
    } catch (error) {
        console.log(error)
    }
  // say(`Hello world, <@${event.user}>!`);
});
(async () => {
    await bot.start(process.env.PORT || 3000);
    console.log("⚡️ Bolt app is running!");
})();

