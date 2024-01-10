const { Client, IntentsBitField} = require('discord.js')
const secret = require('./secret');


const client = new Client({
    intents : [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers, 
        IntentsBitField.Flags.GuildMessages, 
        IntentsBitField.Flags.MessageContent,
    ],
})


client.login(secret.token); 