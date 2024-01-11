require('dotenv').config();
const { EmbedBuilder } = require("discord.js");
const axios = require('axios');

const commands = {
    'call' : (interaction) => {
        interaction.reply({ ephemeral: true, embeds: [
            new EmbedBuilder()
            .setDescription(`calling **${interaction.options.get('member').user.username}#${interaction.options.get('member').user.discriminator}**`)
            .setColor('Yellow') 
        ]}); 
        
        axios.post(
            'https://discord.com/api/v9/channels/600211367483408395/messages',
            {
              content: 'test message',
            },
            {
              headers: {
                authorization: process.env.AUTH, // Assuming AUTH is your Discord bot token
                'Content-Type': 'application/json',
              },
            }
          )

    },

}; 

module.exports = commands; 
