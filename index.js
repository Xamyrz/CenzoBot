const Commando = require('discord.js-commando');
const config = require('./config.json');
const client = new Commando.Client();
const fs = require('file-system');

console.log("CenzoBot is running");

client.login(config.token);
