require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js'); 
const { intersection } = require('lodash');

const client = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is up.`);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return; 

    if (interaction.command)
}); 


client.login(process.env.TOKEN); 