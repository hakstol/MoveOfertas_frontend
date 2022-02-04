const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

client.on("ready", () => {
  console.log(`Logado como ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
  if (message.content == "Escreva um xingamento (em inglês)"){
    message.reply("fuck you")
  }
})
  client.on("messageCreate", (message) => {
    if (message.content == "Cite outros (em inglês)"){
      message.reply("bitch, asshole, shit ")
    }
});

client.login(config.botToken)