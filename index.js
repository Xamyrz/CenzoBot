const Discord = require("discord.js");
const config = require('./config.json');
const client = new Discord.Client();
const fs = require('file-system');

console.log("CenzoBot is running");
client.login(config.token);

client.on("message", async message => {
    if(message.author.bot) return;
    console.log(message);
});
