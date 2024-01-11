require('dotenv').config();
const commands = require('./handle-commands.js');
const { Client, 
        IntentsBitField, 
        GatewayIntentBits,
        EmbedBuilder } = require('discord.js'); 



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
    const CommandName = interaction.commandName;

    if (commands.hasOwnProperty(CommandName)){
        console.log(CommandName);
        commands[CommandName](interaction);
        
    } else {
        console.log(`Unknown interaction - ${commandName}`)
    }
    
}); 


client.login(process.env.TOKEN); 