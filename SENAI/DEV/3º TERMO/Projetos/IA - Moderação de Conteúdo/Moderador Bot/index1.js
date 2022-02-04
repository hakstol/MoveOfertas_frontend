const Discord = require("discord.js")
const config = require("./config.json")
const axios = require("axios")
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

const api = axios.create({
    baseURL: 'https://moderationapi.com/api/v1/moderation/text'
})

client.on("ready", () => {
  console.log(`Logado como ${client.user.tag}`);
})

client.login(config.botToken)

client.on("message", (message) => {
  
  const apiToken = config.apiToken
{
    api.post(" ", {
        value: message.content
    }, {
        headers: {
            "Authorization": "Bearer " + apiToken
        }
    }).then(resposta => {
        const toxidade = resposta.data.toxicity.label_scores.TOXICITY

        if(toxidade >= 0.7){
          console.log("funcionou")
          message.reply("Esse tipo de mensagem não é permitida aqui neste servidor!")
          .then(message.delete())
        }
    })
  } 
})

client.login('OTM4MTUyNjEwNDY3MzA3NjAw.YfmItA.SxWclR7UkN1QeBhOJAg4xFsT4GY');

